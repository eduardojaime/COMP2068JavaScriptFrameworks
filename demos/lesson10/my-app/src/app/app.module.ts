// Similar to app.js in Express
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [ // Enables components in my app
    AppComponent,
    ProjectsComponent
  ],
  imports: [ // Modules to use in my app
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // Services (DI)
  bootstrap: [ProjectsComponent] // Initial component
})
export class AppModule { }
