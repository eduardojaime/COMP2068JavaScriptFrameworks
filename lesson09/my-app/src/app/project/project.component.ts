import { Component, OnInit } from '@angular/core';

// Create an in-memory model class of a project to mock up some data
export class Project {
  id!: number;
  name!: string;
  course!: string;
}

// Create a mock list of projects
const PROJECTS: Project[] = [
  {id: 101, name: 'Labl 1', course: 'JS Frameworks'},
  {id: 102, name: 'Labl 2', course: 'JS Frameworks'},
  {id: 103, name: 'Labl 3', course: 'JS Frameworks'},
  {id: 104, name: 'Tutorials', course: 'JS Frameworks'},
];

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  // // create an in-memory project for display
  // project: Project = {
  //   id: 1,
  //   name: 'Lab 3',
  //   course: 'JS Frameworks'    
  // }

  projects = PROJECTS;
  
  // 2-way data binding property to store selectedProject
  selectedProject!: Project;
  // write a method to handle onclick
  onSelect(project: Project) : void
  {
    this.selectedProject = project;
  }

  // Used for injecting any dependency
  constructor() { }
  // Runs as soon as the page load
  ngOnInit(): void {
  }

}
