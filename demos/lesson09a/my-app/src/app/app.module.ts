// Similar to app.js
// Configure any global feature or service here
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
// import FormsModule to use ngModel
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ // list of components that the app utilizes
    AppComponent,
    ProjectsComponent
  ],
  imports: [ // list of modules that the app utilizes
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // list of data services that the app utilizes
  bootstrap: [ProjectsComponent] // indicates which component to load on startup
})
export class AppModule { }
