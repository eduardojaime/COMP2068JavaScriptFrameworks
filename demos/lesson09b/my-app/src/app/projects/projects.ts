import { Component } from '@angular/core';

// In-memory data for projects
// Define a model class
export class Project {
  // property: datatype;
  id!: number; // ! means this is a nullable property
  name!: string;
  course!: string;
}

// Mock a projects list
const PROJECTS: Project[] = [
  { id: 1, name: 'LAB01', course: 'COMP2068' },
  { id: 2, name: 'LAB02', course: 'COMP2068' },
  { id: 3, name: 'LAB03', course: 'COMP2068' }
]
// ----

@Component({
  selector: 'app-projects', // <app-projects></app-projects>
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  // Simulates calling a service to get data
  projects: Project[] = PROJECTS;
}
