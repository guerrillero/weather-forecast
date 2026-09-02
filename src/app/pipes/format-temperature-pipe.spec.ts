import { TestBed } from '@angular/core/testing';
import { FormatTemperature } from './format-temperature-pipe';
import { TemperatureUnit } from '../service/temperature-unit';

describe('FormatTemperature', () => {
  let pipe: FormatTemperature;
  let temperatureUnit: TemperatureUnit;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    pipe = TestBed.runInInjectionContext(() => new FormatTemperature());
    temperatureUnit = TestBed.inject(TemperatureUnit);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns the value unchanged in Fahrenheit', () => {
    expect(pipe.transform(95)).toBe(95);
  });

  it('converts to Celsius when the unit is Celsius', () => {
    temperatureUnit.toC();
    expect(pipe.transform(95)).toBe(35);
  });

  it('respects the decimal argument', () => {
    temperatureUnit.toC();
    expect(pipe.transform(95.4, 1)).toBe(35.2);
  });
});
