import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Card } from '../card/card';
import { IGraphic } from './graphic.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Card],
  selector: 'app-graphic',
  styleUrl: './graphic.css',
  templateUrl: './graphic.html',
})
export class Graphic {
  readonly graphic = input.required<IGraphic>();
  protected readonly periods = computed(() => this.graphic().periods.slice(0, 7));

  protected readonly metrics = computed(() => {
    const period = this.periods()[0];

    if (!period) {
      return null;
    }

    return {
      precip: {
        card: { title: 'PRECIP CHANCE' },
        value: period.probabilityOfPrecipitation.value,
        sub: '%',
      },
      heat: {
        card: { title: 'TEMPERATURE' },
        value: period.temperature,
        sub: `°${period.temperatureUnit}`,
      },
      wind: {
        card: { title: `WIND · ${period.windDirection}` },
        value: period.windSpeed,
        sub: period.windDirection,
      },
    };
  });
}
