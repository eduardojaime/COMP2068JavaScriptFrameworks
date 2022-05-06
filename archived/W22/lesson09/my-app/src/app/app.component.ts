import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // becomes <app-root> html element
  templateUrl: './app.component.html', // contains UI code
  styleUrls: ['./app.component.css']
})
// class with properties that represents my App component
export class AppComponent {
  title = 'Project Tracker';
}
