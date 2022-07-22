// equivalent to app.js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
// import service and httpclientmodule
import { ProjectService } from './services/project.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [ // any modules that the app uses for enhanced functionality
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // allows you to make HTTP requests
  ],
  providers: [ProjectService], // register all services here
  bootstrap: [ProjectComponent]
})
export class AppModule { }
