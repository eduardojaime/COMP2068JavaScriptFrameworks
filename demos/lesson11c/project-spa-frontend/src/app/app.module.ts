import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
// Import HTTP client module to make HTTP requests
import { HttpClientModule } from '@angular/common/http';
// Import the project service so we can inject it into the component
import { ProjectService } from './services/project.service';
// Import the FormsModule so we can bind input fields with component variables
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ProjectComponent],
  imports: [
    // list of modules that are required by the app
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    // list of services that are required by the app
    ProjectService,
  ],
  bootstrap: [ProjectComponent],
})
export class AppModule {}
