import { formatTime, parseDate } from '@/services';

describe('Date should be parse correct', () => {
  test('Date should be format to XX:XX AM/PM', () => {
    expect(formatTime(new Date('2023-04-23T01:00'))).toBe('01:00 AM');
    expect(formatTime(new Date('2023-04-23T13:00'))).toBe('01:00 PM');
  });
  test('Date should be format to ', () => {
    expect(parseDate(new Date('2023-04-23T01:00'))).toBe(
      'Sunday, April 23, 2023',
    );
    expect(parseDate(new Date('2020-10-24T13:00'))).toBe(
      'Saturday, October 24, 2020',
    );
  });
});
