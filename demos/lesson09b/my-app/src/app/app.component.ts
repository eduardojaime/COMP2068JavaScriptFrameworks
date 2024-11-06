// Similar to a router object in Express
// It contains business logic for this component, it represents a section in my application
import { Component } from '@angular/core';
// Component decorator to configure the component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// Class Declaration
export class AppComponent {
  // Data
  title = 'My First Angular App';
  // Behaviour
  // Methods for your business logic
}
