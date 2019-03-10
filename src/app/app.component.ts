import { Component } from '@angular/core';
import { AngularFirestore,
          AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {Chart} from 'chart.js'

/*export interface Budget {
  $key?:string;
  emergencyFund?:int;
  expenses?:int;
  housing?:int;
  income?:int;
  insurance?:int;
  investments?:int;
  miscellaneous?:int;
  overUnder?:int;
  retirement?:int;
  savings?:int;
  transportation?:int;
  utilities?:int;
}*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private afs: AngularFirestore) {

  }

}
