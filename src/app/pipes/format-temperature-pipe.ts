import { inject, Pipe, PipeTransform } from '@angular/core';
import { TemperatureUnit } from '../service/temperature-unit';

@Pipe({
	name: 'formatTemperature',
})
export class FormatTemperature implements PipeTransform {

	readonly temperatureUnit = inject(TemperatureUnit);

	transform(value: number, decimal: number = 0): unknown {
		if (!this.temperatureUnit.isFahrenheit()) {
			let celcius = this.temperatureUnit.convertToCelsius(value);
			return Number(celcius.toFixed(decimal));
		}
		return Number(value.toFixed(decimal));
	}
}
