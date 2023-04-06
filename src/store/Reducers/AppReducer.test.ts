import {
  APIVariants, AppActions, AppInitialStateType, AppReducer, WeatherRepresentVariant,
} from './AppReducer';

describe('AppReducer should work correct', () => {
  const initialState:AppInitialStateType = {
    preferredAPI: APIVariants.weatherAPI,
    weatherRepresent: WeatherRepresentVariant.daily,
  };
  test('AppReducer should setPreferredAPI correct', () => {
    const result = AppReducer(
      initialState,
      AppActions.setPreferredAPI(
        { preferredAPI: APIVariants.openWeatherAPI },
      ),
    );
    expect(result.preferredAPI).toBe(APIVariants.openWeatherAPI);
  });
  test('AppReducer should weatherRepresent correct', () => {
    const result = AppReducer(
      initialState,
      AppActions.setWeatherRepresent(
        { weatherRepresent: WeatherRepresentVariant.hourly },
      ),
    );
    expect(result.weatherRepresent).toBe(WeatherRepresentVariant.hourly);
  });
});
