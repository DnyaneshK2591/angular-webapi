import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

@Injectable()
export class HttpLoadingInterceptorService implements HttpInterceptor {
  constructor(private loading: LoadingService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Http Loading interceptor started...');
    this.loading.loadingOn();
    return next.handle(req).pipe(
      finalize(() => {
        this.loading.loadingOff();
      })
    );
  }
}
