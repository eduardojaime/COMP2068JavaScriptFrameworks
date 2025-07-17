import { Component } from '@angular/core';
import { ProjectsService } from '../services/projects';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  constructor(private projectsSvc: ProjectsService) {}
  // property to store project list
  projects: any;
  // method to get projects from the service
  getProjects() {
    this.projectsSvc.getProjects().subscribe((data) => {
      // response data was received, assign to projects property
      this.projects = data;
    });
  }
  // life cycle hook to call getProjects when component is initialized
  ngOnInit(): void {
    this.getProjects();
  }
}
