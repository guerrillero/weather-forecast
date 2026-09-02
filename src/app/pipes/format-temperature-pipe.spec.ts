import { TestBed } from '@angular/core/testing';
import { FormatTemperature } from './format-temperature-pipe';
import { TemperatureUnit, UnitEnum } from '../service/temperature-unit';

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
    expect(pipe.transform(95, UnitEnum.FAHRENHEIT)).toBe(95);
  });

  it('converts to Celsius when the unit argument is Celsius', () => {
    expect(pipe.transform(95, UnitEnum.CELCIUS)).toBe(35);
  });

  it('respects the decimal argument', () => {
    expect(pipe.transform(95.4, UnitEnum.CELCIUS, 1)).toBe(35.2);
  });

  it('follows the passed unit argument even if the service state disagrees', () => {
    // The pipe must be a pure function of its arguments so Angular's pure-pipe
    // memoization re-runs transform() when the caller passes a different unit.
    temperatureUnit.toF();
    expect(pipe.transform(95, UnitEnum.CELCIUS)).toBe(35);

    temperatureUnit.toC();
    expect(pipe.transform(95, UnitEnum.FAHRENHEIT)).toBe(95);
  });
});
