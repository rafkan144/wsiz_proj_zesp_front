import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AddTokenHttpInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('authToken');
    if (token) {
      const authorizedRequest = request.clone({
        headers: request.headers.set('Authorization', `${token}`)
      });
      return next.handle(authorizedRequest);
    }
    return next.handle(request);
  }
}
