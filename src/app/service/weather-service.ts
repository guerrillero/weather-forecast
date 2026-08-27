import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { IWeatherForecast } from '../models/weather-forecast.model';

@Service()
export class WeatherService {
  private readonly endpoint = 'https://api.weather.gov/gridpoints/MLB/33,70/forecast';

  private readonly http = inject(HttpClient);

  getWeather(): Observable<IWeatherForecast> {
    return this.http.get<IWeatherForecast>(this.endpoint).pipe(timeout(10_000));
  }
}
