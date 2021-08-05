import { SpinnerService } from './spinner.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
 import { finalize} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(public spinn: SpinnerService) { }
  
 intercept(request: HttpRequest<any>, nexts: HttpHandler): Observable<HttpEvent<any>> {

  console.log("INTERCEPT 1 -----------");
  
  this.spinn.isLoading.next(true);

  return nexts.handle(request).pipe(
    finalize(
      
      ()=>{
        console.log("FINALIZE ------------ ----------- ");
        setTimeout(
          ()=> {
            this.spinn.isLoading.next(false);
          },3000
        );
      }  
    )
   );

}
  
}
