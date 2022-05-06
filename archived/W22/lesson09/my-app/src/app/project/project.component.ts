import { Component, OnInit } from '@angular/core';

// mock data from MongoDB
export class Project {
  id!: number;
  name!: string;
  course!: string;
}

// create a mock list of Projects
const PROJECTS : Project[] = [
  { id:1, name: 'Lab 1', course: 'JS Frameworks' },
  { id:2, name: 'Lab 2', course: 'JS Frameworks' },
  { id:3, name: 'Lab 3', course: 'JS Frameworks' },
  { id:4, name: 'Project Portfolio', course: 'JS Frameworks' }
];

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  // field/property visible to the UI
  // project: Project = {
  //   id:1,
  //   name: 'Lab 3',
  //   course: 'JS Frameworks'
  // }
  // property that contains the list, visible to the UI
  projects = PROJECTS;

  // property that holds the selected project
  selectedProject!: Project;

  // custom method to handle clicking on a card
  onSelect(project: Project) : void {
    this.selectedProject = project;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
