import { Component } from '@angular/core';

// In-memory model of a project
export class Project {
  // fieldname: type;
  id!: number; // ! indicates it can be null
  name!: string;
  course!: string;
}
// Mock a list of projects
// This would come from a server in a real app
const PROJECTS: Project[] = [
  { id: 1, name: 'LAB01', course: 'COMP2068' },
  { id: 2, name: 'LAB02', course: 'COMP2068' },
  { id: 3, name: 'LAB03', course: 'COMP2068' },
  { id: 4, name: 'LAB04', course: 'COMP2068' },
  { id: 5, name: 'LAB05', course: 'COMP2068' }
]

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  // Define a property to hold the list of projects
  projects = PROJECTS; // simulating getting data from a service
}
