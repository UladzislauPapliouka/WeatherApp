export enum WeatherIconVariants {
  Cloudy = 'cloudy',
  Fog = 'fog',
  Moon = 'moon',
  PartySunny = 'partlySunny',
  Rain = 'rain',
  Shower = 'shower',
  Snow = 'snow',
  Sun = 'sun',
  SunnyRain = 'sunnyRain',
  Thunder = 'thunder',
  Windy = 'windy',
}

export type NormalizedWeatherItemDataType = {
  name: string;
  degrees: number;
  icon: WeatherIconVariants;
  id: string;
};
