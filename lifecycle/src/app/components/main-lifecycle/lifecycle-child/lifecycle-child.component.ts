import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  AfterContentInit,
  AfterViewInit,
} from '@angular/core';

export interface LifeCycleEvent {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css'],
})
export class LifecycleChildComponent
  implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterViewInit {
  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  public events: LifeCycleEvent[] = [];
  nextEventId = 0;

  colors: string[] = ['accent', 'warn', 'primary'];

  intervalRef = null;

  constructor() {
    console.log(this.name + ' - constructor');
    this.newEvent('constructor');
    clearInterval(this.intervalRef);
  }
  ngAfterViewInit(): void {
    console.log(this.name + ' - AfterViewInit');
    this.newEvent('AfterViewInit');
  }
  ngAfterContentInit(): void {
    console.log(this.name + ' - AfterContentInit');
    this.newEvent('AfterContentInit');
  }

  ngOnDestroy() {
    console.log(this.name + ' - onDestroy');
    this.newEvent('onDestroy');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(this.name + ' - ngOnChanges');
    this.newEvent('ngOnChanges');
  }

  ngOnInit(): void {
    console.log(this.name + ' - ngOnInit');
    this.newEvent('ngOnInit');
  }

  newEvent(name: string) {
    const id = this.nextEventId++;
    this.events.push({
      id,
      color: this.colors[id % this.colors.length],
      name,
    });
    setTimeout(() => {
      const idx = this.events.findIndex((e) => e.id === id);
      if (idx >= 0) {
        this.events.splice(idx, 1);
      }
    }, 3000 + this.events.length * 2000);
  }
}
