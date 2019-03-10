import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BudgetComponent } from './components/budget/budget.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddbudgetComponent } from './components/addbudget/addbudget.component';
import { EditbudgetComponent } from './components/editbudget/editbudget.component';
import {InvestmentCalculatorComponent} from './components/investment-calculator/investment-calculator.component'

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'budget',
    component:BudgetComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'editbudget',
    component:EditbudgetComponent
  },
  {
    path:'addbudget',
    component:AddbudgetComponent
  },
  {
    path:'InvestmentCalculator',
    component:InvestmentCalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
