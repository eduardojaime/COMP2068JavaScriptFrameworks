import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root', // <app-root>
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My Angular App');
  // Add function to show an alert
  protected showAlert() {
    alert("Hello Everyone!");
  }
}
