import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';

// import httpclientmodule and project service
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './services/project.service';
// import FormsModule to be able to use 2way data binding
import { FormsModule } from '@angular/forms';

// configure the app to use these two
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  // provider is something that gets data
  providers: [ProjectService],
  bootstrap: [ProjectComponent] // [AppComponent]
})
export class AppModule { }
