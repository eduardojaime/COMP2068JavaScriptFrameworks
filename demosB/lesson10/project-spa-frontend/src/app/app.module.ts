// equivalent of app.js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
// add httpclientmodule to enable the app to use httpclient class
import { HttpClientModule } from '@angular/common/http';
// register the service to the entire application
import { ProjectService } from './services/project.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProjectService], // service is a provider of data
  bootstrap: [ProjectComponent] // set project as startup component
})
export class AppModule { }
