import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
// import service and httpclientmodule
import { ProjectsService } from './services/projects.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [ // Modules to expand my app functionality
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProjectsService], // providers are components that return or manipulate data
  bootstrap: [ProjectsComponent] // projects is the starting point of my app
})
export class AppModule { }
