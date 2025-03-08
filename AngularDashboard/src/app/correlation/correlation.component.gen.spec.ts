import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Highcharts } from 'highcharts/highstock';
import { CorrelationComponent } from './correlation.component';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CorrelationComponent]
    });
    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`highcharts has default value`, () => {
    expect(component.highcharts).toEqual(Highcharts);
  });
});
