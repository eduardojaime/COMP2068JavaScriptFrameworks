// similar to a router object
import { Component } from '@angular/core';

// ideally you would connect to a server to retrieve data JSON
export class Project {
  id!: number; // add ! to skipping null check
  name!: string;
  course!: string;
}
// create mock list of project
const PROJECTS: Project[] = [
  {id: 101, name: 'Lab 1', course: 'JS Frameworks'},
  {id: 102, name: 'Lab 2', course: 'JS Frameworks'},
  {id: 103, name: 'Lab 3', course: 'JS Frameworks'},
  {id: 104, name: 'Group Tutorials', course: 'JS Frameworks'}
];

// configuration section
@Component({
  selector: 'app-project', // html element name
  templateUrl: './project.component.html', // view
  styleUrls: ['./project.component.css'] // styles
})
export class ProjectComponent {
  // add functionality and data here
  projects = PROJECTS; // attribute of my component
} 
