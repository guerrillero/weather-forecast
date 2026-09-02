import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IWeatherPeriod } from '../../../models/weather-period.model';
import { FormatTemperature } from '../../../pipes/format-temperature-pipe';
import { FormatUnitPipe } from '../../../pipes/format-unit-pipe';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormatTemperature, FormatUnitPipe],
  selector: 'app-current-weather',
  styleUrl: './current-weather.css',
  templateUrl: './current-weather.html',
})
export class CurrentWeather {
  readonly current = input.required<IWeatherPeriod>();
}
