import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import service and HttpClientModule
import { ProjectService } from './services/project.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { provideRoutes } from '@angular/router';

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
