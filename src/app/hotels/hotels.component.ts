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
  
  constructor(
    private http: HttpClient,
    private cribsService:CribsService) { }

  ngOnInit() {
    console.log("Cribs data: "+this.cribs);
    this.cribsService.getAllCrib()
    .subscribe(
      data =>  {
        this.cribs = data
      console.log("Crib is : "+ JSON.stringify(this.cribs));
    }
    )

    this.cribsService.newCribSubject.subscribe(
      data => {
        
        this.cribs.unshift(data);
        console.log("My updated data: "+ JSON.stringify(this.cribs));
      })
    
  }

}
