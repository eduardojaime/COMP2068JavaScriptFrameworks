import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects', // html element <app-projects></app-projects>
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  // data attributes
  projects: any = []; // attribute that will hold the list of projects to view in the UI
  // Use DI via constructor to access an instance of ProjectService
  constructor(private service: ProjectService) {}
  ngOnInit(): void {
    this.getProjects();
  }
  // Define a method to retrieve a list of Projects in JSON format
  getProjects(): void {
    this.service.getProjects().subscribe(response => {
      this.projects = response;
    });
  }
}
