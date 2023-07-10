import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // html tag <app-root></app-root>
  templateUrl: './app.component.html', // UI
  styleUrls: ['./app.component.css'] // Styling
})
// similar to router objects but these are classes
// more similar to C# Controllers
export class AppComponent {
  // properties
  title = 'Project Tracker';
  // constructor methods
  // functions
}
