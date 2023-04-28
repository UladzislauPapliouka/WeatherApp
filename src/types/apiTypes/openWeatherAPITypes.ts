export type OpenWeatherPlaceResponseType = {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
  local_names: {
    [key: string]: string;
  };
};
export type OpenWeatherListType = {
  dt: number;
  dt_txt: string;

  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  main: {
    temp: number;
  };
};
export type OpenWeatherResponseType = {
  cnt: number;
  message: number;
  cod: string;
  city: {
    coord: { lat: number; lon: number };
    country: string;
    id: number;
    name: string;
  };
  list: Array<OpenWeatherListType>;
};
