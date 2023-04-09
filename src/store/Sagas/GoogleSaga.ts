import ApiCalendar from 'react-google-calendar-api';
import { TokenResponse } from '@react-oauth/google';
import { call, put, takeLatest } from 'redux-saga/effects';

import { GoogleEventsActions } from '../Reducers';

const config = {
  clientId: `${process.env.REACT_GOOGLE_CLIENT_ID}.apps.googleusercontent.com`,
  apiKey: `${process.env.REACT_GOOGLE_API_KEY}`,
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
};
const apiCalendar = new ApiCalendar(config);
const fetchGoogleEventsAC = () => ({
  type: 'FETCH_GOOGLE_EVENTS',
});

const loginGoogleAC = (token: TokenResponse) => ({
  type: 'LOGIN_GOOGLE_OAUTH2',
  payload: token,
});

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchGoogleEvents() {
  try {
    const listEventConfig = {
      timeMin: new Date().toISOString(),
      timeMax: new Date(
        new Date().getTime() + 12 * 60 * 60 * 1000,
      ).toISOString(),
      showDeleted: true,
      maxResults: 10,
      orderBy: 'updated',
    };
    // @ts-ignore
    const response = yield call(apiCalendar.listEvents, listEventConfig);
    const eventsList: Array<any> = response.result.items;
    yield put({
      type: GoogleEventsActions.setEvents.type,
      payload: eventsList.map((event: any) => ({
        time: new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }).format(new Date(event.start.dateTime)),
        title: event.summary,
      })),
    });
  } catch (e) {
    // @ts-ignore
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}
function* loginGoogle(action: ReturnType<typeof loginGoogleAC>) {
  try {
    apiCalendar.tokenClient = action.payload;
    yield put(fetchGoogleEventsAC());
  } catch (e) {
    // @ts-ignore
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}
/*
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

function* GoogleSaga() {
  yield takeLatest('FETCH_GOOGLE_EVENTS', fetchGoogleEvents);
  yield takeLatest('LOGIN_GOOGLE_OAUTH2', loginGoogle);
}

export { GoogleSaga, fetchGoogleEventsAC, loginGoogleAC };
