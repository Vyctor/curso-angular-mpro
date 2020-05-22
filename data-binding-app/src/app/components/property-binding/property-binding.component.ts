import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent implements OnInit {
  color = 'accent';
  buttonStatus = false;

  colors = ['primary', 'accent', 'warn'];
  idx = 0;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.idx++;
      this.idx === 3 ? (this.idx = 0) : null;
    }, 1000);
  }
}
