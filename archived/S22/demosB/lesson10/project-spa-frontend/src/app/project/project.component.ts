import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  // variable to hold my list of projects and use it on the view
  projects: any;

  // private property named projectService of type ProjectService
  constructor(private projectService: ProjectService) { }
  // method that executes when the component is loaded
  ngOnInit(): void {
    // call method to load data
    this.getProjects();
  }

  getProjects(): void {
    // call the getProjects method from service
    // subscribe to it (observer pattern) allows us to make callbacks and wait for responses
    this.projectService.getProjects().subscribe(response => {
      // every time there's a response update the list 
      this.projects = response;
    })
  }
}
