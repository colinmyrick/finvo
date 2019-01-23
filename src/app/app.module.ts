import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BudgetComponent } from './components/budget/budget.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddbudgetComponent } from './components/addbudget/addbudget.component';
import { EditbudgetComponent } from './components/editbudget/editbudget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BudgetComponent,
    NavbarComponent,
    AddbudgetComponent,
    EditbudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
