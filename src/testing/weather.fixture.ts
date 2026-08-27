import { IWeatherForecast } from '../app/models/weather-forecast.model';
import { IWeatherPeriod } from '../app/models/weather-period.model';

export const weatherPeriodFixture: IWeatherPeriod = {
  number: 1,
  name: 'Today',
  startTime: '2026-08-27T06:00:00-04:00',
  endTime: '2026-08-27T18:00:00-04:00',
  isDaytime: true,
  temperature: 92,
  temperatureUnit: 'F',
  temperatureTrend: null,
  probabilityOfPrecipitation: {
    unitCode: 'wmoUnit:percent',
    value: 40,
  },
  windSpeed: '5 mph',
  windDirection: 'SE',
  icon: 'https://api.weather.gov/icons/land/day/sct?size=medium',
  shortForecast: 'Partly Sunny',
  detailedForecast: 'Partly sunny, with a high near 92.',
};

export const weatherForecastFixture: IWeatherForecast = {
  '@context': ['https://geojson.org/geojson-ld/geojson-context.jsonld'],
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [[[-81.18, 28.55]]],
  },
  properties: {
    units: 'us',
    forecastGenerator: 'TestForecastGenerator',
    generatedAt: '2026-08-27T12:00:00Z',
    updateTime: '2026-08-27T12:00:00Z',
    validTimes: '2026-08-27T12:00:00Z/P7D',
    elevation: {
      unitCode: 'wmoUnit:m',
      value: 22,
    },
    periods: [weatherPeriodFixture],
  },
};
