import { Component, input } from '@angular/core';
import { IWeatherPeriod } from '../../../models/weather-period.model';

@Component({
	imports: [],
	selector: 'app-current-weather',
	styleUrl: './current-weather.css',
	templateUrl: './current-weather.html',
})
export class CurrentWeather {
	readonly current = input.required<IWeatherPeriod>({});
}
