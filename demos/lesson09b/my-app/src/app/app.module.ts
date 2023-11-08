import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// similar to app.js in Express
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
// import Forms Module to enable 2 way data binding
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ], // components that belong to the app
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Adds forms module to my app
  ], // modules that the application uses
  providers: [], // data or service provides
  bootstrap: [ProjectsComponent] // initial component
})
export class AppModule { }
