// Similar to app.js in Express.js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // List of components available in my app
    AppComponent
  ],
  imports: [ // List of modules available in my app
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // List of services available in my app
  bootstrap: [AppComponent] // List of components to be loaded when my app starts
})
export class AppModule { }
