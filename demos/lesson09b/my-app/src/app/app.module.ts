// Similar to app.js in Express
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // Components available in the app
    AppComponent
  ],
  imports: [ // Modules imported in my app
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // Services available in the app
  bootstrap: [AppComponent] // The root component of the app (loads when the app starts)
})
export class AppModule { }
