import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent }from '../components/header/header.component';
import { StoresComponent } from '../components/stores/stores.component';
import { HttpClientModule } from '@angular/common/http';
import { MidataserviceService } from '../services/midataservice.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, HeaderComponent ,StoresComponent],
  providers: [ MidataserviceService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
