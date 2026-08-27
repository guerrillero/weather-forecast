import { Component, computed, inject, signal } from '@angular/core';
import { Top } from "../../core/sections/top/top";
import { Header } from "../../core/sections/header/header";
import { CurrentWeather } from "../../core/sections/current-weather/current-weather";
import { IWeatherPeriod } from '../../models/weather-period.model';
import { Card } from "../../core/common/card/card";
import { ICard } from '../../core/common/card/card.model';
import { Periods } from "../../core/sections/periods/periods";
import { WeatherService } from '../../service/weather-service';
import { IWeatherForecast } from '../../models/weather-forecast.model';
import { Graphic } from "../../core/common/graphic/graphic";
import { IGraphic } from '../../core/common/graphic/graphic.model';

@Component({
	imports: [Top, Header, CurrentWeather, Card, Periods, Graphic],
	selector: 'app-dashboard',
	styleUrl: './dashboard.css',
	templateUrl: './dashboard.html',
})
export class Dashboard {
	readonly weatherService = inject(WeatherService);

	readonly weatherForecast = signal<IWeatherForecast>({} as IWeatherForecast);

	constructor() {
		this.weatherService.getWeather().subscribe(weather => this.weatherForecast.set(weather));
	}

	readonly dataHeader = computed(() => {
		let weather = this.weatherForecast();
		let { geometry } = weather;
		let coordinates = geometry.coordinates.flatMap(v => v)[0];
		let lat = coordinates[1] ?? '-';
		let long = coordinates[0] ?? '-';
		let description = `${lat}°N  ${long}°W  ·  FLORIDA`
		return {
			eyebrow: geometry.type,
			title: 'Orlando',
			description: description
		}

	});

	readonly currentPeriod = computed<IWeatherPeriod>(() => {
		let weather = this.weatherForecast();
		return weather.properties.periods[0];
	});

	readonly temperature = signal('');

	readonly graphic = computed(() => {
		let weather = this.weatherForecast();
		let periods = weather.properties.periods.slice(2, 8);
		let trend: IGraphic = {
			card: {
				title: 'Temperature trend',
				subtitle: `Next ${periods.length} periods`
			},
			periods: periods
		};

		return trend;
	});

	

}
