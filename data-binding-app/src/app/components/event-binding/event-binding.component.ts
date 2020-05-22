import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  iterator = 0;
  buttonName = `It was clicked ${this.iterator} times`;
  spinnerMode = 'determinate';
  btnEnable = true;
  selectDisabled = false;
  selectOption = null;
  inputName = 'John';

  constructor() {}

  ngOnInit(): void {}

  save = () => console.log('click');

  inc = () => {
    this.iterator += 1;
    this.buttonName = `It was clicked ${this.iterator} times`;
  };

  disable = () => {
    this.btnEnable = false;
    this.spinnerMode = 'indeterminate';
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = 'determinate';
    }, 3000);
  };

  cbChange = ({ checked }) => {
    this.selectDisabled = checked;
  };

  selectionChange = ({ value }) => {
    this.selectOption = value;
  };

  inputEvent = ({ target }) => {
    console.log(target.value);
  };
}
