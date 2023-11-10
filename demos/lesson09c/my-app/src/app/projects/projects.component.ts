import { Component } from '@angular/core';
// Mock in-memory model
export class Project {
  id!: number; // ! means it can be null
  name!: string;
  course!: string;
}

@Component({
  selector: 'app-projects', // <app-projects></app-projects>
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  // Mock in-memory list of projects
  // declare variable named projects of type Array of Project
  projects: Project[] = [
    { id: 101, name: 'LAB01', course: 'JS Frameworks' },
    { id: 102, name: 'LAB02', course: 'JS Frameworks' },
    { id: 103, name: 'LAB03', course: 'JS Frameworks' }
  ];
  // 2-way data binding
  selectedProject!: Project;
  // function to handle click event
  onSelect(project: Project) : void {
    this.selectedProject = project;
  }
}
