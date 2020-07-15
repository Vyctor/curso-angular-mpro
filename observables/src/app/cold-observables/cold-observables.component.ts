import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, Observer } from 'rxjs';

@Component({
  selector: 'app-cold-observables',
  templateUrl: './cold-observables.component.html',
  styleUrls: ['./cold-observables.component.scss'],
})
export class ColdObservablesComponent implements OnInit {
  subscriptionOne: Subscription;
  subscriptionTwo: Subscription;
  numberOne = 0;
  numberTwo = 0;
  stringOne = '';
  stringTwo = '';

  constructor() {}

  ngOnInit(): void {
    this.stringOne = '';
    this.stringTwo = '';

    const myIntervalObservable = new Observable((observer: Observer<any>) => {
      let i = 0;
      const id = setInterval(() => {
        i++;
        console.log('from Observable: ', i);
        if (i === 10) {
          observer.complete();
        } else if (i % 2 === 0) {
          observer.next(i);
        }
      }, 1000);
      return () => {
        clearInterval(id);
      };
    });

    this.stringOne = 'Waiting for interval...';
    this.subscriptionOne = myIntervalObservable.subscribe(
      (n: number) => {
        this.numberOne = n;
      },
      (error) => {
        this.stringOne = 'Error: ' + error;
      },
      () => {
        this.stringOne = 'Completed.';
      }
    );

    this.stringTwo = 'Waiting for interval...';
    setInterval(() => {
      this.subscriptionTwo = myIntervalObservable.subscribe(
        (n: number) => {
          this.numberTwo = n;
        },
        (error) => {
          this.stringTwo = 'Error: ' + error;
        },
        () => {
          this.stringTwo = 'Completed.';
        }
      );
    }, 3000);

    setTimeout(() => {
      this.subscriptionOne.unsubscribe();
      this.subscriptionTwo.unsubscribe();
    }, 15000);
  }
}
