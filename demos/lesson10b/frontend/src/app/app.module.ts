// similar to app.js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
// Import the http client module to enable http requests
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [ // register modules globally
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // now my angular classes will have access to a HttpClient object
  ],
  providers: [],
  bootstrap: [ProjectsComponent] // component that loads on app startup
})
export class AppModule { }
