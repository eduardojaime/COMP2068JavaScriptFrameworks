import { Component } from '@angular/core';
// mock data definition
export class Project {
  id!: number;
  name!: string;
  course!: string;
}
// create a mock list of projects
const PROJECTS: Project[] = [
  {id:101, name: "Lab01", course: "JS Frameworks"},
  {id:102, name: "Lab02", course: "JS Frameworks"},
  {id:103, name: "Lab03", course: "JS Frameworks"},
];

@Component({
  selector: 'app-projects', // <app-projects></app-projects>
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // any data coming from the component must be contained in a variable
  projects = PROJECTS; // associate mock data to component variable
}
