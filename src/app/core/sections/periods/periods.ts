import { Component, input } from '@angular/core';
import { IWeatherPeriod } from '../../../models/weather-period.model';

@Component({
  imports: [],
  selector: 'app-periods',
  styleUrl: './periods.css',
  templateUrl: './periods.html',
})
export class Periods {
  readonly periods = input.required<IWeatherPeriod[]>();
}
