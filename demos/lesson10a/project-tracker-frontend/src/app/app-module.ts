import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Projects } from './projects/projects';
// HttpModule is used for making HTTP requests
import { HttpClientModule } from '@angular/common/http';
// Register services in the root injector
import { ProjectsService } from './services/projects';

@NgModule({
  declarations: [
    App,
    Projects
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    ProjectsService
  ],
  bootstrap: [App]
})
export class AppModule { }
