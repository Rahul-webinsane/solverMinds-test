import { CommonService } from './../service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {

    // this.commonService.getMoviesLists().subscribe((data) => {
    //   // this.movieCollection = data['results'];
    //   console.log("collection", data);
    // });
    
    // this.checkMethod();
  }

  appRender:any=[
    'app version: 10',
    'Create a new App: ng new appname',
    'Run App: ng serve',
    'Build app: ng build'
  ]


  textData:any=[
    'Movie List link showing some hollywood movies posters only it will get the moviedb api ',
    'Raw Data page works with material table and using simple @input @output data transfering',
    'API handled in Common Service and provider in root level ',
    'Using Bootstarp npm *** using angular material npm ',
    'Two Api using * Themoviedb and jsonplaceholder'
  ]


  // checkMethod(){
    
  //   for(let i=0;i<5;i++){
  //     console.log("outter set time out");
  //     setTimeout(
  //       ()=>{
  //         console.log("loop index",i);
          
  //       },3000
  //     );  
  //   }
  //   console.log("outter set time out");
  // }


}
