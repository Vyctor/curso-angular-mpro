import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/module2/service1.service';
import { Service2 } from 'src/app/service2.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.scss'],
})
export class Component4Component implements OnInit {
  public num = 0;
  public text = '';
  constructor(
    private myService1: Service1Service,
    private myService2: Service2
  ) {}

  ngOnInit(): void {
    this.num = this.myService1.num;
    this.text = this.myService2.text;
  }
}
