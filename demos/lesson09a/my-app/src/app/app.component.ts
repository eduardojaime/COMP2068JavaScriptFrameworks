// Component class
// Defines logic and data for the component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // used for rendering the component in HTML
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
