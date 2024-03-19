// Similar to Router Objects in Express
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // becomes <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Data Attributes
  title = 'Project Tracker';
  // Behaviour (functions)
}
