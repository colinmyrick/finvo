import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import Chart from 'chart.js';
//import {FirebaseService} from '../../services/firebase.service'


@Component({
  selector: 'app-Budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {

//@ViewChild(BaseChartDirective) chart: BaseChartDirective;

//Income
public monthlyPay: number= 0;
public other: number= 0;

//Savings
public emergencyFund: number= 0;
public retirement: number= 0;
public investments: number= 0;

//Expenses
public housing: number= 0;
public utilities: number= 0;
public food: number= 0;
public transportation: number= 0;
public carPayment: number= 0;
public carInsurance: number= 0;
public healthInsurance: number= 0;
public clothing: number= 0;
public otherLoans: number= 0;
public miscellaneous: number= 0;

//Monthly Totals
public monthlyIncome: number=0;
public monthlyExpenses: number=0;
public monthlySavings: number=0;
public overUnder: number=0;

//chartTypepublic
public Chart:any;

public doughnutChartLabels = ['Retirement/Savings/Investments', 'Housing', 'Transportation', 'Health',
                              'Food & Clothing', 'Debts/Loan Payments', 'Personal Spending'];
public doughnutChartData = [0,0,0,0,0,0,0];

public doughnutChartType = 'doughnut';


public chartColors = [
  {
      backgroundColor: [
        '#6B7D43',
        '#626C7A',
        '#F8DF98',
        '#E38D83',
        '#6E312F',
        '#CDA784',
        '#AEC2C9',

      ],
      borderColor: '#fff',
      //pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      //pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];

  constructor() {


   }

  ngOnInit() {


    }
onClickMe(){

  this.calculateMonthlyIncome();
  this.calculateMonthlyExpenses();
  this.calculateMontlySavings();
  this.calculateOverUnder();
  this.updateChart();


}
calculateMonthlyIncome(){
  this.monthlyIncome = this.monthlyPay + this.other;
}
calculateMonthlyExpenses(){
  this.monthlyExpenses = this.housing + this.utilities + this.food +
                         this.transportation + this.carPayment +
                         this.carInsurance + this.healthInsurance + this.clothing +
                         this.otherLoans + this.miscellaneous;
}
calculateMontlySavings(){
  this.monthlySavings = this.emergencyFund + this.retirement + this.investments;
}
calculateOverUnder(){
  this.overUnder = this.monthlyIncome - (this.monthlySavings + this.monthlyExpenses);

}
updateChart() {
  this.doughnutChartData = [this.retirement + this.emergencyFund + this.other, this.housing + this.utilities,
                              this.transportation + this.carPayment + this.carInsurance, this.healthInsurance,
                              this.food + this.clothing, this.otherLoans, this.overUnder];
  //this.chart.ngOnChanges({});
}


}
