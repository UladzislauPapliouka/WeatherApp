import { normalizeGoogleEventEntity } from '@services/index';
import { IGoogleEventEntity } from '@typing/apiTypes/googleCalendarAPITypes';
import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchGoogleCalendarEvents } from '@/api';

import { GoogleEventsActions } from '../reducers';

const FETCH_GOOGLE_EVENTS = 'FETCH_GOOGLE_EVENTS';

const fetchGoogleEvents = () => ({
  type: FETCH_GOOGLE_EVENTS,
});

function* fetchGoogleEventsWorker() {
  const response: IGoogleEventEntity[] = yield call(fetchGoogleCalendarEvents);

  yield put(
    GoogleEventsActions.setEvents(response.map(normalizeGoogleEventEntity)),
  );
}

function* GoogleEventsWatcher() {
  yield takeLatest(FETCH_GOOGLE_EVENTS, fetchGoogleEventsWorker);
}

export { GoogleEventsWatcher, fetchGoogleEvents };
