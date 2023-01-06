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
  id! : number;
  title !: string;
  name !: string;
  mobile !: string;
  email !: string;
  gender !: string;
  designation !: string;
  qualification!:string;
  joindate !: Date;
  buttonName!: string;
  action!:string;
  dialog: any;
  datepicker2: any;
  qualifications: string[] = ['Bachlor of Engineering', 'Bachelors in Computer Application', 'Information Technology', 'Computer Engineering', ];
  designations: string[] = ['Angular Developer', 'React Developer', 'Asp.NET Developer', 'Python Developer', 'UI-UX Developer'];


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
    this.designation = data.designation;
    this.joindate = data.joindate;
    this.qualification = data.qualification;
    this.buttonName = data.buttonName;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id:[this.id,[]],
      name: [this.name, [Validators.required]],
      mobile: [this.mobile, [Validators.required, Validators.pattern("[0-9 ]{10}"), Validators.minLength(10),]],
      email: [this.email, [Validators.required, Validators.email]],
      gender: [this.gender, [Validators.required]],
      designation: [this.designation, [Validators.required]],
      joindate: [this.joindate, [Validators.required]],
      qualification: [this.qualification, [Validators.required]],


    })
  }
  get f() {
    return this.form.controls;
  }
  registeEmployee() {
    this.dailofRef.close(this.form.value);
    // console.log(this.form.value);
  }
  cancelEmployee() {
    this.dailofRef.close();
  }
}