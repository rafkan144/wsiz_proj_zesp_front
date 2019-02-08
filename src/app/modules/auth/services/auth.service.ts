import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CommonConfigsService } from '../../../services/common-configs.service';
import { CreaditalsRequestModel } from '../models/creaditals-request-model';
import { RegistrationRequestModel } from '../models/registration-request-model';
import { LoginResponse } from './../models/login-response';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private commonConfigsService: CommonConfigsService) {}

  public register = (model: RegistrationRequestModel): Observable<any> => {
    return this.http.post<any>(
      this.commonConfigsService.getApiAddress(`/register`),
      model,
    );
  }

  public login = (model: CreaditalsRequestModel): Observable<LoginResponse> => {
    return this.http.post<LoginResponse>(
      this.commonConfigsService.getApiAddress(`/login`),
      model
    );
  }

  public storeToken = (authToken: string): void => {
    localStorage.setItem('authToken', authToken);
  }

  public isLogged = (): boolean => {
    return !!localStorage.getItem('authToken');
  }

  public logOut = (): void => {
    localStorage.removeItem('authToken');
    this.router.navigateByUrl('');
  }
}
