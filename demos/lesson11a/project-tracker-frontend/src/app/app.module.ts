import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from './services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [ // list of modules available for my app to use via DI
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // to bind html input fields with component variables
  ],
  providers: [ProjectService], // list of data providers for my app to use via DI
  bootstrap: [ProjectComponent] // initial component to load when app starts
})
export class AppModule { }
