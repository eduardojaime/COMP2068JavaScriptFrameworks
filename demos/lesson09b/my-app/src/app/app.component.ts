import { Component } from '@angular/core';
// similar to a router file in Express
@Component({
  selector: 'app-root', // element that is utilized for rendering the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
