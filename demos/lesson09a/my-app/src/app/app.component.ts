import { Component } from '@angular/core';
// similar to our router object in Express
// We'll build the component logic here
@Component({
  selector: 'app-root', // element corresponding to this component <app-root></app-root>
  templateUrl: './app.component.html', // view
  styleUrls: ['./app.component.css'] // styles
})
export class AppComponent {
  title = 'my-app';
}
