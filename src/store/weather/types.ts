export interface ICoord {
  lon: number
  lat: number
}

export interface IWeather {
  id: number
  main: string
  description: string
  icon: string
}

export interface IMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export interface IWind {
  speed: number
  deg: number
}

export interface IClouds {
  all: number
}

export interface ISys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export interface IWeatherData {
  coord: ICoord
  weather: IWeather[]
  base: string
  main: IMain
  visibility: number
  wind: IWind
  clouds: IClouds
  dt: number
  sys: ISys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface IWeatherState {
  isFetching: boolean
  weatherData: IWeatherData[]
  error: null | Error
}

export enum FetchWeatherTypes {
  FETCH_BY_COORDS = 'weather/FETCH_BY_COORDS',
  FETCH_BY_CITY_NAMES = 'weather/FETCH_BY_CITY_NAMES',
  FETCH_SUCCESS = 'weather/FETCH_SUCCESS',
  FETCH_ERROR = 'analytics/FETCH_ERROR',
}

export enum SaveWeatherTypes {
  BY_COORDS = 'saveWeather/COORDS',
}
