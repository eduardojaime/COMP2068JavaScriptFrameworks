import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
// import Forms Module to enable 2-way data binding
import { FormsModule } from '@angular/forms';
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
    AppRoutingModule,
    FormsModule
  ], // section to configure modules for the app
  providers: [], // section to configure data providers or services
  bootstrap: [ProjectsComponent] // starting component
})
export class AppModule { }
