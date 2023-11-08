import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// similar to app.js in Express
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ], // components that belong to the app
  imports: [
    BrowserModule,
    AppRoutingModule
  ], // modules that the application uses
  providers: [], // data or service provides
  bootstrap: [ProjectsComponent] // initial component
})
export class AppModule { }
