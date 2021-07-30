import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';

// import HttClientModule and Project Service class
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './services/project.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProjectService],
  bootstrap: [ProjectComponent]
})
export class AppModule { }
