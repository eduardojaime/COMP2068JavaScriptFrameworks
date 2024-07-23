import { Component } from '@angular/core';
// Use DI to inject the ProjectsService into the component
// ../ refers to /src  (the parent of /projects)
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Variables
  projects: any; // hold the projects data once I retrieve it from the service
  // fields to store the form data
  // use two-way data binding to bind the form fields to these variables
  _id!: string;
  name!: string;
  course!: string;
  dueDate!: string; 
  // Inject the ProjectsService into the component
  constructor(private projectsService: ProjectsService) { }
  // Method to clear the form fields
  clearFormFields() : void { 
    this._id = ''; // needed for update operations
    this.name = '';
    this.course = '';
    this.dueDate = '';  
  }
  // create a method to get all projects calling the services
  getProjects() : void {
    // observer pattern > allows you to make a request and wait for the response
    // subscribe() is similar to .then() in promises
    // you can pass a callback function to subscribe() that will be called 
    // when the response is received
    this.projectsService.getProjects().subscribe((data) => {
       this.projects = data;
    });
  }
  // Method to create a new project
  addProject() : void {
    // create a new project object with the information from the form fields
    // these can be accessed by ID using the 'this' object
    let newProject = {
      name: this.name,
      course: this.course,
      dueDate: this.dueDate
    };
    // call the service
    this.projectsService.addProject(newProject).subscribe((data) => {
      this.getProjects(); // refresh the list of projects
    });
    // clear form
    this.clearFormFields();
  }
  // Call the getProjects() method when the component is initialized
  // ngOnInit fires when the component loads
  ngOnInit() : void {
    this.getProjects();
  }
}
