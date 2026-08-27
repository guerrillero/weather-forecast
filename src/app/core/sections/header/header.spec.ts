import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('data', {
      eyebrow: 'GRIDPOINT 33,70',
      title: 'Orlando',
      description: '28.55°N 81.18°W',
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
