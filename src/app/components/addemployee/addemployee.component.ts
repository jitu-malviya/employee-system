import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent {

  form !: FormGroup;
  title : string;
  name !: string;
  mobile !: string;
  email !: string;
  gender !: string;
  department !: string;
  birthdate !: Date;
  joindate !: Date;
  qualification !: string;
  action!:string;
  dialog: any;
  datepicker2: any;
  departments: string[] = ['Angular Developer', 'React Developer', 'Asp.NET Developer', 'Python Developer', 'UI-UX Developer'];


  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: any,
    private dailofRef: MatDialogRef<AddemployeeComponent>
  ) {
    this.title = data.title
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10),]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['male', [Validators.required]],
      department: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      joindate: ['', [Validators.required]],
      qualification: ['', [Validators.required]],

    })
  }
  registeEmployee() {
    this.dailofRef.close(this.form.value);
    // console.log(this.form.value);
  }
  cancelEmployee() {
    this.dailofRef.close();
  }
}