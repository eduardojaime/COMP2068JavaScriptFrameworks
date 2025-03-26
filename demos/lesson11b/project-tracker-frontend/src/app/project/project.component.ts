import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  // Define a property to hold the projects so we can display them in the template
  projects: any;
  // Define properties to hold the form data with 2-way data binding
  _id!: string;
  name!: string;
  dueDate!: string;
  course!: string;
  // Define a constructor method to use DI and get an instance of ProjectService
  constructor(private projectService: ProjectService) {}
  // Define a method to get all projects from the service
  getProjects() {
    // Call the getProjects method from the ProjectService
    // Since this is an asynchronous operation, we use the subscribe method to keep track of the response
    // Once the API call returns a response, we trigger the callback function and assign the data to the projects property
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

  // Define a method to add a new project
  addProject() {
    // create json object to send with the form data
    let newProject = {
      name: this.name,
      dueDate: this.dueDate,
      course: this.course,
    };
    // call the service method, and subscribe to the response
    this.projectService.addProject(newProject).subscribe(
      // callback function to handle the response
      (data) => {
        this.getProjects(); // refresh the list
        this.clearForm(); // clear the form data
      }
    );
  }
  // Load data when the component is initialized (life cycle hook)
  ngOnInit() {
    this.getProjects();
  }

  // Method to clear the form data
  clearForm() {
    this._id = '';
    this.name = '';
    this.dueDate = '';
    this.course = '';
  }
}
