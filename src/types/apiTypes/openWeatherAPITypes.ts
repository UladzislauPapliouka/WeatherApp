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
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  pop: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  visibility: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
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
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  list: Array<OpenWeatherListType>;
};
