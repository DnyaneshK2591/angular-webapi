import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessagesService } from 'src/app/shared/components/messages/messages.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorInterceptorService implements HttpInterceptor {
  constructor(private message: MessagesService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Http request started...');
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage = this.setError(error);
        console.log(errorMessage);
        //Add ui logic to display error on browwser
        //const message = errorMessage;
        this.message.showErrors(errorMessage);
        return throwError(() => errorMessage);
      })
    );
  }
  setError(error: HttpErrorResponse): string {
    let errorMessage = 'Unknown error occured';
    if (error.error instanceof ErrorEvent) {
      //Client side error
      errorMessage = error.error.message;
    } else {
      //Server side error
      errorMessage = error.message;
    }
    return errorMessage;
  }
}
