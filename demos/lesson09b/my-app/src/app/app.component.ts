// This is the main component class
import { Component } from '@angular/core';
// Component is configured with a selector, template, and styles
@Component({
  selector: 'app-root', // The selector is the name of the HTML tag where the component will be rendered
  templateUrl: './app.component.html', // HTML template for the component
  standalone: false,
  styleUrl: './app.component.css' // CSS styles for the component
})
// This is an OOP class with data and behaviour
export class AppComponent {
  title = 'my-app';
}
