import { IWeatherMeasurement } from "./weather-measurement.model";
import { IWeatherPeriod } from "./weather-period.model";

export interface IWeatherProperties {
    units: 'us';
    forecastGenerator: string;
    generatedAt: string;
    updateTime: string;
    validTimes: string;
    elevation: IWeatherMeasurement;
    periods: IWeatherPeriod[];
}