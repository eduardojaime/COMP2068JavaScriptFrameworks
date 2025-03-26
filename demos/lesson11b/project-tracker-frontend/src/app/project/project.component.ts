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

  // Method to select a project to update
  selectProject(project: any) {
    // assign the project data to the form properties
    // so the form is populated with the selected project data
    this._id = project._id;
    this.name = project.name;
    this.dueDate = project.dueDate;
    this.course = project.course;
  }

  // Method to save updated project data
  updateProject() {
    let updatedProject = {
      _id: this._id, // this must be included for the backend api to find the project that will be updated
      name: this.name,
      dueDate: this.dueDate,
      course: this.course,
    };
    this.projectService.updateProject(updatedProject).subscribe(
      (data) => {
        this.getProjects(); // refresh the list
        this.clearForm(); // clear the form data
      }
    );
  }

  // Method to delete a project
  deleteProject(_id: string) {
    if (confirm('Are you sure you want to delete this project?')) {
      // if user clicks OK this block is executed
      this.projectService.deleteProject(_id).subscribe(
        (data) => {
          this.getProjects(); // refresh the list
          this.clearForm(); // clear the form data
        }
      );
    }
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
