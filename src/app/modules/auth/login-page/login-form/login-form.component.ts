import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CreaditalsRequestModel } from '../../models/creaditals-request-model';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @ViewChild('mainForm')
  mainForm: NgForm;

  @Output()
  onSubmit = new EventEmitter<CreaditalsRequestModel>();

  @Input()
  submitting = false;

  public model = new CreaditalsRequestModel();

  public onSubmitHandler = (): void => {
    if (this.mainForm.valid) {
      this.onSubmit.emit(this.model);
    }
  }
}
