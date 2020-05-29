import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css'],
})
export class MainLifecycleComponent implements OnInit {
  foods: string[] = ['Rice', 'Beans', 'Pizza'];
  clients: Client[] = [];

  name: string;
  age: number;
  food: string;

  private onEdit = -1;

  randomNumber: number;

  constructor() {
    this.generateRandomNumber();
  }

  generateRandomNumber() {
    this.randomNumber = Math.round(Math.random() * 1000);
  }

  ngOnInit(): void {
    console.log(this.randomNumber);
  }

  save() {
    if (this.onEdit === -1) {
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food,
      });
    } else {
      this.clients[this.onEdit].age = this.age;
      this.clients[this.onEdit].name = this.name;
      this.clients[this.onEdit].food = this.food;
      this.onEdit = -1;
    }
    this.age = null;
    this.name = '';
    this.food = '';
  }

  remove(i: number) {
    this.clients.splice(i, 1);
  }

  edit(i: number) {
    this.age = this.clients[i].age;
    this.name = this.clients[i].name;
    this.food = this.clients[i].food;
    this.onEdit = i;
  }
}
