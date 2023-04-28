import { IGoogleEventEntity } from '@typing/apiTypes/googleCalendarAPITypes';
import { GoogleEventStoreType } from '@typing/storeTypes/googleStateTypes';

const normalizeGoogleEventEntity = (
  event: IGoogleEventEntity,
): GoogleEventStoreType => ({
  time: new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(event.start.dateTime)),
  title: event.summary,
});
export default normalizeGoogleEventEntity;
