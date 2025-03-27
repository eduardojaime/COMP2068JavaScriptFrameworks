import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  // Define a property to store the list of projects
  projects: any = [];
  // Define variables to store values from the form input fields
  _id!: string;
  name!: string;
  dueDate!: string;
  course!: string;

  // Use DI to request an instance of ProjectService object from the app
  constructor(
    private projectService: ProjectService
  ) { }

  // Method to get project list from the service
  getProjects() {
    // use subscribe since this is an async operation, we want to wait for the response
    this.projectService.getProjects().subscribe(
      (data) => { // callback function to handle the response
        this.projects = data;
      }
    );
  }

  // Method to add a new project by calling the service class
  addProject() {
    // create a new project object with the values from the form
    const newProject = {
      name: this.name, // get the value from the name input field
      dueDate: this.dueDate,
      course: this.course
    }
    // Call service method to add the project and subscribe to response
    this.projectService.addProject(newProject).subscribe(
      (data) => {
        // refresh the project list to show the new project
        this.getProjects();
        // clear the form
        this.clearForm();
      }
    );
  }

  // Angular lifecycle hook to call getProjects() method when the component is initialized
  ngOnInit() {
    this.getProjects();
  }

  // Method to clear the form
  clearForm() {
    // reset all values to empty string, this will refresh the form
    this._id = '';
    this.name = '';
    this.dueDate = '';
    this.course = '';
  }
}
