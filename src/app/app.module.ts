import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiuxService } from './apiux.service';
import { SearchService } from './search.service';
import { Ng2CompleterModule } from 'ng2-completer';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

import { AngularFontAwesomeModule } from 'angular-font-awesome';





@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2CompleterModule,
    BrowserAnimationsModule,
    MatCardModule,

    AngularFontAwesomeModule



  ],
  providers: [ApiuxService, SearchService],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
