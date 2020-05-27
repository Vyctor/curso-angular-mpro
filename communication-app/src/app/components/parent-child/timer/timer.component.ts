import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  milliseconds = 0;
  interval: any;
  running = false;

  constructor() {}

  ngOnInit(): void {}

  start() {
    if (!this.running) {
      this.running = true;
      this.interval = setInterval(() => {
        this.milliseconds += 50;
      }, 50);
    }
  }

  stop() {
    if (this.running) {
      clearInterval(this.interval);
      this.running = false;
    }
  }

  clear() {
    this.milliseconds = 0;
  }

  round(n: number): number {
    return Math.round(n);
  }
}
