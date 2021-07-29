import { Component, OnInit } from '@angular/core';
// Import service class
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  // Dependency Injection to make it available to my Component class
  // this is configured in app.module.ts
  constructor(private projectService: ProjectService) { }
  // create variable to hold list of projects to pass to view
  projects: any;

  // create a method that calls the service and returns the response
  getProjects():void {
    // call projectservice.getprojects()
    this.projectService.getProjects().subscribe(response => {
      this.projects = response;
    });
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
