import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Periods } from './periods';

describe('Periods', () => {
  let component: Periods;
  let fixture: ComponentFixture<Periods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Periods],
    }).compileComponents();

    fixture = TestBed.createComponent(Periods);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
