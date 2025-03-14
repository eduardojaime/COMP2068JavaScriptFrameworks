import { Component } from '@angular/core';
// Component Class for AppComponent
@Component({
  selector: 'app-root', // HTML Tag for AppComponent
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
