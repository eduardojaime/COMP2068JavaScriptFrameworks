// similar to app.js, use this file to load modules, services, and components for your app
import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Projects } from './projects/projects';

@NgModule({
  declarations: [ // list of components in this app
    App,
    Projects
  ],
  imports: [ // list of modules imported into this app
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ // list of services provided by this app
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App] // root component
})
export class AppModule { }
