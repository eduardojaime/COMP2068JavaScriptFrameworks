import { Component } from '@angular/core';
// Import the ProjectService
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  // Declare a variable to hold projects list
  projects: any; // any is a type in TypeScript that can be anything
  // Add a constructor to handle DI of the ProjectService
  constructor(
    private projectService: ProjectService
  ) { }

  // Add a method to get all projects from the API and store in a variable to use in the View (HTML)
  getProjects() {
    // Call the getProjects method from the ProjectService
    // use subscribe to send the call and keep listening for the data to response (async operation)
    this.projectService.getProjects().subscribe(
      // callback function so the program knows what to do with the data once it's received
      (data) => {
        // Store the data in the projects variable
        this.projects = data;
      }
    );
  }
  // Load projects when component loads using Angular lifecycle hook (on initialization)
  ngOnInit() {
    this.getProjects();
  }
}
