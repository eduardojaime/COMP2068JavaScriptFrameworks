// Similar to app.js in Express.js
// This is the root module of the Angular application. 
// It defines the components, directives, and pipes that belong to the application.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [ // list of components available in my app
    AppComponent, ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProjectComponent] // Starting component
})
export class AppModule { }
