// similar to app.js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// similar to importing router objects in app.js
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
// import FormsModule to set up 2-way data binding
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ // enable components
    AppComponent,
    ProjectComponent
  ],
  imports: [ // enable modules
    BrowserModule,
    AppRoutingModule,
    FormsModule // now I can use the Module directives to link input fields with the data model
  ],
  providers: [], // enable services
  bootstrap: [ProjectComponent] // startup component
})
export class AppModule { }
