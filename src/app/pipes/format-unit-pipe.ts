import { inject, Pipe, PipeTransform } from '@angular/core';
import { TemperatureUnit } from '../service/temperature-unit';

@Pipe({
	name: 'formatUnit',
})
export class FormatUnitPipe implements PipeTransform {
	readonly temperatureUnit = inject(TemperatureUnit);

	transform(value: unknown): string {
		return this.temperatureUnit.displayUnit();
	}
}
