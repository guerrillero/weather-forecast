import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of, startWith, switchMap } from 'rxjs';
import { Graphic } from '../../core/common/graphic/graphic';
import { IGraphic } from '../../core/common/graphic/graphic.model';
import { CurrentWeather } from '../../core/sections/current-weather/current-weather';
import { Header } from '../../core/sections/header/header';
import { Periods } from '../../core/sections/periods/periods';
import { Top } from '../../core/sections/top/top';
import { IWeatherForecast } from '../../models/weather-forecast.model';
import { IWeatherGeometry } from '../../models/weather-geometry.model';
import { IWeatherPeriod } from '../../models/weather-period.model';
import { WeatherService } from '../../service/weather-service';

type WeatherState =
	| { status: 'loading' }
	| { status: 'success'; forecast: IWeatherForecast }
	| { status: 'error'; message: string };

const INITIAL_WEATHER_STATE: WeatherState = { status: 'loading' };

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [Top, Header, CurrentWeather, Graphic, Periods],
	selector: 'app-dashboard',
	styleUrl: './dashboard.css',
	templateUrl: './dashboard.html',
})
export class Dashboard {
	private readonly weatherService = inject(WeatherService);
	private readonly reloadTrigger = signal(0);

	protected readonly weatherState = toSignal(
		toObservable(this.reloadTrigger).pipe(
			switchMap(() =>
				this.weatherService.getWeather().pipe(
					map((forecast): WeatherState =>
						forecast.properties.periods.length > 0
							? { status: 'success', forecast }
							: { status: 'error', message: 'The forecast contains no weather periods.' },
					),
					startWith<WeatherState>(INITIAL_WEATHER_STATE),
					catchError((error: unknown) =>
						of<WeatherState>({
							status: 'error',
							message: this.getErrorMessage(error),
						}),
					),
				),
			),
		),
		{ initialValue: INITIAL_WEATHER_STATE },
	);

	protected readonly weatherView = computed(() => {
		const state = this.weatherState();

		if (state.status !== 'success') {
			return null;
		}

		const { geometry, properties } = state.forecast;
		const currentPeriod = properties.periods[0];

		if (!currentPeriod) {
			return null;
		}

		const trendPeriods = properties.periods.slice(2, 8);

		return {
			header: this.buildHeader(geometry),
			currentPeriod,
			graphic: this.buildGraphic(trendPeriods),
			periods: properties.periods,
		};
	});

	protected reloadWeather(): void {
		this.reloadTrigger.update((value) => value + 1);
	}

	private buildHeader(geometry: IWeatherGeometry) {
		const [longitude = 0, latitude = 0] = geometry.coordinates[0]?.[0] ?? [];
		const latitudeDirection = latitude >= 0 ? 'N' : 'S';
		const longitudeDirection = longitude >= 0 ? 'E' : 'W';

		return {
			eyebrow: 'GRIDPOINT 33,70',
			title: 'Orlando',
			description: `${Math.abs(latitude).toFixed(2)}°${latitudeDirection}  ${Math.abs(longitude).toFixed(2)}°${longitudeDirection}  ·  FLORIDA`,
		};
	}

	private buildGraphic(periods: IWeatherPeriod[]): IGraphic {
		return {
			card: {
				title: 'Temperature trend',
				subtitle: `Next ${periods.length} periods`,
			},
			periods,
		};
	}

	private getErrorMessage(error: unknown): string {
		if (error instanceof HttpErrorResponse && error.status === 0) {
			return 'The weather service is unreachable. Check your connection and try again.';
		}

		return 'The forecast could not be loaded. Please try again.';
	}
}
