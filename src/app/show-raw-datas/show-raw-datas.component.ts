import { CommonService } from './../service/common.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-raw-datas',
  templateUrl: './show-raw-datas.component.html',
  styleUrls: ['./show-raw-datas.component.css']
})
export class ShowRawDatasComponent implements OnInit {
  

  @Input() postid: any = 0;
  @Output() myOutput:EventEmitter<string>= new EventEmitter();  

  outputMessage:string="I am child component."  

  postId:any=0;
  collection:any=[];
  constructor(public commonService: CommonService) { }

  ngOnChanges() {
    this.postId = this.postid;
    console.log("Get datasss--NG ON CHANGES----- @Input", this.postid);
    if(this.postId != 0){
      this.getPosts(this.postId);
    }
    
  }

  ngOnInit(): void {    
  }

  getPosts(e){
    this.commonService.getpostsById(e).subscribe((data) => {
      console.log("Get datas Details ------",data);
      this.collection.push(data);
    });
  }


  sendParent(e){
    console.log("click event",e);
    this.myOutput.emit(e);  
    
  }


}
