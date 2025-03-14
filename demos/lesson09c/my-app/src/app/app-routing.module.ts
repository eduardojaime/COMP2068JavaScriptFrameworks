import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// This is for configuring the routes of my app
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
