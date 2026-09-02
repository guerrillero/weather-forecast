import { TestBed } from '@angular/core/testing';
import { TemperatureUnit } from './temperature-unit';

describe('TemperatureUnit', () => {
  let service: TemperatureUnit;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperatureUnit);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
