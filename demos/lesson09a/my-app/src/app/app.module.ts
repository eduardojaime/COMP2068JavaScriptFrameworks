// similar or equivalent to app.js in Express
// Program.cs in ASP.NET
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Modules of my application
// These extend the capabilities of my app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
