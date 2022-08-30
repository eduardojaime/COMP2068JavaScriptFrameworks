// similar to express router object
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// similar to module.exports
export class AppComponent {
  pageTitle = 'Welcome to my first Angular App!';
  title = 'Project Tracker in Angular';
  mainImageUrl = '/imgs/logo.png';

}
