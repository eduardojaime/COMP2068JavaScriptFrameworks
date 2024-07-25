import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
// Import HTTPClientModule to make HTTP requests
import { HttpClientModule } from '@angular/common/http';
// Import Service to make it available via DI
import { ProjectsService } from './services/projects.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Add HttpClientModule to imports to make it available via DI
  ],
  providers: [ProjectsService], // services that provide data to components
  bootstrap: [ProjectsComponent] // Starting component
})
export class AppModule { }
