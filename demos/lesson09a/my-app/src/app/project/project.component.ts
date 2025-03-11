import { Component } from '@angular/core';

// Define and export a Project class (this is your mongoose model in the backend)
// use ! to indicate that these properties are nullable
export class Project {
  id!: number;
  name!: string;
  course!: string;
}

// Create a mock list of projects
const PROJECTS: Project[] = [
  { id: 1, name: 'LAB 1', course: 'COMP2068' },
  { id: 2, name: 'LAB 2', course: 'COMP2068' },
  { id: 3, name: 'LAB 3', course: 'COMP2068' },
  { id: 4, name: 'ASSIGNMENT 1', course: 'COMP2068' },
];

@Component({
  selector: 'app-project', // Use in html to render this component
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  // DATA
  projects: Project[] = PROJECTS; // simulates calling a service to get the data
  // BEHAVIOUR
  // TODO add methods to add, update, delete projects
}
