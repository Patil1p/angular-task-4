import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAndChartComponent } from './form-and-chart.component';

describe('FormAndChartComponent', () => {
  let component: FormAndChartComponent;
  let fixture: ComponentFixture<FormAndChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAndChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAndChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
