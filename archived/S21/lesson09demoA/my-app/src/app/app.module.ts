// similar to app.js in Express
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import formsmodule to enable two-way data binding in the view
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProjectComponent]
})
export class AppModule { }
