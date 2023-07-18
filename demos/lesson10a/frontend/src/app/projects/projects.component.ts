import { Component, OnInit } from '@angular/core';
// Import Project Service to retrieve data in JSON format
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects', // html selector <app-projects></app-projects>
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  // Attributes
  projects: any; // dynamic object
  // Constructor
  // Use DI to inject an instance of the project service
  constructor(private projectService: ProjectService) {}
  // Methods
  getProjects(): void {
    // call service
    this.projectService.getProjects().subscribe((response) => {
      // update projects attribute value
      this.projects = response;
    });
  }
  ngOnInit(): void {
    this.getProjects(); // refresh my project list every time component loads
  }
}
