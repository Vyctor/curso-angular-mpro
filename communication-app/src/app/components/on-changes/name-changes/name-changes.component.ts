import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-name-changes',
  templateUrl: './name-changes.component.html',
  styleUrls: ['./name-changes.component.css'],
})
export class NameChangesComponent implements OnInit, OnChanges {
  @Input()
  name: string;
  nameBefore: string;

  constructor() {}
  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    if (changes.hasOwnProperty('name')) {
      this.nameBefore = changes.name.previousValue;
    }
  }

  ngOnInit(): void {}
}
