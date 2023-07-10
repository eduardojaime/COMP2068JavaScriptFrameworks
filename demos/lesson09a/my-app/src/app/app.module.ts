// similar or equivalent to app.js in Express
// Program.cs in ASP.NET
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Modules of my application
// These extend the capabilities of my app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// similar to importing the router object in app.js
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent // similar to app.use() to register a router object in app.js
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProjectsComponent] // Indicates which one is the starting component
})
export class AppModule { }
