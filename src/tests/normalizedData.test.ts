import {
  IGoogleEventEntity,
  IOpenMeteoDailyResponse,
  IOpenMeteoHourlyResponse,
  IOpenWeatherResponse,
} from '@typing/apiTypes';
import {
  GoogleEventStoreType,
  NormalizedWeatherItemDataType,
} from '@typing/storeTypes';

import {
  normalizeGoogleEventEntity,
  normalizeOpenMeteoDaily,
  normalizeOpenMeteoHourly,
  normalizeOpenWeatherDaily,
  normalizeOpenWeatherHourly,
} from '@/services';

describe('Entity data should be correct normalized to store', () => {
  test('Hourly data from OpenMeteo should be normalized correct', () => {
    const apiEntity: IOpenMeteoHourlyResponse = {
      hourly: {
        time: [
          '2023-04-23T00:00',
          '2023-04-23T01:00',
          '2023-04-23T02:00',
          '2023-04-23T03:00',
          '2023-04-23T04:00',
          '2023-04-23T05:00',
          '2023-04-23T06:00',
          '2023-04-23T07:00',
          '2023-04-23T08:00',
          '2023-04-23T09:00',
          '2023-04-23T10:00',
          '2023-04-23T11:00',
          '2023-04-23T12:00',
          '2023-04-23T13:00',
          '2023-04-23T14:00',
          '2023-04-23T15:00',
          '2023-04-23T16:00',
          '2023-04-23T17:00',
          '2023-04-23T18:00',
          '2023-04-23T19:00',
          '2023-04-23T20:00',
          '2023-04-23T21:00',
          '2023-04-23T22:00',
          '2023-04-23T23:00',
        ],
        weathercode: [
          1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
          2,
        ],
        temperature_2m: [
          14.2, 13.8, 13.9, 13.5, 13.7, 13.3, 13.2, 13.4, 13.7, 13.8, 14, 13.7,
          14.8, 16.7, 17.1, 17.8, 17.9, 17.6, 16.6, 15.3, 13.9, 12.8, 12, 11.5,
        ],
      },
    };
    const normalizedEntity: NormalizedWeatherItemDataType[] =
      normalizeOpenMeteoHourly(apiEntity);
    expect(normalizedEntity).toHaveLength(7);
    expect(normalizedEntity[0]).toHaveProperty('name', 'Now');
    expect(normalizedEntity[0]).toHaveProperty('degrees');
    expect(normalizedEntity[0]).toHaveProperty('icon');
  });
  test('Daily data from OpenMeteo should be normalized correct', () => {
    const apiEntity: IOpenMeteoDailyResponse = {
      daily: {
        time: [
          '2023-04-23',
          '2023-04-24',
          '2023-04-25',
          '2023-04-26',
          '2023-04-27',
          '2023-04-28',
          '2023-04-29',
        ],
        weathercode: [1, 2, 1, 2, 1, 2, 1],
        temperature_2m_max: [
          14.2, 13.8, 13.9, 13.5, 13.7, 13.3, 13.2, 13.4, 13.7, 13.8, 14, 13.7,
          14.8, 16.7, 17.1, 17.8, 17.9, 17.6, 16.6, 15.3, 13.9, 12.8, 12, 11.5,
        ],
        temperature_2m_min: [
          14.2, 13.8, 13.9, 13.5, 13.7, 13.3, 13.2, 13.4, 13.7, 13.8, 14, 13.7,
          14.8, 16.7, 17.1, 17.8, 17.9, 17.6, 16.6, 15.3, 13.9, 12.8, 12, 11.5,
        ],
      },
    };
    const normalizedEntity: NormalizedWeatherItemDataType[] =
      normalizeOpenMeteoDaily(apiEntity);
    expect(normalizedEntity).toHaveLength(7);
    expect(normalizedEntity[0]).toHaveProperty('name', 'Today');
    expect(normalizedEntity[0]).toHaveProperty('degrees');
    expect(normalizedEntity[0]).toHaveProperty('icon');
  });
  test('Hourly data from OpenWeather should be normalized correct', () => {
    const { list }: IOpenWeatherResponse = {
      cod: '200',
      message: 0,
      cnt: 40,
      list: [
        {
          dt: 1682240400,
          main: {
            temp: 16.18,
          },
          weather: [
            { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
          ],
          dt_txt: '2023-04-23 09:00:00',
        },
        {
          dt: 1682251200,
          main: {
            temp: 16.94,
          },
          weather: [
            { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
          ],
          dt_txt: '2023-04-23 12:00:00',
        },
        {
          dt: 1682262000,
          main: {
            temp: 16.94,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],
          dt_txt: '2023-04-23 15:00:00',
        },
        {
          dt: 1682272800,
          main: {
            temp: 14.16,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-23 18:00:00',
        },
        {
          dt: 1682283600,
          main: {
            temp: 12.13,
          },
          weather: [
            { id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' },
          ],

          dt_txt: '2023-04-23 21:00:00',
        },
        {
          dt: 1682294400,
          main: {
            temp: 10.5,
          },
          weather: [
            { id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' },
          ],

          dt_txt: '2023-04-24 00:00:00',
        },
        {
          dt: 1682305200,
          main: {
            temp: 9.74,
          },
          weather: [
            { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
          ],

          dt_txt: '2023-04-24 03:00:00',
        },
        {
          dt: 1682316000,
          main: {
            temp: 14.19,
          },
          weather: [
            { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
          ],

          dt_txt: '2023-04-24 06:00:00',
        },
        {
          dt: 1682326800,
          main: {
            temp: 17.67,
          },
          weather: [
            { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
          ],

          dt_txt: '2023-04-24 09:00:00',
        },
        {
          dt: 1682337600,
          main: {
            temp: 19.17,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03d',
            },
          ],

          dt_txt: '2023-04-24 12:00:00',
        },
        {
          dt: 1682348400,
          main: {
            temp: 18.55,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-24 15:00:00',
        },
        {
          dt: 1682359200,
          main: {
            temp: 15.77,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-24 18:00:00',
        },
        {
          dt: 1682370000,
          main: {
            temp: 13.28,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03n',
            },
          ],

          dt_txt: '2023-04-24 21:00:00',
        },
        {
          dt: 1682380800,
          main: {
            temp: 11.35,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03n',
            },
          ],

          dt_txt: '2023-04-25 00:00:00',
        },
        {
          dt: 1682391600,
          main: {
            temp: 10.9,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-25 03:00:00',
        },
        {
          dt: 1682402400,
          main: {
            temp: 14.19,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-25 06:00:00',
        },
        {
          dt: 1682413200,
          main: {
            temp: 16.92,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-25 09:00:00',
        },
        {
          dt: 1682424000,
          main: {
            temp: 17.6,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-25 12:00:00',
        },
        {
          dt: 1682434800,
          main: {
            temp: 17.53,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-25 15:00:00',
        },
        {
          dt: 1682445600,
          main: {
            temp: 14.7,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-25 18:00:00',
        },
        {
          dt: 1682456400,
          main: {
            temp: 13.78,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-25 21:00:00',
        },
        {
          dt: 1682467200,
          main: {
            temp: 12.06,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-26 00:00:00',
        },
        {
          dt: 1682478000,
          main: {
            temp: 11.52,
          },
          weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
          ],

          dt_txt: '2023-04-26 03:00:00',
        },
        {
          dt: 1682488800,
          main: {
            temp: 13,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-26 06:00:00',
        },
        {
          dt: 1682499600,
          main: {
            temp: 14.65,
          },
          weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
          ],

          dt_txt: '2023-04-26 09:00:00',
        },
        {
          dt: 1682510400,
          main: {
            temp: 16.42,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          dt_txt: '2023-04-26 12:00:00',
        },
        {
          dt: 1682521200,
          main: {
            temp: 16.44,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-26 15:00:00',
        },
        {
          dt: 1682532000,
          main: {
            temp: 14.65,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-26 18:00:00',
        },
        {
          dt: 1682542800,
          main: {
            temp: 13.92,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-26 21:00:00',
        },
        {
          dt: 1682553600,
          main: {
            temp: 13.35,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-27 00:00:00',
        },
        {
          dt: 1682564400,
          main: {
            temp: 13.05,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-27 03:00:00',
        },
        {
          dt: 1682575200,
          main: {
            temp: 15.99,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-27 06:00:00',
        },
        {
          dt: 1682586000,
          main: {
            temp: 19.28,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-27 09:00:00',
        },
        {
          dt: 1682596800,
          main: {
            temp: 19.65,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-27 12:00:00',
        },
        {
          dt: 1682607600,
          main: {
            temp: 18.55,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],
          dt_txt: '2023-04-27 15:00:00',
        },
        {
          dt: 1682618400,
          main: {
            temp: 16.44,
          },
          weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10n' },
          ],

          dt_txt: '2023-04-27 18:00:00',
        },
        {
          dt: 1682629200,
          main: {
            temp: 15.22,
          },
          weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10n' },
          ],

          dt_txt: '2023-04-27 21:00:00',
        },
        {
          dt: 1682640000,
          main: {
            temp: 13.06,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-28 00:00:00',
        },
        {
          dt: 1682650800,
          main: {
            temp: 12.18,
          },
          weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
          ],

          dt_txt: '2023-04-28 03:00:00',
        },
        {
          dt: 1682661600,
          main: {
            temp: 11.91,
          },
          weather: [
            {
              id: 501,
              main: 'Rain',
              description: 'moderate rain',
              icon: '10d',
            },
          ],

          dt_txt: '2023-04-28 06:00:00',
        },
      ],
      city: {
        id: 524901,
        name: 'Moscow',
        coord: { lat: 55.75, lon: 37.62 },
        country: 'RU',
      },
    };
    const normalizedEntity: NormalizedWeatherItemDataType[] =
      normalizeOpenWeatherHourly(list.slice(1, 7));
    expect(normalizedEntity).toHaveLength(6);
    expect(normalizedEntity[0]).toHaveProperty('name');
    expect(normalizedEntity[0]).toHaveProperty('degrees');
    expect(normalizedEntity[0]).toHaveProperty('icon');
  });
  test('Daily data from OpenWeather should be normalized correct', () => {
    const { list }: IOpenWeatherResponse = {
      cod: '200',
      message: 0,
      cnt: 40,
      list: [
        {
          dt: 1682240400,
          main: {
            temp: 16.18,
          },
          weather: [
            { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
          ],
          dt_txt: '2023-04-23 09:00:00',
        },
        {
          dt: 1682251200,
          main: {
            temp: 16.94,
          },
          weather: [
            { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
          ],
          dt_txt: '2023-04-23 12:00:00',
        },
        {
          dt: 1682262000,
          main: {
            temp: 16.94,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],
          dt_txt: '2023-04-23 15:00:00',
        },
        {
          dt: 1682272800,
          main: {
            temp: 14.16,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-23 18:00:00',
        },
        {
          dt: 1682283600,
          main: {
            temp: 12.13,
          },
          weather: [
            { id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' },
          ],

          dt_txt: '2023-04-23 21:00:00',
        },
        {
          dt: 1682294400,
          main: {
            temp: 10.5,
          },
          weather: [
            { id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' },
          ],

          dt_txt: '2023-04-24 00:00:00',
        },
        {
          dt: 1682305200,
          main: {
            temp: 9.74,
          },
          weather: [
            { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
          ],

          dt_txt: '2023-04-24 03:00:00',
        },
        {
          dt: 1682316000,
          main: {
            temp: 14.19,
          },
          weather: [
            { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
          ],

          dt_txt: '2023-04-24 06:00:00',
        },
        {
          dt: 1682326800,
          main: {
            temp: 17.67,
          },
          weather: [
            { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
          ],

          dt_txt: '2023-04-24 09:00:00',
        },
        {
          dt: 1682337600,
          main: {
            temp: 19.17,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03d',
            },
          ],

          dt_txt: '2023-04-24 12:00:00',
        },
        {
          dt: 1682348400,
          main: {
            temp: 18.55,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-24 15:00:00',
        },
        {
          dt: 1682359200,
          main: {
            temp: 15.77,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-24 18:00:00',
        },
        {
          dt: 1682370000,
          main: {
            temp: 13.28,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03n',
            },
          ],

          dt_txt: '2023-04-24 21:00:00',
        },
        {
          dt: 1682380800,
          main: {
            temp: 11.35,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03n',
            },
          ],

          dt_txt: '2023-04-25 00:00:00',
        },
        {
          dt: 1682391600,
          main: {
            temp: 10.9,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-25 03:00:00',
        },
        {
          dt: 1682402400,
          main: {
            temp: 14.19,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-25 06:00:00',
        },
        {
          dt: 1682413200,
          main: {
            temp: 16.92,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-25 09:00:00',
        },
        {
          dt: 1682424000,
          main: {
            temp: 17.6,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-25 12:00:00',
        },
        {
          dt: 1682434800,
          main: {
            temp: 17.53,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-25 15:00:00',
        },
        {
          dt: 1682445600,
          main: {
            temp: 14.7,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-25 18:00:00',
        },
        {
          dt: 1682456400,
          main: {
            temp: 13.78,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-25 21:00:00',
        },
        {
          dt: 1682467200,
          main: {
            temp: 12.06,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-26 00:00:00',
        },
        {
          dt: 1682478000,
          main: {
            temp: 11.52,
          },
          weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
          ],
          dt_txt: '2023-04-26 03:00:00',
        },
        {
          dt: 1682488800,
          main: {
            temp: 13,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-26 06:00:00',
        },
        {
          dt: 1682499600,
          main: {
            temp: 14.65,
          },
          weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
          ],

          dt_txt: '2023-04-26 09:00:00',
        },
        {
          dt: 1682510400,
          main: {
            temp: 16.42,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          dt_txt: '2023-04-26 12:00:00',
        },
        {
          dt: 1682521200,
          main: {
            temp: 16.44,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-26 15:00:00',
        },
        {
          dt: 1682532000,
          main: {
            temp: 14.65,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-26 18:00:00',
        },
        {
          dt: 1682542800,
          main: {
            temp: 13.92,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-26 21:00:00',
        },
        {
          dt: 1682553600,
          main: {
            temp: 13.35,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-27 00:00:00',
        },
        {
          dt: 1682564400,
          main: {
            temp: 13.05,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-27 03:00:00',
        },
        {
          dt: 1682575200,
          main: {
            temp: 15.99,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-27 06:00:00',
        },
        {
          dt: 1682586000,
          main: {
            temp: 19.28,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-27 09:00:00',
        },
        {
          dt: 1682596800,
          main: {
            temp: 19.65,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],

          dt_txt: '2023-04-27 12:00:00',
        },
        {
          dt: 1682607600,
          main: {
            temp: 18.55,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04d',
            },
          ],
          dt_txt: '2023-04-27 15:00:00',
        },
        {
          dt: 1682618400,
          main: {
            temp: 16.44,
          },
          weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10n' },
          ],

          dt_txt: '2023-04-27 18:00:00',
        },
        {
          dt: 1682629200,
          main: {
            temp: 15.22,
          },
          weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10n' },
          ],

          dt_txt: '2023-04-27 21:00:00',
        },
        {
          dt: 1682640000,
          main: {
            temp: 13.06,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],

          dt_txt: '2023-04-28 00:00:00',
        },
        {
          dt: 1682650800,
          main: {
            temp: 12.18,
          },
          weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
          ],

          dt_txt: '2023-04-28 03:00:00',
        },
        {
          dt: 1682661600,
          main: {
            temp: 11.91,
          },
          weather: [
            {
              id: 501,
              main: 'Rain',
              description: 'moderate rain',
              icon: '10d',
            },
          ],

          dt_txt: '2023-04-28 06:00:00',
        },
      ],
      city: {
        id: 524901,
        name: 'Moscow',
        coord: { lat: 55.75, lon: 37.62 },
        country: 'RU',
      },
    };
    const normalizedEntity: NormalizedWeatherItemDataType[] =
      normalizeOpenWeatherDaily(list);
    expect(normalizedEntity).toHaveLength(5);
    expect(normalizedEntity[0]).toHaveProperty('name');
    expect(normalizedEntity[0]).toHaveProperty('degrees');
    expect(normalizedEntity[0]).toHaveProperty('icon');
  });
  test('Google Events data should be coramlized correct', () => {
    const googleEventsEntity: IGoogleEventEntity = {
      start: { dateTime: new Date('2023-04-23T00:00') },
      summary: 'Test event',
    };
    const normalizedGoogleEvent: GoogleEventStoreType =
      normalizeGoogleEventEntity(googleEventsEntity);
    expect(normalizedGoogleEvent).toHaveProperty('time', '12:00 AM');
    expect(normalizedGoogleEvent).toHaveProperty('title', 'Test event');
  });
});
