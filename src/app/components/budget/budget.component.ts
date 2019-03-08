import { Component, OnInit } from '@angular/core';

//import {FirebaseService} from '../../services/firebase.service'


@Component({
  selector: 'app-Budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {

//Income
public monthlyPay: number= 0;
public other: number= 0;

//Savings
public emergencyFund: number= 0;
public retirement: number= 0;
public investments: number= 0;

//Expenses
public housing: number= 0;
public utilites: number= 0;
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
  constructor() {


   }

  ngOnInit() {


    }
onClickMe(){

  this.calculateMonthlyIncome();
  this.calculateMonthlyExpenses();
  this.calculateMontlySavings();
  this.calculateOverUnder();
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


}
