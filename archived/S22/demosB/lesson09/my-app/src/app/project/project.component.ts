// similar to projects.js
import { Component, OnInit } from '@angular/core';

// mock my model
export class Project {
  id!: number; // propertyname!: datatype;
  name!: string;
  course!: string;
}
// in-memory list of projects > simulates going to the db and retrieving a list of projects
const PROJECTS: Project[] = [
  { id: 1, name: 'Lab 1', course: 'JS Frameworks' },
  { id: 2, name: 'Lab 2', course: 'JS Frameworks' },
  { id: 3, name: 'Lab 3', course: 'JS Frameworks' }
]

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  title = 'Project Tracker';
  // hardcoded data > simulates going to the db and retrieving a single record
  // project: Project = { id: 1, name: 'Lab 1', course: 'JS Frameworks' }
  projects = PROJECTS;
  // property to handle selection and 2-way data binding
  // property declaration
  // selectedProject (which can be null) of type Project
  selectedProject!: Project;

  constructor() { }

  ngOnInit(): void {
  }

  // for click event handler, takes a project as parameter
  // returns void
  onSelect(project: Project) : void {
    this.selectedProject = project;
  }
}
