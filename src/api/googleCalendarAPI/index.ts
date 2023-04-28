import ApiCalendar from 'react-google-calendar-api';
import { IGoogleEventEntity } from '@Types/apiTypes/googleCalendarAPITypes';

import { eventsRequestConfig, gapiConfig } from './gapiConfig';

const GoogleCalendarAPI = new ApiCalendar(gapiConfig);

export async function fetchGoogleCalendarEvents(): Promise<
  IGoogleEventEntity[]
> {
  const response = await GoogleCalendarAPI.listEvents(eventsRequestConfig);
  return response.result.items as IGoogleEventEntity[];
}
export default fetchGoogleCalendarEvents;
