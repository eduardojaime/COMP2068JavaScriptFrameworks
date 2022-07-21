import { Component, OnInit } from '@angular/core';
// Import ProjectService
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  // Inject an instance of ProjectService when the object is created
  // This was configured as a provided in app.js
  constructor(private projectService: ProjectService) { }

  // variable to hold the list of projects to pass to the view
  projects: any;
  
  // create a method that calls the service
  getProjects():void {
    // subscribe implements observer pattern that allows us to make callbacks
    // and wait to response
    this.projectService.getProjects().subscribe(response => {
      // response comes in JSON format
      this.projects = response;
    });
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
