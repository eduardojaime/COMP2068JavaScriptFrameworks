// similar to app.js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// similar to creating the indexRouter object
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
// enable 2 way data binding with FormsModule
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // register imported module in app
  ],
  providers: [],
  bootstrap: [ProjectComponent] // similar to app.use('/', indexRouter);
})
export class AppModule { }
