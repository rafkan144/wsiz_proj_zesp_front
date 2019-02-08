import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RegistrationRequestModel } from './../../models/registration-request-model';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  public model = new RegistrationRequestModel();

  @Output()
  onSubmit = new EventEmitter<RegistrationRequestModel>();

  @Input()
  submitting = false;

  @ViewChild(NgForm)
  mainForm: NgForm;


  ngOnInit(): void {
  }

  public onSubmitHandler = (): void => {
    if (this.mainForm.valid) {
      this.onSubmit.emit(this.model);
    }
  }

}
