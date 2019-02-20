import { Component, OnInit } from '@angular/core';

//import {FirebaseService} from '../../services/firebase.service'


@Component({
  selector: 'app-Budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {

public monthlyPay: number= 0;
public other: number= 0;
public emergencyFund: number= 0;
public retirement: number= 0;
public investments: number= 0;
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

public monthlyIncome: number=0;
public monthlyExpenses: number=0;
public monthlySavings: number=0;
public overUnder: number=0;
  constructor() {


   }

  ngOnInit() {


    }
handlerClick(event: Event){
  calculateMonthlyIncome();
  calculateMonthlyExpenses();
  calculateMontlySavings();
  calculateOverUnder();
}
calculateMonthlyIncome(){

}
calculateMonthlyExpenses(){

}
calculateMontlySavings(){

}
calculateOverUnder(){

}


}
