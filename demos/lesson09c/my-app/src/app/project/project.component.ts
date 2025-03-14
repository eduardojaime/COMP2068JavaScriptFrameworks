import { Component } from '@angular/core';

// Simulate accessing data source
// Define data
export class Project {
  id!: number; // ! means it's nullable
  name!: string;
  course!: string;
}
// Mock a list of projects
const PROJECTS: Project[] = [
  { id: 1, name: 'LAB 1', course: 'COMP2068' },
  { id: 2, name: 'LAB 2', course: 'COMP2068' },
  { id: 3, name: 'LAB 3', course: 'COMP2068' },
  { id: 4, name: 'LAB 4', course: 'COMP2068' },
  { id: 5, name: 'LAB 5', course: 'COMP2068' }
];

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  // [] means list or array of 
  projects: Project[] = PROJECTS; // mock retrieving data from API/DB call
}
