import { Component, computed, inject } from '@angular/core';
import { TemperatureUnit } from '../../../service/temperature-unit';

@Component({
	imports: [],
	selector: 'app-temperature-unit-selector',
	styleUrl: './temperature-unit-selector.css',
	templateUrl: './temperature-unit-selector.html',
})
export class TemperatureUnitSelector {
	readonly temperatureUnit = inject(TemperatureUnit);

	protected readonly temperatureChecked = computed(() => this.temperatureUnit.isFahrenheit());
}
