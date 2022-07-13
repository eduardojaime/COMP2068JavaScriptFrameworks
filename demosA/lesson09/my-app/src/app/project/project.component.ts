import { Component, OnInit } from '@angular/core';

// create an in-memory model class representing a Project
// this will help us mock data
export class Project {
  id!: number;
  name!: string;
  course!: string;
}
// mock a collection of projects
// this would actually come from mongodb in a real project
const PROJECTS: Project[] = [
  { id: 1, name: 'Lab1', course: 'JS Frameworks' },
  { id: 2, name: 'Lab2', course: 'JS Frameworks' },
  { id: 3, name: 'Lab3', course: 'JS Frameworks' },
  { id: 4, name: 'Tutorials', course: 'JS Frameworks' }
];

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  // Mocking data
  // get an individual project from the db
  // project: Project = {
  //   id: 1,
  //   name: 'Lab1',
  //   course: 'JS Frameworks'
  // }

  // or a list of projects from the db
  // list declared as a constant above
  projects = PROJECTS;

  // property to keep track of my selected project
  selectedProject!: Project;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(project: Project) : void {
    // assign the project coming from the ui to the selectedProject property
    this.selectedProject = project;
  }

}
