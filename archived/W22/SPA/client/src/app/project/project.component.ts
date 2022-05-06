import { Component, OnInit } from '@angular/core';
// import project service
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  // use DI to configure an instance of Project Service
  constructor(private projectService: ProjectService) { }

  // variable to hold list of projects
  projects: any;

  ngOnInit(): void {
    // call everytime component is initialized
    this.getProjects();
  }

  // expose a method that gets projects
  getProjects() : void{
    // subscribe pattern to listen for data
    this.projectService.getProjects().subscribe(response => {
      this.projects = response;
    });
  }
}
