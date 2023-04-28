import * as process from 'process';

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 3);
export const eventsRequestConfig = {
  calendarId: 'primary',
  timeMin: today.toISOString(),
  timeMax: tomorrow.toISOString(),
  showDeleted: false,
  singleEvents: true,
  maxResults: 10,
  orderBy: 'startTime',
};
export const gapiConfig = {
  clientId: `${process.env.REACT_GOOGLE_CLIENT_ID}.apps.googleusercontent.com`,
  apiKey: `${process.env.REACT_GOOGLE_API_KEY}`,
  scope: `${process.env.REACT_GOOGLE_SCOPE}`,
  discoveryDocs: [`${process.env.REACT_GOOGLE_DOCS}`],
};
