import { Component, OnInit, Pipe } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  errorMsg:any="";
  constructor(private apiService: CommonService) { }

  ngOnInit(): void {
    this.fetchData();
  }


  fetchData(){
   this.apiService.getLazyApi().subscribe(
     (x) =>{
       console.log("x datas-----",x);
       
     },
     error => {
       console.log(error);
       this.errorMsg = error.status;
     }
   ); 
  }

}
