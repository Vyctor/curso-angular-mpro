import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css'],
})
export class StringInterpolationComponent implements OnInit {
  constructor() {}

  person = {
    firstName: 'Vyctor',
    lastName: 'Guimarães',
    age: 25,
    address: 'Rua Admilson Cabral',
  };

  ngOnInit(): void {}
}
