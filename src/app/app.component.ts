import { AuthService } from './service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-system';
  userLoggedIn: boolean = false;
  constructor(private authApi: AuthService) {

  }
  ngOnInit() {
     this.userLoggedIn = this.authApi.isUserLoggedIn();
  }
}
