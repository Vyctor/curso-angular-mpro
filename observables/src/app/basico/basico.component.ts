import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.scss'],
})
export class BasicoComponent implements OnInit {
  subscriptionOne: Subscription;
  subscriptionTwo: Subscription;
  numberOne = 0;
  numberTwo = 0;
  stringOne = 'Initializing...';
  stringTwo = 'Initializing...';

  constructor() {}

  ngOnInit(): void {
    const myFirstObservable = new Observable((observer: Observer<number>) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.next(5);
      observer.error('error');
      observer.complete();
    });
    myFirstObservable.subscribe(
      (x: number) => console.log(x),
      (error) => console.error(error),
      () => {
        console.log('Completed');
      }
    );

    // const timerCount = interval(500);
    // timerCount.subscribe((n: number) => console.log(n));
    // console.log('after  interval');

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

    this.subscriptionOne = myIntervalObservable.subscribe(
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

    setTimeout(() => {
      this.subscriptionOne.unsubscribe();
      this.subscriptionTwo.unsubscribe();
    }, 15000);
  }
}
