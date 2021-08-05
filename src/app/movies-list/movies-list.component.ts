import { CommonService } from './../service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {


  movieName:string="rambo";
  movieCollection:any=[];
  movimgUrl:string='';
  // https://image.tmdb.org/t/p/w185_and_h278_bestv2
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {

    // fetching imgurl
    this.movimgUrl=this.commonService.imgApi
    this.commonService.getMoviesLists().subscribe((data) => {
      this.movieCollection = data['results'];
      console.log("collection", this.movieCollection);
    });
    
  }


  getImgData(e){
    console.log("img",e);
    
  }

}
