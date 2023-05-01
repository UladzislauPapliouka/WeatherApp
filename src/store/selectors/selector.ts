import { RootAppType } from '@store';

export const getCurrentWeather = (state: RootAppType) => state.weatherInfo[0];

export const getGoogleUser = (state: RootAppType) => state.userReducer;

export const getPlace = (state: RootAppType) => state.placeInfo;

export const getAppState = (state: RootAppType) => state.appState;

export const getGoogleEvents = (state: RootAppType) => state.googleEvents;

export const getForecast = (state: RootAppType) => state.weatherInfo;

export const getAutocompleteVariants = (state: RootAppType) =>
  state.autocompleteVariants.map((autocompleteVariant) => ({
    ...autocompleteVariant,
    toString() {
      return `${autocompleteVariant.city},${autocompleteVariant.country}`;
    },
  }));
