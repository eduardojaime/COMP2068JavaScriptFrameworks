import { Component } from '@angular/core';

// Mock data
// use ! to tell TypeScript that the property will be defined at runtime
export class Project {
  id!: number;
  name!: string;
  course!: string;
}
// simulate retrieving a list from a DB
const PROJECTS : Project[] = [
  { id: 1, name: 'Lab 1', course: 'JS Frameworks' },
  { id: 2, name: 'Lab 2', course: 'JS Frameworks' },
  { id: 3, name: 'Lab 3', course: 'JS Frameworks' }  
]

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Property to define list to load on page
  projects = PROJECTS;
  // Property to define selected project
  selectedProject!: Project;

  // Function to handle click event
  onSelect(project: Project) : void {
    this.selectedProject = project;
  }
}
