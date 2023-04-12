import {
  GoogleEventsActions,
  GoogleEventsReducer,
} from '@store/Reducers/GoogleEventsReducer';
import { GoogleEventStoreType } from '@Types/storeTypes/googleStateTypes';

describe('GoogleEventsReducer should work correct', () => {
  const initialState: GoogleEventStoreType[] = [];
  test('Google events should be set correctly', () => {
    const result = GoogleEventsReducer(
      initialState,
      GoogleEventsActions.setEvents([
        { time: '9:00', title: 'title1' },
        { time: '12:00', title: 'title2' },
        { time: '14:00', title: 'title3' },
        { time: '16:00', title: 'title4' },
        { time: '17:00', title: 'title5' },
      ]),
    );
    expect(result.length).toBe(5);
    expect(result[0].time).toMatch('9:00');
    expect(result[0].title).toMatch('title1');
    expect(result[4].time).toMatch('17:00');
    expect(result[4].title).toMatch('title5');
  });
});
