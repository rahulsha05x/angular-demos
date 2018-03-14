import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
@Injectable()
export class CribsService {
  public newCribSubject = new Subject<any>(); 
  constructor(private http: HttpClient) { }

  getAllCrib(){
   return this.http.get('assets/cribs.json');
  }

  addCrib(crib){
    console.log("Crib data"+JSON.stringify(crib));
    crib.image = "default-crib";
    this.newCribSubject.next(crib);
  }

}
