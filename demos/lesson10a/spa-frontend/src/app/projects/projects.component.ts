import { Component } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects', // <app-projects></app-projects>
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // add constructor and configure DI
  constructor(private projectsService: ProjectsService) { }
  // variable to hold the project list and pass it to the view
  projects: any;
  // methods for calling the service and handle CRUD
  // Retrieve Projects
  getProjects() : void {
    this.projectsService.getProjects().subscribe(response => {
      // response is a list of projects in JSON format
      this.projects = response;
    })
  }
  // ngOnInit is an angular method that is triggered automatically
  // when a component is loaded
  ngOnInit(): void {
    this.getProjects();
  }
}
