import { Component, OnInit,ViewChild  } from '@angular/core';
import { Hotel }    from './../hotel';
import { Crib } from './../crib';
import { CribsService } from './../cribs.service';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  @ViewChild('hotelForm') hotelForm : NgForm
  constructor(private cribsService: CribsService) { }

  ngOnInit() {
  }

  displayFormDetails(data) : void{
    
    this.cribsService.addCrib(data);
    this.hotelForm.reset();
  }

}
