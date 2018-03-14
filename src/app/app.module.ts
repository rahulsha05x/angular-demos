import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { CribsService } from './cribs.service';
import { HttpClientModule } from '@angular/common/http';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HeroCardComponent,
    AddHotelComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers:  [ CribsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
