import { CommonService } from './../service/common.service';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ShowRawDatasComponent } from '../show-raw-datas/show-raw-datas.component';
import { ViewChild } from '@angular/core';
import { MoviesListComponent } from '../movies-list/movies-list.component';


@Component({
  selector: 'app-raw-data',
  templateUrl: './raw-data.component.html',
  styleUrls: ['./raw-data.component.css']
})
export class RawDataComponent implements OnInit , AfterViewInit   {

  showChild:boolean;
  postid:any=0;
  
  displayedColumns = ['id', 'title', 'desc', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(ShowRawDatasComponent , {static: false}) childShow: ShowRawDatasComponent;


  datas: any;
  constructor(public commonService: CommonService,private router: Router) {

  }

  ngOnInit(): void {
    this.commonService.getPosts().subscribe(data => {
      this.datas = data;
      console.log("get datas- subscribe------------", data);
      this.dataSource = new MatTableDataSource(this.datas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }); 

  }

  getChild(id){
    console.log("mat id check ",id);
    this.postid = id;
    if(id){
      this.commonService.showContainer = true;
    }
    // this.router.navigate(['/showpost']);
  }



 async ngAfterViewInit() {
    // await this.childShow.getProducts();
    
    console.log("VIEW CHILD METHOD CHECKING -------",this.childShow.outputMessage);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // console.log("VIEW CHILD METHOD CHECKING -------",this.childShow.outputMessage);
  }
  
 
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  GetChildData(e){
    if(e){
      this.commonService.showContainer = false;
      this.dataSource = new MatTableDataSource(this.datas);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
    console.log("datassssssss-----",e);
   
  }


}


