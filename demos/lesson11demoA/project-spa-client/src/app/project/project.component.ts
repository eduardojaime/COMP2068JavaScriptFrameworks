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
  // create variables to hold project info captured in the UI
  name!: string;
  dueDate!: string;
  course!: string;

  // create a method that calls the service and returns the response
  getProjects():void {
    // call projectservice.getprojects()
    this.projectService.getProjects().subscribe(response => {
      this.projects = response;
    });
  }

  // Add method to make a POST request and create a new project
  addProject(): void {
    // Prepare data > create JSON object to be created in the server
    let newProject = {
      name: this.name,
      dueDate: this.dueDate,
      course: this.course
    }
    // Call service method
    this.projectService.addProject(newProject).subscribe(response => {
      // reload list of projects
      this.getProjects();
    });
    // Clean-up
    this.clearForm();
  }

  deleteProject(_id: any): void {
    // need confirmation
    if (confirm('Are you sure??')) {
      this.projectService.deleteProject(_id).subscribe(response => {
        this.getProjects();
      });
    }
  }

  clearForm():void {
    this.name = '';
    this.dueDate = '';
    this.course = '';
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
