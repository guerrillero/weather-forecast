import { inject, Pipe, PipeTransform } from '@angular/core';
import { TemperatureUnit, UnitEnum } from '../service/temperature-unit';

@Pipe({
	name: 'formatUnit',
})
export class FormatUnitPipe implements PipeTransform {
	readonly temperatureUnit = inject(TemperatureUnit);

	// `unit` must be passed in (read from a signal in the template) so this pure
	// pipe re-runs when it toggles — see FormatTemperature for the same reasoning.
	transform(value: unknown, unit: UnitEnum): string {
		return this.temperatureUnit.displayUnit();
	}
}
