import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Projects } from './projects/projects';

@NgModule({
  declarations: [ // list of components, directives, and pipes
    App,
    Projects
  ],
  imports: [ // list of modules that this module depends on
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ // list of services that this module provides
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App] // root component to be rendered on app start
})
export class AppModule { }
