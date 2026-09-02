import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Card } from '../card/card';
import { IGraphic } from './graphic.model';
import { FormatTemperature } from '../../../pipes/format-temperature-pipe';
import { TemperatureUnit } from '../../../service/temperature-unit';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Card, FormatTemperature],
  selector: 'app-graphic',
  styleUrl: './graphic.css',
  templateUrl: './graphic.html',
})
export class Graphic {
  readonly graphic = input.required<IGraphic>();
  protected readonly temperatureUnit = inject(TemperatureUnit);
  protected readonly periods = computed(() => this.graphic().periods.slice(0, 7));

  protected readonly metrics = computed(() => {
    const period = this.periods()[0];
    const isFahrenheit = this.temperatureUnit.isFahrenheit();

    if (!period) {
      return null;
    }

    const heatValue = isFahrenheit
      ? period.temperature
      : Number(this.temperatureUnit.convertToCelsius(period.temperature).toFixed(0));

    return {
      precip: {
        card: { title: 'PRECIP CHANCE' },
        value: period.probabilityOfPrecipitation.value,
        sub: '%',
      },
      heat: {
        card: { title: 'TEMPERATURE' },
        value: heatValue,
        sub: this.temperatureUnit.displayUnit(),
      },
      wind: {
        card: { title: `WIND · ${period.windDirection}` },
        value: period.windSpeed,
        sub: period.windDirection,
      },
    };
  });
}
