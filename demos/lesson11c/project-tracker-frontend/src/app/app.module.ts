import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
// Import HttpClientModule (for API calls) and ProjectService (to access API data)
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './services/project.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [ // list of modules available for my app to use
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProjectService], // services and data providers for my app to use
  bootstrap: [ProjectComponent]
})
export class AppModule { }
