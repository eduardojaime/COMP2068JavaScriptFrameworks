import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
// Angular apps are modular
// which means they utilize modules to inject functionality
// similar to app.js
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ], // specify which components belong to this module
  imports: [
    BrowserModule,
    AppRoutingModule
  ], // section to configure modules for the app
  providers: [], // section to configure data providers or services
  bootstrap: [ProjectsComponent] // starting component
})
export class AppModule { }
