import { PlaceActions, PlaceReducer } from '@store/Reducers/PlaceReducer';
import { PlaceInitialStateType } from '@Types/storeTypes/placeStateType';

describe('PlaceReducer should work correct', () => {
  const initialState: PlaceInitialStateType = {
    city: 'Minsk',
    country: 'Belarus',
    coord: {
      lat: 0,
      lon: 0,
    },
  };
  test('Place should be set correctly', () => {
    const result = PlaceReducer(
      initialState,
      PlaceActions.setPlace({
        city: 'Kiev',
        country: 'Ukraine',
        coord: {
          lat: 50,
          lon: 50,
        },
      }),
    );
    expect(Object.keys(result)).toContain('city');
    expect(Object.keys(result)).toContain('country');
    expect(Object.keys(result)).toContain('coord');
    expect(Object.keys(result.coord)).toContain('lat');
    expect(Object.keys(result.coord)).toContain('lon');
    expect(result.city).toMatch('Kiev');
    expect(result.country).toMatch('Ukraine');
    expect(result.coord.lon).toBe(50);
    expect(result.coord.lat).toBe(50);
  });
});
