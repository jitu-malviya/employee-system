import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent {
  employeeName!: string;
  title!: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dailofRef: MatDialogRef<DeleteEmployeeComponent>
  ) {
    this.employeeName = data.employeeName;
    this.title = data.title
  }

  close() {
    this.dailofRef.close();
  }
  delete() {
    const deleteEmployee = true;
    this.dailofRef.close(deleteEmployee);
  }
}
