import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
})
export class NameComponent implements OnInit {
  newName = '';

  @Input()
  set name(name: string) {
    this.newName = 'Your name: ' + (name || '<name empty>');
  }

  get name(): string {
    return this.name;
  }

  constructor() {}

  ngOnInit(): void {}
}
