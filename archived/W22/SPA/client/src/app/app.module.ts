import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import HttpClient module and ProjectService
import {HttpClientModule} from '@angular/common/http';
import { ProjectService } from './services/project.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';

// Modify to point to ProjectComponent on app load
// Register module as an import and service as a provider
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProjectService],
  bootstrap: [ProjectComponent]
})
export class AppModule { }
