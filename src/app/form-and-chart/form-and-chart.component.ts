import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-form-and-chart',
  templateUrl: './form-and-chart.component.html',
  styleUrls: ['./form-and-chart.component.css']
})
export class FormAndChartComponent implements OnInit {

  pieChartForm!: FormGroup;
  ctx: any;
  config: any;
  chartData: number[] = [];
  val1: any
  val2: any
  myChart: any = null;

  ngOnInit() {
    this.pieChartForm = new FormGroup(
      {
        colValue: new FormControl(this.chartData, [Validators.required, Validators.minLength(2)]),
        colValue2: new FormControl(this.chartData)
      }
    )

  }
  
  createChart() {

    this.prepareChart();

    this.pushFormDataIntoChart();

    this.myChart.update();

    this.pieChartForm.reset();

  }
  validVal1(){
    this.val1 = this.pieChartForm.value.colValue;
    if(this.val1 <= 100){
      this.val2 = 100 - this.val1;
      console.log(this.val2);
    }
  }
  validVal2(){
    this.val2 = this.pieChartForm.value.colValue2;
    if(this.val2 <= 100){
      this.val1 = 100 - this.val2;
      console.log(this.val1);
    }
  }

  private pushFormDataIntoChart() {
    
    this.chartData.push(this.val1);
    this.chartData.push(this.val2);

  }

  private prepareChart() {
    if(this.myChart != null){
      this.myChart.destroy()
      this.chartData = []
    }
    this.ctx = document.getElementById('myChart');
    this.config = {
      type: 'pie',
      options: {
      },
      data: {
        labels: ['A', 'B'],
        datasets: [{
          label: 'Chart Data',
          data: this.chartData,
          borderWidth: 4,
          borderColor: 'grey',
          backgroundColor: ['red', ' pink']
        }],
      }
    }
   
    this.myChart = new Chart(this.ctx, this.config);
    
  }
}
