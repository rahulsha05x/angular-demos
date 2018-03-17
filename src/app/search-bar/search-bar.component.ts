import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  @Output() searchObject = new EventEmitter();
  ngOnInit() {
  }

  searchItem(data):void{
    this.searchObject.emit(data);
  }
}
