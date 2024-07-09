// Similar to a router object in Express
// but in typescript we declare this as a class
import { Component } from '@angular/core';
// Configuring the component: tag, template, and style
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Exporting the class AppComponent
export class AppComponent {
  // Similar to other OOP languages, you can have data and behaviour
  title = 'my-app';
}
