import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IWeatherPeriod } from '../../../models/weather-period.model';
import { ToCelciusPipe } from '../../../pipes/to-celcius-pipe';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ToCelciusPipe],
  selector: 'app-current-weather',
  styleUrl: './current-weather.css',
  templateUrl: './current-weather.html',
})
export class CurrentWeather {
  readonly current = input.required<IWeatherPeriod>();
}
