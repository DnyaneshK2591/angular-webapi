import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, retry, tap, throwError, Observable } from 'rxjs';

@Injectable()
export class HttpLoggerInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(this.handleRequestLogging(req).bind(this));
  }

  handleRequestLogging(req: HttpRequest<any>) {
    let msg: string = '';
    let reqStartDate = Date.now();
    return function (obsv$: Observable<any>) {
      return obsv$.pipe(
        tap(response => {
          msg =
            'succeeded with status:' +
            response.status +
            ': ' +
            response.statusText;
        }),
        catchError((error: HttpErrorResponse) => {
          msg =
            error.error +
            'with status:' +
            error.status +
            ' and status text:' +
            error.statusText;
          return throwError(() => error);
        }),
        finalize(() => {
          console.log(
            '%c ***Logger***\n :: URL => ' +
              req.url +
              '\n' +
              ' :: ERROR => ' +
              msg +
              '\n :: Request completed in ' +
              (Date.now() - reqStartDate) +
              'ms' +
              '\n ***',
            'color:green'
          );
        })
      );
    };
  }
}
