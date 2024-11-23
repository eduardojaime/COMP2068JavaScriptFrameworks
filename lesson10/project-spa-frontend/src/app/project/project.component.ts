import { Component } from '@angular/core';
// Import for dependency injection
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  projects: any; // variable to store the projects data for the UI

  // Dependency Injection via Constructor Method
  // This is the service declared in the providers list in the app.module.ts file
  constructor(private projectService: ProjectService) {}

  // Lifecycle hook to call the service when the component is initialized
  ngOnInit(): void {
    this.getProjects();
  }

  // Method to call the service
  getProjects(): void {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}
