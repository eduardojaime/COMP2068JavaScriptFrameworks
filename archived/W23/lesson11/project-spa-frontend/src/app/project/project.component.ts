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
  // variable to temporarily hold project id for editing
  _id!: string;
  // variables to temporarily hold project values
  name!: string;
  dueDate!: string;
  course!: string;
  
  // create a method that calls the service
  getProjects():void {
    // subscribe implements observer pattern that allows us to make callbacks
    // and wait to response
    this.projectService.getProjects().subscribe(response => {
      // response comes in JSON format
      this.projects = response;
    });
  }

  addProject(): void {
    // create a new project object from the form fields
    let newProject = {
      name: this.name,
      dueDate: this.dueDate,
      course: this.course
    }
    // call the service and pass the new project
    // addProject needs to be created in the service
    this.projectService.addProject(newProject).subscribe(response => {
      this.getProjects();
    });
    // What should happen in the UI when we finish adding a new project?
    this.clearForm();
  }

  deleteProject(_id: any): void {
    if (confirm('Are you sure?')) {
      this.projectService.deleteProject(_id).subscribe(response => {
        this.getProjects();
      });
    }
  }

  selectProject(project: any) {
    this._id = project._id;
    this.name = project.name;
    this.dueDate = project.dueDate;
    this.course = project.course;
  }

  updateProject() {
    // create a selected project object from the form fields
    // make sure to include id
    let selectedProject = {
      _id: this._id,
      name: this.name,
      dueDate: this.dueDate,
      course: this.course
    }

    this.projectService.updateProject(selectedProject).subscribe(response => {
      this.getProjects();
    });

    // What should happen in the UI when we finish updating a new project?
    this.clearForm();
  }

  clearForm(): void {
    this._id = '';
    this.name = '';
    this.dueDate = '';
    this.course = '';
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
