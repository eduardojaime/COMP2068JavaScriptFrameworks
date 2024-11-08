// Similar to app.js in Express
// You will configure any module, service or component that your app uses here
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';

@NgModule({ // this represents your app configurations
  declarations: [ // list of components that belong to this module
    AppComponent,
    ProjectComponent
  ],
  imports: [ // list of modules the app uses for providing functionalities
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // list of services the app uses for providing data
  bootstrap: [ProjectComponent] // starting point of the app
})
export class AppModule { }
