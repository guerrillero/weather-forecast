import { TestBed } from '@angular/core/testing';
import { FormatUnitPipe } from './format-unit-pipe';
import { TemperatureUnit } from '../service/temperature-unit';

describe('FormatUnitPipe', () => {
  let pipe: FormatUnitPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    pipe = TestBed.runInInjectionContext(() => new FormatUnitPipe());
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns °F when the unit is Fahrenheit', () => {
    expect(pipe.transform(undefined)).toBe('°F');
  });

  it('returns °C after switching to Celsius', () => {
    TestBed.inject(TemperatureUnit).toC();
    expect(pipe.transform(undefined)).toBe('°C');
  });
});
