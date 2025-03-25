import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';

// Import HTTP Module for making HTTP requests to communicate to the backend API
import { HttpClientModule } from '@angular/common/http';
// Import ProjectsService so we can use it in the ProjectComponent
import { ProjectService } from './services/project.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [ // list of modules required by the app (available via DI)
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [ProjectService], // list of services available (via DI) for my app to use
  bootstrap: [ProjectComponent] // starting component
})
export class AppModule { }
