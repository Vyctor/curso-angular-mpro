import {
  Component,
  OnInit,
  Input,
  OnChanges,
  AfterContentInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.css'],
})
export class ChildChildComponent
  implements OnInit, OnChanges, AfterContentInit {
  @Input()
  name: string;

  constructor() {}

  ngOnInit(): void {
    console.log('   Child child ngOnInit: ', this.name);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('   Child child ngOnChanges: ', this.name);
  }

  ngAfterContentInit(): void {
    console.log('   Child child ngAfterContentInit: ', this.name);
  }
}
