import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css'],
})
export class TwoWayDataBindingComponent implements OnInit {
  name = '';
  email = '';

  client = {
    firstName: 'John',
    lastName: 'Doe',
    address: 'Rua Admilson Cabral',
    age: 25,
  };

  constructor() {}

  ngOnInit(): void {}
}
