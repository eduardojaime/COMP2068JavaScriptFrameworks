import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  // Define a property to hold the projects so we can display them in the template
  projects: any;
  // Define a constructor method to use DI and get an instance of ProjectService
  constructor(private projectService: ProjectService) {}
  // Define a method to get all projects from the service
  getProjects() {
    // Call the getProjects method from the ProjectService
    // Since this is an asynchronous operation, we use the subscribe method to keep track of the response
    // Once the API call returns a response, we trigger the callback function and assign the data to the projects property
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
  // Load data when the component is initialized (life cycle hook)
  ngOnInit() {
    this.getProjects();
  }
}
