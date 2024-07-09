import { Component } from '@angular/core';
// Mock data model
export class Project {
  id!: number;
  name!: string;
  course!: string;
}
// Mock list of projects
const PROJECTS: Project[] = [
  { id: 1, name: 'LAB01', course: 'JS FRAMEWORKS' },
  { id: 2, name: 'LAB02', course: 'JS FRAMEWORKS' },
  { id: 3, name: 'LAB03', course: 'JS FRAMEWORKS' },
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  // Define a property to hold the list of projects to make data accessible from the template
  projects = PROJECTS;
  // Define property to hold selected project (! means nullable)
  selectedProject!: Project;
  // function that takes a project as an argument and returns nothing
  onSelect(project: Project) {
    this.selectedProject = project;
  }
}
