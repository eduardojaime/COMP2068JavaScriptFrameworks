import { Component } from '@angular/core';

// In-memory data for projects
// Model class
export class Project {
  id!: number; // name: datatype
  name!: string; // ! means nullable type (it can be empty)
  course!: string;
}
// Mock data
const PROJECTS: Project[] = [
  { id: 1, name: 'LAB01', course: 'COMP2068' },
  { id: 2, name: 'LAB02', course: 'COMP2068' },
  { id: 3, name: 'LAB03', course: 'COMP2068' },
  { id: 4, name: 'LAB04', course: 'COMP2068' },
  { id: 5, name: 'LAB05', course: 'COMP2068' }
];
// -----

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  // Define a property to hold the list of projects
  // Simulates calling a service to get data
  projects: Project[] = PROJECTS;
}
