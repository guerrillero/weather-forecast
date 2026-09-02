import { Service, signal } from '@angular/core';

enum UnitEnum {
	CELCIUS = 'C',
	FAHRENHEIT = 'F'
}

@Service()
export class TemperatureUnit {
	readonly unit = signal<UnitEnum>(UnitEnum.FAHRENHEIT);

	toggle() {
		this.unit.update(unit => unit === UnitEnum.CELCIUS ? UnitEnum.FAHRENHEIT : UnitEnum.CELCIUS);
	}

	toF() {
		this.unit.set(UnitEnum.FAHRENHEIT);
	}

	toC() {
		this.unit.set(UnitEnum.CELCIUS);
	}

	convertToCelsius(fahrenheit: number): number {
		return Number((fahrenheit - 32) * 5 / 9);
	}

	isFahrenheit(): boolean {
		return this.unit() === UnitEnum.FAHRENHEIT;
	}

	displayUnit(): string {
		return this.isFahrenheit() ? '°F' : '°C';
	}
}
