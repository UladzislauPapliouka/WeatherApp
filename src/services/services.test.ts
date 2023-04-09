import { WeatherIconVariants } from '@Types/propsTypes/weatherIcon';

import {
  getBackground,
  getDayName,
  getOpenWeatherIcon,
  getWeatherIcon,
  openWeatherAPIConverterByDay,
  openWeatherAPIConverterByHours,
} from './services';

describe('Services should work correct', () => {
  test('getWeatherIcon should work correctly', () => {
    let result = getWeatherIcon(1006);
    expect(result).toBe(WeatherIconVariants.Cloudy);
    result = getWeatherIcon(1003);
    expect(result).toBe(WeatherIconVariants.PartySunny);
    result = getWeatherIcon(1192);
    expect(result).toBe(WeatherIconVariants.Rain);
    result = getWeatherIcon(1246);
    expect(result).toBe(WeatherIconVariants.Shower);
    result = getWeatherIcon(1213);
    expect(result).toBe(WeatherIconVariants.Snow);
    result = getWeatherIcon(1000);
    expect(result).toBe(WeatherIconVariants.Sun);
    result = getWeatherIcon(1282);
    expect(result).toBe(WeatherIconVariants.Thunder);
    result = getWeatherIcon(1030);
    expect(result).toBe(WeatherIconVariants.Fog);
    result = getWeatherIcon(10000);
    expect(result).toBe(WeatherIconVariants.Windy);
  });
  test('getOpenWeatherIcon should work correct', () => {
    let result = getOpenWeatherIcon(250);
    expect(result).toBe(WeatherIconVariants.Thunder);
    result = getOpenWeatherIcon(350);
    expect(result).toBe(WeatherIconVariants.Shower);
    result = getOpenWeatherIcon(555);
    expect(result).toBe(WeatherIconVariants.Rain);
    result = getOpenWeatherIcon(666);
    expect(result).toBe(WeatherIconVariants.Snow);
    result = getOpenWeatherIcon(777);
    expect(result).toBe(WeatherIconVariants.Fog);
    result = getOpenWeatherIcon(800);
    expect(result).toBe(WeatherIconVariants.Sun);
    result = getOpenWeatherIcon(802);
    expect(result).toBe(WeatherIconVariants.Cloudy);
    result = getOpenWeatherIcon(999);
    expect(result).toBe(WeatherIconVariants.Windy);
  });
  test('getDayName should work correct', () => {
    let result = getDayName(2, 1);
    expect(result).toMatch('THU');
    result = getDayName(2, 2);
    expect(result).toMatch('FRI');
    result = getDayName(2, 3);
    expect(result).toMatch('SAT');
    result = getDayName(2, 4);
    expect(result).toMatch('SUN');
    result = getDayName(2, 5);
    expect(result).toMatch('MON');
    result = getDayName(2, 6);
    expect(result).toMatch('TUE');
    result = getDayName(2, 7);
    expect(result).toMatch('WED');
    result = getDayName(2, 8);
    expect(result).toMatch('THU');
  });
  test('openWeatherAPIConverterByDay should work correct', () => {
    const list = [
      {
        dt: 1675339200,
        main: {
          temp: 0.4,
          feels_like: -2.9,
          temp_min: 0.4,
          temp_max: 0.53,
          pressure: 1004,
          sea_level: 1004,
          grnd_level: 984,
          humidity: 99,
          temp_kf: -0.13,
        },
        weather: [
          {
            id: 600,
            main: 'Snow',
            description: 'light snow',
            icon: '13d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.87,
          deg: 238,
          gust: 5.8,
        },
        visibility: 10000,
        pop: 0.4,
        snow: {
          '3h': 0.1,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-02-02 12:00:00',
      },
      {
        dt: 1675350000,
        main: {
          temp: 0.17,
          feels_like: -2.47,
          temp_min: 0.08,
          temp_max: 0.17,
          pressure: 1005,
          sea_level: 1005,
          grnd_level: 985,
          humidity: 98,
          temp_kf: 0.09,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.18,
          deg: 232,
          gust: 4.55,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-02-02 15:00:00',
      },
      {
        dt: 1675360800,
        main: {
          temp: 0.17,
          feels_like: -2.38,
          temp_min: 0.17,
          temp_max: 0.17,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 987,
          humidity: 99,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.1,
          deg: 235,
          gust: 4.26,
        },
        visibility: 262,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-02-02 18:00:00',
      },
      {
        dt: 1675371600,
        main: {
          temp: 0.11,
          feels_like: -2.4,
          temp_min: 0.11,
          temp_max: 0.11,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 988,
          humidity: 99,
          temp_kf: 0,
        },
        weather: [
          {
            id: 600,
            main: 'Snow',
            description: 'light snow',
            icon: '13n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.06,
          deg: 274,
          gust: 4.27,
        },
        visibility: 41,
        pop: 0.74,
        snow: {
          '3h': 0.22,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-02-02 21:00:00',
      },
      {
        dt: 1675382400,
        main: {
          temp: -1.58,
          feels_like: -6.93,
          temp_min: -1.58,
          temp_max: -1.58,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 991,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 600,
            main: 'Snow',
            description: 'light snow',
            icon: '13n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.07,
          deg: 321,
          gust: 9.18,
        },
        visibility: 7271,
        pop: 0.9,
        snow: {
          '3h': 0.71,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-02-03 00:00:00',
      },
      {
        dt: 1675393200,
        main: {
          temp: -2.18,
          feels_like: -8.19,
          temp_min: -2.18,
          temp_max: -2.18,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 992,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.95,
          deg: 305,
          gust: 11.58,
        },
        visibility: 2887,
        pop: 0.18,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-02-03 03:00:00',
      },
      {
        dt: 1675404000,
        main: {
          temp: -2.7,
          feels_like: -8.72,
          temp_min: -2.7,
          temp_max: -2.7,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 993,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 600,
            main: 'Snow',
            description: 'light snow',
            icon: '13d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.72,
          deg: 307,
          gust: 10.7,
        },
        visibility: 818,
        pop: 0.38,
        snow: {
          '3h': 0.12,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-02-03 06:00:00',
      },
      {
        dt: 1675414800,
        main: {
          temp: -2.55,
          feels_like: -8.18,
          temp_min: -2.55,
          temp_max: -2.55,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 994,
          humidity: 89,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 98,
        },
        wind: {
          speed: 5.12,
          deg: 312,
          gust: 8.47,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-02-03 09:00:00',
      },
      {
        dt: 1675414800,
        main: {
          temp: -2.55,
          feels_like: -8.18,
          temp_min: -2.55,
          temp_max: -2.55,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 994,
          humidity: 89,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 98,
        },
        wind: {
          speed: 5.12,
          deg: 312,
          gust: 8.47,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-02-03 09:00:00',
      },
    ];

    const result = openWeatherAPIConverterByDay(list);
    expect(result.length).toBe(2);
    expect(result[1].degrees).toBe(-2.55);
  });
  test('openWeatherAPIConverterByHours should work correct', () => {
    const list = [
      {
        dt: 1675339200,
        main: {
          temp: 0.4,
          feels_like: -2.9,
          temp_min: 0.4,
          temp_max: 0.53,
          pressure: 1004,
          sea_level: 1004,
          grnd_level: 984,
          humidity: 99,
          temp_kf: -0.13,
        },
        weather: [
          {
            id: 600,
            main: 'Snow',
            description: 'light snow',
            icon: '13d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.87,
          deg: 238,
          gust: 5.8,
        },
        visibility: 10000,
        pop: 0.4,
        snow: {
          '3h': 0.1,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-02-02 12:00:00',
      },
    ];

    const result = openWeatherAPIConverterByHours(list);
    expect(result.length).toBe(1);
    expect(result[0].degrees).toBe(0.4);
    expect(result[0].name).toBe('12:00');
  });
  test('getBackground should work correct', () => {
    const result = getBackground(WeatherIconVariants.Sun);
    expect(result.length).toBe(2);
    expect(typeof result[0]).toBe('string');
    expect(typeof result[1]).toBe('string');
  });
});
