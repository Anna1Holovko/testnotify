import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScrollingModule} from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSYrTpptsCs3NEb2TQEBQWDUsis1wMehM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
