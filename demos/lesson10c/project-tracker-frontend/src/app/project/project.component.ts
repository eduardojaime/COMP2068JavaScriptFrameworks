import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  // Define a property to store the list of projects
  projects: any = [];

  // Use DI to request an instance of ProjectService object from the app
  constructor(
    private projectService: ProjectService
  ) { }

  // Method to get project list from the service
  getProjects() {
    // use subscribe since this is an async operation, we want to wait for the response
    this.projectService.getProjects().subscribe(
      (data) => { // callback function to handle the response
        this.projects = data;
      }
    );
  }

  // Angular lifecycle hook to call getProjects() method when the component is initialized
  ngOnInit() {
    this.getProjects();
  }
}
