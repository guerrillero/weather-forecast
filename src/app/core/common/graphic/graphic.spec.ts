import { ComponentFixture, TestBed } from '@angular/core/testing';
import { weatherPeriodFixture } from '../../../../testing/weather.fixture';
import { Graphic } from './graphic';

describe('Graphic', () => {
  let component: Graphic;
  let fixture: ComponentFixture<Graphic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Graphic],
    }).compileComponents();

    fixture = TestBed.createComponent(Graphic);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('graphic', {
      card: { title: 'Temperature trend' },
      periods: [weatherPeriodFixture],
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
