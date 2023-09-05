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
// import FormsModule to set up 2-way data binding
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent // similar to app.use() to register a router object in app.js
  ],
  imports: [ // Dependency Injection mechanism
    BrowserModule,
    AppRoutingModule,
    FormsModule // injecting the forms module in the app, it'll make it available in all components
  ],
  providers: [],
  bootstrap: [ProjectsComponent] // Indicates which one is the starting component
})
export class AppModule { }
