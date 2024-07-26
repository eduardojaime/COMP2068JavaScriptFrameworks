// Similar to app.js in Express
// This file is the entry point for the Angular application. 
// It imports the AppModule and bootstraps it using the platformBrowserDynamic function from the @angular/platform-browser-dynamic package.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProjectsComponent] // This tells Angular to start the application with the ProjectsComponent
})
export class AppModule { }
