import ApiCalendar from 'react-google-calendar-api';
import { GoogleEventEntityType } from '@Types/apiTypes/googleCalendarAPITypes';
import { gapi } from 'gapi-script';

import {
  eventsRequestConfig,
  gapiConfig,
} from '@/api/googleCalendarAPI/gapiConfig';
// This code was used to config gapi
const GoogleCalendarAPI = new ApiCalendar(gapiConfig);

export async function fetchGoogleCalendarEvents(): Promise<
  GoogleEventEntityType[]
> {
  const response = await gapi.client.calendar.events.list(eventsRequestConfig);
  return response.result.items as GoogleEventEntityType[];
}
export default fetchGoogleCalendarEvents;
