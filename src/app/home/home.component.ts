import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
