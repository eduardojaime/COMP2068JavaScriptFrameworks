// Similar to app.js in Express
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListItem } from './list-item/list-item';

@NgModule({
  declarations: [
    // Similar to declaring routes in Express
    App,
    ListItem,
  ],
  imports: [
    // Similar to configuring middlewares (app.use()) in Express
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    // Similar to configuring handlers or services in Express
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App], // Similar to app.listen() in Express, also tells angular which component to use as root when app loads
})
export class AppModule {} // Exporting the AppModule class so that it can be imported in main.ts and bootstrapped
