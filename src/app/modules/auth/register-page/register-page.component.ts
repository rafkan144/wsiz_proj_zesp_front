import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RegistrationRequestModel } from '../models/registration-request-model';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  public submitting = false;
  public successfulMessage = false;

  constructor(private authService: AuthService, private router: Router) { }

  register = (model: RegistrationRequestModel): void => {
    this.submitting = true;
    this.authService.register(model).subscribe(res => {
      this.submitting = false;
      this.successfulMessage = true;
    }, err => {
      this.submitting = false;
    });
  }
}
