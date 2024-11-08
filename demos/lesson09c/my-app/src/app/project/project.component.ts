import { Component } from '@angular/core';

// In a real-world application, this component uses a service to retrieve data
// We'll mock the data for now
export class Project {
  // variablename!: datatype;
  id!: number; // ! indicates it can be null
  name!: string;
  course!: string;
}
// [] is an array of Project objects
const PROJECTS: Project[] = [
  { id: 1, name: 'LAB01', course: 'COMP2068' },
  { id: 2, name: 'LAB02', course: 'COMP2068' },
  { id: 3, name: 'LAB03', course: 'COMP2068' },
  { id: 4, name: 'LAB04', course: 'COMP2068' },
  { id: 5, name: 'LAB05', course: 'COMP2068' },
  { id: 5, name: 'LAB06', course: 'COMP2068' },
];

@Component({
  selector: 'app-project', // this is the name of the html tag that will be used to include this component in other components
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  // data
  // varname: datatype = value;
  projects: Project[] = PROJECTS;
  // behaviour
}
