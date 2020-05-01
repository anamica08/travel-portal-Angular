import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaStatsCountryComponent } from './corona-stats-country.component';

describe('CoronaStatsCountryComponent', () => {
  let component: CoronaStatsCountryComponent;
  let fixture: ComponentFixture<CoronaStatsCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaStatsCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaStatsCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
