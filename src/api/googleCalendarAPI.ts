import ApiCalendar from 'react-google-calendar-api';
import { gapi, loadAuth2 } from 'gapi-script';

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 3);

const requestSettings = {
  calendarId: 'primary',
  timeMin: today.toISOString(),
  timeMax: tomorrow.toISOString(),
  showDeleted: false,
  singleEvents: true,
  maxResults: 10,
  orderBy: 'startTime',
};
const config = {
  clientId: `573990938888-37r8rfbfecr9dne6q7m3ht0li3pf17ed.apps.googleusercontent.com`,
  apiKey: `AIzaSyCyrCsJylVwzKnPBaHD1nMs8b2hlc2wgzc`,
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
};

const apiCalendar = new ApiCalendar(config);
export interface GoogleEventType {
  start: { dateTime: Date };
  summary: string;
}
export async function fetchCalendarItems(): Promise<GoogleEventType[]> {
  const data = await gapi.client.calendar.events.list(requestSettings);
  return data.result.items as GoogleEventType[];
}
export default fetchCalendarItems;
