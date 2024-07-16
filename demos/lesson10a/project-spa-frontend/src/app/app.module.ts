import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
// Import and configure services to use globally
import { HttpClientModule } from '@angular/common/http';
// ./ refers to /src/app  (the current directory)
import { ProjectsService } from './services/projects.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Add HttpClientModule to the imports array (for DI)
  ],
  providers: [ProjectsService], // Add ProjectsService to the providers array (it provides data)
  bootstrap: [ProjectsComponent] // make projects the starting component
})
export class AppModule { }
