import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  name: string;
  age: number;
  clients: Client[] = [];

  constructor() {}

  ngOnInit(): void {}

  save() {
    this.clients.push({ name: this.name, age: this.age });
    this.name = '';
    this.age = 0;
  }

  removeClient(index: number) {
    console.log(index);
    this.clients.splice(index, 1);
    console.log(this.clients);
  }

  updateClient(c: Client, index: number) {
    this.clients[index].name = c.name;
    this.clients[index].age = c.age;
  }
}
