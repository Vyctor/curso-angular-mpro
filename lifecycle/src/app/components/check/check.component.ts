import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
})
export class CheckComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit {
  name = '';
  age = 0;

  @Input()
  test: string;

  constructor() {}

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
