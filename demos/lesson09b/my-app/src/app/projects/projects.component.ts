import { Component } from '@angular/core';

// Mock Project Object
export class Project {
  // property: type;
  id!: number;
  name!: string;
  course!: string;
}

const PROJECTS: Project[] = [
  { id: 1, name: 'Lab 1', course: 'JS Frameworks' },
  { id: 2, name: 'Lab 2', course: 'JS Frameworks' },
  { id: 3, name: 'Lab 3', course: 'JS Frameworks' }
]

@Component({
  selector: 'app-projects', // html element <app-projects></app-projects>
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  // define properties
  // ideally this would be a call to the service to return data
  // project: Project = { id: 1, name: 'Lab 1', course: 'JS Frameworks' };
  projects = PROJECTS; // this would be a call to a function that calls the Back End
  selectedProject!: Project;
  // define methods
  onSelect(project: Project) : void {
    this.selectedProject = project;
  }
}
