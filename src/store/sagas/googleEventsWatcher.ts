import { normalizeGoogleEventEntity } from '@services/index';
import { FETCH_GOOGLE_EVENTS_ACTION_TYPE } from '@store/actionCreators';
import { IGoogleEventEntity } from '@typing/apiTypes/googleCalendarAPITypes';
import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchGoogleCalendarEvents } from '@/api';

import { GoogleEventsActions } from '../reducers';

function* fetchGoogleEventsWorker() {
  const response: IGoogleEventEntity[] = yield call(fetchGoogleCalendarEvents);

  yield put(
    GoogleEventsActions.setEvents(response.map(normalizeGoogleEventEntity)),
  );
}

function* GoogleEventsWatcher() {
  yield takeLatest(FETCH_GOOGLE_EVENTS_ACTION_TYPE, fetchGoogleEventsWorker);
}

export default GoogleEventsWatcher;
