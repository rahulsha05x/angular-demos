import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { CribsService } from './../cribs.service';
import { Crib } from './../crib';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  cribs:any ;

  private cribsBak;
  public cribsLog;
  
  constructor(
    private http: HttpClient,
    private cribsService:CribsService) { }

  ngOnInit() {
    this.cribsService.getAllCrib()
    .subscribe(
      data =>  {
        
        this.cribs = data;
        this.cribsLog = this.cribsBak = this.cribs;
    }
    );

    this.cribsService.newCribSubject.subscribe(
      data => {
        
        this.cribs.unshift(data);
        console.log("My updated data: "+ JSON.stringify(this.cribs));
      });
  }
  searchObject(e) {
    console.log(e);
    this.cribsLog = this.cribsBak;
    if(e.trim() == '') {
      return;
  }
    this.cribsLog = this.cribsLog.filter(function(data){
      console.log("data is "+data.type);
        return data.type.toLowerCase().indexOf(e.toLowerCase()) !== -1;
    })

      

    console.log(this.cribsLog);

   }



}
