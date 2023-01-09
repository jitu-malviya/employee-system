import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from './../../../service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form !: FormGroup;
  email: any = '';
  password: any = '';
  constructor(private authApi: AuthService,
    private fb: FormBuilder) 
    {
      this.form = this.fb.group({
      email: [this.email, [Validators.required, Validators.email]],
      password: [this.password, [Validators.required]],
    })
  }
  ngOnInit(): void {
  }

  login(){
    this.authApi.login(this.form.value.email, this.form.value.password);
  }
  
}



