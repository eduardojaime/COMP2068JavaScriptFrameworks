// similar to app.js in Node
// or Program.cs in ASP.NET
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// similar to importing the router object
import { ProjectsComponent } from './projects/projects.component';
// import FormsModule to enable two-way data binding
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent // similar to app.use()
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // needs to be registered globally in the app
  ],
  providers: [],
  bootstrap: [ProjectsComponent]
})
export class AppModule { }
