import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss'],
})
export class DepartmentFormComponent {
  depName: string;

  constructor(private departmentService: DepartmentService) {}

  save() {
    this.departmentService.addDepartment({
      name: this.depName,
    });
    this.clear();
  }

  clear() {
    this.depName = '';
  }
}
