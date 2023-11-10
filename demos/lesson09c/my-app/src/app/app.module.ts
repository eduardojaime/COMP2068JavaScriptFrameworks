import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// similar to app.js in Express
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ], // components that belong to the app
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ], // modules to enable globally
  providers: [], // for accessing data
  bootstrap: [ProjectsComponent] // startup component
})
export class AppModule { }
