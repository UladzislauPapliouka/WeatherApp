import ApiCalendar from 'react-google-calendar-api';
import { GoogleEventEntityType } from '@Types/apiTypes/googleCalendarAPITypes';

import {
  eventsRequestConfig,
  gapiConfig,
} from '@/api/googleCalendarAPI/gapiConfig';

const GoogleCalendarAPI = new ApiCalendar(gapiConfig);

export async function fetchGoogleCalendarEvents(): Promise<
  GoogleEventEntityType[]
> {
  const response = await GoogleCalendarAPI.listEvents(eventsRequestConfig);
  return response.result.items as GoogleEventEntityType[];
}
export default fetchGoogleCalendarEvents;
