import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { countSelector, doubleSelector } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  count$:Observable<number>;
  // counter;number;]
  doubleCount$:Observable<number>;


  constructor(private store: Store<{counter:number}>) {
    // this.count$ = store.select('counter') //the usual way of selecting a slice of store state
    this.count$ = store.select(countSelector) //the alternate scalable way of selecting a slice of store
    this.doubleCount$ = store.select(doubleSelector)
    

    // this.count$.subscribe(
    //   // (storeCounter) => {
    //   //   this.counter = storeCounter
    //   // }
    // );
  }
}
