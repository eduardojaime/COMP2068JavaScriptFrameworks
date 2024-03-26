import { Component } from '@angular/core';
// Import ProjectsService to call the REST backend API
import { ProjectsService } from '../services/projects.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Variable to hold list of Projects to pass to my view
  projects: any = [];
  // Constructor to inject the ProjectsService via DI
  constructor(private projectsService: ProjectsService) { }
  // Create a method that calls the service to get the list of Projects
  getProjects() {
    // response will be a JSON list of Projects
    // use subscribe() to wait for the response to come back
    this.projectsService.getProjects().subscribe(response => { this.projects = response;})
  }
  // Call the getProjects() method when the component is initialized
  ngOnInit() {
    this.getProjects();
  }
}
