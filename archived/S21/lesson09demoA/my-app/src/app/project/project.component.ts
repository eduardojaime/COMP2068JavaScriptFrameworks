import { Component, OnInit } from '@angular/core';

// create in-memory model class of a project to mock up some data
export class Project {
  id!: number;
  name!: string;
  course!: string;
}
// [] means list
// create constant named PROJECTS of type list of Project
const PROJECTS: Project[] = [
  { id: 1, name: 'Lab 1', course: 'JS' },
  { id: 2, name: 'Lab 2', course: 'JS' },
  { id: 3, name: 'Lab 3', course: 'JS' },
  { id: 4, name: 'Assignment 2', course: 'JS' }
];

@Component({
  selector: 'app-project', // <app-project></app-project>
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  title = 'Manage Projects';
  // create a field of type project and assign values
  // to its properties
  // project: Project = { id:1, name: 'Lab 3', course: 'JS'};

  // pass list to the view 
  projects = PROJECTS;

  // create field to handle project selection
  selectedProject!: Project;

  constructor() { }

  ngOnInit(): void {
    // whatever code you want to execute when page loads goes here
  }
  // create method that receives a project and returns void
  onSelect(project: Project): void {
    // assign user selection to selectedProject field
    this.selectedProject = project;
  }

}
