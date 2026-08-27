import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather-service';

describe('WeatherService', () => {
	let service: WeatherService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [provideHttpClient(), provideHttpClientTesting()]
		});
		service = TestBed.inject(WeatherService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
