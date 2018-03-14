import { Component, OnInit,Input } from '@angular/core';
import { Crib } from './../crib'

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input('crib') crib:Crib;
  constructor() { }

  ngOnInit() {
    let bedroom = this.crib.bedrooms;
  }

}
