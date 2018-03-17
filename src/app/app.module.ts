import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';

import { LoginComponent } from './login/login.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { CribsService } from './cribs.service';
import { HttpClientModule } from '@angular/common/http';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: UserRegisterationComponent },
  
  {
    path: 'add',
    component: AddHotelComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HeroCardComponent,
    AddHotelComponent,
    LoginComponent,
    UserRegisterationComponent,
    SearchBarComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule

  ],
  providers:  [ CribsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
