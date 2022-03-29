import { Component, OnInit } from '@angular/core';
// import project service class
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  // field to store list of projects
  projects: any; // similar to var projects = [];

  // Dependency Injection
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    // directly call the service here
    this.getProjects();
  }
  
  getProjects() : void {
    // subscribe patter for two way data binding
    this.projectService.getProjects().subscribe(response => {
      this.projects = response;
    });
  }
}