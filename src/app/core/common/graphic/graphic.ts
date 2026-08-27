import { Component, computed, input, signal } from '@angular/core';
import { Card } from "../card/card";
import { IGraphic } from './graphic.model';
import { ICard } from '../card/card.model';

@Component({
	imports: [Card],
	selector: 'app-graphic',
	styleUrl: './graphic.css',
	templateUrl: './graphic.html',
})
export class Graphic {
	readonly graphic = input.required<IGraphic>({});

	readonly period = computed(() => {
		let graph = this.graphic();
		let period = graph.periods[0];

		return {
			precip: {
				card: { title: 'PRECIP CHANCE' },
				value: period.probabilityOfPrecipitation.value,
				sub: '%'
			},
			heat: {
				card: { title: 'HEAT INDEX' },
				value: period.temperature,
				sub: `°${period.temperatureUnit}`
			},
			wind: {
				card: { title: `WIND · ${period.windDirection}` },
				value: period.windSpeed,
				sub: period.windDirection
			}
		}
	})
}
