import { IWeatherContext } from "./weather-context.model";
import { IWeatherGeometry } from "./weather-geometry.model";
import { IWeatherProperties } from "./weather-properties.model";

export interface IWeatherForecast {
    '@context': Array<string | IWeatherContext>;
    type: 'Feature';
    geometry: IWeatherGeometry;
    properties: IWeatherProperties;
}