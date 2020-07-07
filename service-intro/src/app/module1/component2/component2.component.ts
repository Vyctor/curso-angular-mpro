import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';
import { Service2 } from '../../service2.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
})
export class Component2Component implements OnInit {
  num = 0;
  text = '';

  constructor(
    private myService1: Service1Service,
    private myService2: Service2
  ) {}

  ngOnInit(): void {
    this.num = this.myService1.num;
    this.text = this.myService2.text;
  }
}
