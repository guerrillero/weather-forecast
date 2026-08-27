import { IWeatherPeriod } from '../../../models/weather-period.model';
import { ICard } from '../card/card.model';

export interface IGraphic {
  card: ICard;
  periods: IWeatherPeriod[];
}
