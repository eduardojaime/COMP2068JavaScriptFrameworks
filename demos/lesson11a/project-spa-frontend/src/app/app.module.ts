import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
// Import and configure services to use globally
import { HttpClientModule } from '@angular/common/http';
// ./ refers to /src/app  (the current directory)
import { ProjectsService } from './services/projects.service';
// Import FormsModule to use ngModel directive for two-way data binding
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Add HttpClientModule to the imports array (for DI)
    FormsModule // Add FormsModule to the imports array (for two-way data binding)
  ],
  providers: [ProjectsService], // Add ProjectsService to the providers array (it provides data)
  bootstrap: [ProjectsComponent] // make projects the starting component
})
export class AppModule { }
