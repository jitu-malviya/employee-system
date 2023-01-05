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
  id! : string;
  title !: string;
  name !: string;
  mobile !: string;
  email !: string;
  gender !: string;
  department !: string;
  qualification!:string;
  joindate !: Date;
  buttonName!: string;
  action!:string;
  dialog: any;
  datepicker2: any;
  qualifications: string[] = ['Bachlor of Engineering', 'Bachelors in Computer Application', 'Information Technology', 'Computer Engineering', ];
  departments: string[] = ['Angular Developer', 'React Developer', 'Asp.NET Developer', 'Python Developer', 'UI-UX Developer'];


  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: any,
    private dailofRef: MatDialogRef<AddemployeeComponent>
  ) {
    this.id = data.id;
    this.title = data.title;
    this.name = data.name;
    this.mobile = data.mobile;
    this.email = data.email;
    this.gender = data.gender;
    this.department = data.department;
    this.joindate = data.joindate;
    this.qualification = data.qualification;
    this.buttonName = data.buttonName;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id:[this.id,[]],
      name: [this.name, [Validators.required]],
      mobile: [this.mobile, [Validators.required, Validators.maxLength(10), Validators.minLength(10),]],
      email: [this.email, [Validators.required, Validators.email]],
      gender: [this.gender, [Validators.required]],
      department: [this.department, [Validators.required]],
      joindate: [this.joindate, [Validators.required]],
      qualification: [this.qualification, [Validators.required]],


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