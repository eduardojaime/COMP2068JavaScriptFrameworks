import { Component } from '@angular/core';
// Typescript allows you to define classes
export class Project {
  id!: number; // ! means that the property is defined but not initialized (it can be null)
  name!: string;
  course!: string;
}
// Mock data > list of projects
const PROJECTS: Project[] = [
  { id: 1, name:  'Lab01', course: 'JS Frameworks' },
  { id: 2, name:  'Lab02', course: 'JS Frameworks' },
  { id: 3, name:  'Lab03', course: 'JS Frameworks' },
  { id: 4, name:  'Lab04', course: 'JS Frameworks' },
  { id: 5, name:  'Lab05', course: 'JS Frameworks' },
];

@Component({
  selector: 'app-projects', // becomes <app-projects></app-projects>
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // variable that holds project list and can be accessed from the HTML template
  projects = PROJECTS;
}
