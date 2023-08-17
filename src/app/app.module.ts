import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAndChartComponent } from './form-and-chart/form-and-chart.component';

import {Chart} from 'chart.js';
import { registerables } from 'chart.js';
import { ReactiveFormsModule } from '@angular/forms';
Chart.register(...registerables);

@NgModule({
  declarations: [
    AppComponent,
    FormAndChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
