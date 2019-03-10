import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-investment-calculator',
  templateUrl: './investment-calculator.component.html',
  styleUrls: ['./investment-calculator.component.css']
})
export class InvestmentCalculatorComponent implements OnInit {
  public doughnutChartLabels = ['Retirement', 'Other Savings/Investments', 'Housing', 'Transportation'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';



  constructor() { }

  ngOnInit() {

  }

}
