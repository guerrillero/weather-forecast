import { inject, Pipe, PipeTransform } from '@angular/core';
import { TemperatureUnit, UnitEnum } from '../service/temperature-unit';

@Pipe({
	name: 'formatTemperature',
})
export class FormatTemperature implements PipeTransform {

	readonly temperatureUnit = inject(TemperatureUnit);

	// `unit` is what the caller currently has selected (read from a signal in the
	// template). It must be a real argument, not read from the service inside
	// transform(), otherwise this pure pipe never re-runs when the unit toggles.
	transform(value: number, unit: UnitEnum, decimal: number = 0): number {
		if (unit === UnitEnum.CELCIUS) {
			const celcius = this.temperatureUnit.convertToCelsius(value);
			return Number(celcius.toFixed(decimal));
		}
		return Number(value.toFixed(decimal));
	}
}
