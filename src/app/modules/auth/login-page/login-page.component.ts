import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CreaditalsRequestModel } from '../models/creaditals-request-model';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public loginFailed = false;
  public submitting = false;

  constructor(private authService: AuthService, private router: Router) { }

  public onSubmit = (model: CreaditalsRequestModel): void => {
    this.submitting = true;
    this.authService.login(model).subscribe(res => {
      this.submitting = false;
      this.authService.storeToken(res.authToken);
      this.router.navigateByUrl('');
    }, _ => {
      this.submitting = false;
      this.loginFailed = true;
    });
  }

}
