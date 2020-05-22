import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  names = ['Ana', 'John', 'Michael', 'Jackson'];

  cities = [
    { name: 'São Paulo', state: 'SP' },
    { name: 'Rio Verde', state: 'GO' },
    { name: 'Rio de Janeiro', state: 'RJ' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
