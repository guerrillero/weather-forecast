import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { weatherForecastFixture } from '../../../testing/weather.fixture';
import { WeatherService } from '../../service/weather-service';
import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
      providers: [
        {
          provide: WeatherService,
          useValue: {
            getWeather: () => of(weatherForecastFixture),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the current forecast', async () => {
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Orlando');
    expect(element.textContent).toContain('Partly Sunny');
  });
});
