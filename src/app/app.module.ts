import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule, AuthProviders, AuthMethods, AngularFireAuth } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
//import {FirebaseService} from './services/firebase.service'


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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
