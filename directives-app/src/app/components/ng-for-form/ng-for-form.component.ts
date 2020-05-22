import { Component, OnInit } from '@angular/core';

interface Client {
  id: number;
  name: string;
  address: string;
  phone: string;
  city: string;
  age: number;
}

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css'],
})
export class NgForFormComponent implements OnInit {
  name = '';
  address = '';
  phone = '';
  city = '';
  age = 0;

  clients: Client[] = [];

  cities = [
    { name: 'Rio Verde', state: 'GO' },
    { name: 'São Paulo', state: 'SP' },
    { name: 'Goiânia', state: 'GO' },
    { name: 'Brasília', state: 'DF' },
  ];
  constructor() {}

  ngOnInit(): void {}

  save = (): void => {
    this.clients.push({
      id: Date.now(),
      name: this.name,
      address: this.address,
      city: this.city,
      age: this.age,
      phone: this.phone,
    });
    console.log(this.clients);
    this.cancel();
  };

  deleteClient = (client: Client) => {
    this.clients.splice(
      this.clients.findIndex((data) => client.id === data.id),
      1
    );
  };

  cancel = (): void => {
    this.name = '';
    this.address = '';
    this.city = '';
    this.phone = '';
    this.age = 0;
  };
}
