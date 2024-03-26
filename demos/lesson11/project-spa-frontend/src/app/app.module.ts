import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';

// import HttpClientModule to make HTTP requests and ProjectService to call the REST backend API
import { HttpClientModule } from '@angular/common/http';
import { ProjectsService } from './services/projects.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [ // modules are components that enhance what the app can do
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProjectsService], // providers are services that the app module can use to retrieve data
  bootstrap: [ProjectsComponent]
})
export class AppModule { }
