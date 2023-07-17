// Similar to app.js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
// import http client to enable REST requests
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ProjectsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // register as a global module
  ],
  providers: [],
  bootstrap: [ProjectsComponent], // starting component
})
export class AppModule {}
