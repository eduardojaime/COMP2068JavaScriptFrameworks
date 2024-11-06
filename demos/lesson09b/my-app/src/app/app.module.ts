// Similar to app.js in Express
// Here we configure modules, services, and components globally in the application
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [ // Components, directives, and pipes
    AppComponent,
    ProjectComponent
  ],
  imports: [ // Modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // Services (to retrieve data)
  bootstrap: [ProjectComponent] // This is the root component
})
export class AppModule { }
