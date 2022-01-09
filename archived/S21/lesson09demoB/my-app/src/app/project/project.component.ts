import { Component, OnInit } from '@angular/core';

// create an in-memory model class of a project
// to mock up some data
export class Project {
  id!: number;
  name!: string;
  course!: string;
}

/// [] means list
// create constant called PROJECTS as list of project
// constant all caps
const PROJECTS: Project[] = [
  { id: 1, name: 'Lab 1', course: 'JS' },
  { id: 2, name: 'Lab 2', course: 'JS' },
  { id: 3, name: 'Lab 3', course: 'JS' },
  { id: 4, name: 'Tutorials', course: 'JS' }
];

@Component({
  selector: 'app-project', // <app-project>
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {

  // add fields to the class
  // project: Project = { id: 1, name: 'Lab 3', course: 'JS' };
  projects = PROJECTS;
  // create field to store selected project object
  // selectedProject: Project = { id: 0, name: '', course: '' };
  selectedProject!: Project;
  
  constructor() { }
  // component class can have methods 
  ngOnInit(): void {

  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }

}
