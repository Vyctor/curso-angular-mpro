import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
  styleUrls: ['./check-child.component.css'],
})
export class CheckChildComponent
  implements
    OnInit,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit {
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('onInit');
  }

  ngOnChanges() {
    console.log('onChanges');
  }

  ngDoCheck(): void {
    console.log('doCheck');
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('afterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('afterViewInit');
  }
}
