import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Angular apps are modular
// which means they utilize modules to inject functionality
@NgModule({
  declarations: [
    AppComponent
  ], // specify which components belong to this module
  imports: [
    BrowserModule,
    AppRoutingModule
  ], // section to configure modules for the app
  providers: [], // section to configure data providers or services
  bootstrap: [AppComponent] // starting component
})
export class AppModule { }
