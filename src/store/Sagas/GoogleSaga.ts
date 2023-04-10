import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchCalendarItems, GoogleEventType } from '@/api/googleCalendarAPI';

import { GoogleEventsActions } from '../Reducers';

const fetchGoogleEventsAC = () => ({
  type: 'FETCH_GOOGLE_EVENTS',
});
function* fetchGoogleEvents() {
  const response: GoogleEventType[] = yield call(fetchCalendarItems);
  yield put({
    type: GoogleEventsActions.setEvents.type,
    payload: response.map((event: any) => ({
      time: new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date(event.start.dateTime)),
      title: event.summary,
    })),
  });
}

function* GoogleSaga() {
  yield takeLatest('FETCH_GOOGLE_EVENTS', fetchGoogleEvents);
}

export { GoogleSaga, fetchGoogleEventsAC };
