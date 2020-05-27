import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client/client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css'],
})
export class InputBindingComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  lastName: string;

  @Input()
  age: number;

  clients: Client[];

  constructor() {
    this.clients = [
      { id: 1, name: 'bob', age: 30 },

      { id: 2, name: 'james', age: 60 },

      { id: 3, name: 'john', age: 20 },

      { id: 4, name: 'marcus', age: 23 },
    ];
  }

  ngOnInit(): void {}
}
