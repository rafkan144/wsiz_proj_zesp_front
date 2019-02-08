import {
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { Observable } from 'rxjs/Rx';

import { SpinnerService } from '../../services/spinner.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastr: ToastsManager,
    private spinnerService: SpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).map((event: HttpEvent<any>) => {
      if (event.type === HttpEventType.Sent) {
        this.spinnerService.incrementRequestCount();
      } else {
        this.spinnerService.decrementRequestCount();
      }
      if (event instanceof HttpResponse) {
        return event;
      }
    }).catch(err => {
      if (err instanceof HttpErrorResponse) {
        this.spinnerService.decrementRequestCount();
        const errResp = <HttpErrorResponse>err;
        if(errResp.status === 401) {
          this.router.navigateByUrl('auth/login');
        } else {
          let errorMsg = 'Wystąpił błąd serwera';
          console.error(errResp.error);
          this.toastr.error(errorMsg, null, {showCloseButton: true, dismiss: 'controlled'});
        }
      }

      return Observable.throw(err);
    });
  }
}
