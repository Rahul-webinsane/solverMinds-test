import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // constant urls the movies db api

  apiBaseUrl='https://api.themoviedb.org/3/trending/all/week?api_key=';
  API_KEY='7e74c7c857c8c2a25f4d737cb8c58ff2'; 
  imageUrl = 'https://image.tmdb.org/t/p/original';
  imgApi='https://image.tmdb.org/t/p/w185_and_h278_bestv2';
  BaseUrl='https://api.themoviedb.org/3/trending/all/week?api_key='+this.API_KEY+'&language=en-US';


  // json place holder api

  jsonApi='https://jsonplaceholder.typicode.com/posts';
  postApi ='//jsonplaceholder.typicode.com/posts';


  _lazyApi="https://jsonplaceholder.typicode.com/postss";


  showContainer:boolean = false;
  constructor(private http: HttpClient) { }

  // login section

  login(username: string, password: string) {
    return this.http.post('login', { username, password });
  }

  getProducts(): Observable<any> {
    return this.http.get('products', {
      headers: {},
    });
  }
  

  getMoviesLists(){
    return this.http.get(`${this.apiBaseUrl}${this.API_KEY}&language=en-US`);
    // return this.http.get(this.BaseUrl);
   }

   getPlaceHolderData(){
    return this.http.get(this.jsonApi);
   }

   getPosts(){
    return this.http.get(this.postApi);
   }

   getpostsById(id: any) {
    return this.http.get(`${this.postApi}/${id}`);
   }

   getLazyApi(){
     return this.http.get(this._lazyApi);
   }

  //  handleError(err){

  //   if(err instanceof HttpErrorResponse){

  //     // server side error
  //   }else{
  //     // client side error
  //   }
  //    return throwError(err)
  //  }
}
