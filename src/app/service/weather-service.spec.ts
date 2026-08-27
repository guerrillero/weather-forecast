import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { weatherForecastFixture } from '../../testing/weather.fixture';
import { IWeatherForecast } from '../models/weather-forecast.model';
import { WeatherService } from './weather-service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(WeatherService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request and return the forecast', () => {
    let result: IWeatherForecast | null = null;

    service.getWeather().subscribe((forecast) => (result = forecast));

    const request = httpTesting.expectOne('https://api.weather.gov/gridpoints/MLB/33,70/forecast');
    expect(request.request.method).toBe('GET');

    request.flush(weatherForecastFixture);
    expect(result).toEqual(weatherForecastFixture);
  });
});
