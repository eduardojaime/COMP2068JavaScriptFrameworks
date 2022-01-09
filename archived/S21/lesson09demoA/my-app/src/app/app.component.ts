import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // this is the html element associated to the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// similar to res.render()
export class AppComponent {
  title = 'Project Tracker in Angular';
}
