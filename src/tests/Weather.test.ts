import { WeatherIconVariants } from '@Types/propsTypes/weatherIcon';

import { WeatherActions, WeatherReducer } from '@store/Reducers/WeatherReducer';
import { ForecastItemInfoType } from '@Types/storeTypes/weatherStateType';

describe('WeatherReducer should work correct', () => {
  const initialState: ForecastItemInfoType[] = [];
  test('Weather should be set correctly', () => {
    const result = WeatherReducer(
      initialState,
      WeatherActions.setInfo([
        {
          name: '1',
          icon: WeatherIconVariants.Sun,
          degrees: 10,
          id: '1',
        },
        {
          name: '2',
          icon: WeatherIconVariants.Windy,
          degrees: -10,
          id: '2',
        },
        {
          name: '3',
          icon: WeatherIconVariants.Fog,
          degrees: 15,
          id: '3',
        },
        {
          name: '4',
          icon: WeatherIconVariants.Shower,
          degrees: 22,
          id: '4',
        },
      ]),
    );
    expect(result.length).toBe(4);
    expect(result[0].name).toMatch('1');
    expect(result[0].icon).toBe(WeatherIconVariants.Sun);
    expect(result[0].degrees).toBe(10);
    expect(result[3].name).toMatch('4');
    expect(result[3].icon).toBe(WeatherIconVariants.Shower);
    expect(result[3].degrees).toBe(22);
  });
});
