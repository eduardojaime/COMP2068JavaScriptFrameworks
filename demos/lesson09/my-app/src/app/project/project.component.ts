import { Component, OnInit } from '@angular/core';
// class to represent a project
export class Project {
  id!:number;
  name!:string;
  course!:string;
}

// mock a list of Project
const PROJECTS: Project[] = [
  {id:101, name:'Lab1', course:'JS Frameworks'},
  {id:102, name:'Lab2', course:'JS Frameworks'},
  {id:103, name:'Lab3', course:'JS Frameworks'}
];


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects = PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}
