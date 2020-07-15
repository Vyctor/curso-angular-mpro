import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, fromEvent, Observer } from 'rxjs';

@Component({
  selector: 'app-hot-observables-intro',
  templateUrl: './hot-observables-intro.component.html',
  styleUrls: ['./hot-observables-intro.component.scss'],
})
export class HotObservablesIntroComponent implements AfterViewInit {
  @ViewChild('myButton') button: ElementRef;
  numberOne = 0;
  numberTwo = 0;
  stringOne = '';
  stringTwo = '';

  constructor() {}

  ngAfterViewInit(): void {
    const myButtonClickObservable: Observable<any> = fromEvent(
      this.button.nativeElement,
      'click'
    );

    myButtonClickObservable.subscribe((event: Event) => {
      console.log('Button clicked 1');
    });
    myButtonClickObservable.subscribe((event: Event) => {
      console.log('Button clicked 2');
    });

    class Producer {
      private myListeners = [];
      private x = 0;
      private id: NodeJS.Timeout;

      public addListener(listener) {
        this.myListeners.push(listener);
        console.log(this.myListeners.length);
      }

      public start() {
        this.id = setInterval(() => {
          this.x++;
          console.log('From Producer: ', this.x);
          for (const listener of this.myListeners) {
            listener(this.x);
          }
        }, 1000);
      }

      public stop() {
        clearInterval(this.id);
      }
    }

    const producer: Producer = new Producer();
    producer.start();

    setTimeout(() => {
      producer.addListener((n: number) => console.log('From listener 1', n));
      producer.addListener((n: number) => console.log('From listener 2', n));
    }, 4000);

    const myHotObservable = new Observable((observer: Observer<number>) => {
      producer.addListener((n: number) => observer.next(n));
    });

    myHotObservable.subscribe((n: number) =>
      console.log('From subscriber 1: ', n)
    );
    myHotObservable.subscribe((n: number) =>
      console.log('From subscriber 2: ', n)
    );
  }
}
