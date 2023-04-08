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
export type WeatherIconPropsType = {
  icon: WeatherIconVariants;
  size?: 'small' | 'default' | 'large';
};
export type WeatherImagePropsType = {
  size: 'small' | 'default' | 'large';
};
