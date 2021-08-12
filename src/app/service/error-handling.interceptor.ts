import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(
        (error: HttpErrorResponse) =>{

          if(error instanceof HttpErrorResponse){
            //server side error
            return throwError(error)
          }else{
            // client side error
            return throwError(error)
          }
          
        }
      )
    );
  }
}

export const errorHandling ={
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorHandlingInterceptor,
  multi: true,
}
