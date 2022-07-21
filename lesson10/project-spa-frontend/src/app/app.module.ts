import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';

// Import service and http client
import { ProjectService } from './services/project.service';
import { HttpClientModule } from '@angular/common/http';

// Add imported modules to the application
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // Provider is something that gets data
  providers: [ProjectService],
  bootstrap: [ProjectComponent]
})
export class AppModule { }
