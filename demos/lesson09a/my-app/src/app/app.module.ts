// Similar to app.js in Express.js
// This is the root module of the Angular application. 
// It defines the components, directives, and pipes that belong to the application.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // list of components available in my app
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Starting component
})
export class AppModule { }
