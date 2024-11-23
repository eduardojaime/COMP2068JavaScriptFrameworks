import { Component } from '@angular/core';
// Import for dependency injection
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  projects: any; // variable to store the projects data for the UI
  // Variables to hold the project data for the form temporarily while I save or update
  // Input will fields map to these variables via Forms Module
  _id!: string; // empty when creating, has value when updating
  name!: string;
  dueDate!: string;
  course!: string;

  // Dependency Injection via Constructor Method
  // This is the service declared in the providers list in the app.module.ts file
  constructor(private projectService: ProjectService) {}

  // Lifecycle hook to call the service when the component is initialized
  ngOnInit(): void {
    this.getProjects();
  }

  // Method to call the service
  getProjects(): void {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
  // Method to call the service to create a new project
  addProject(): void {
    let newProject = {
      name: this.name,
      dueDate: this.dueDate,
      course: this.course,
    };
    // Call service passing the new object data
    this.projectService.addProject(newProject).subscribe((data) => {
      this.getProjects(); // Refresh the list of projects
    });
    // Clear form fields
    this.clearForm();
  }

  // Method to select a project when user clicks Update
  selectProject(project: any): void {
    // Project data comes from the table itself
    this._id = project._id;
    this.name = project.name;
    this.dueDate = project.dueDate;
    this.course = project.course;
  }

  // Method to call the service to update a project
  updateProject(): void {
    let updatedProject = {
      _id: this._id,
      name: this.name,
      dueDate: this.dueDate,
      course: this.course,
    };
    // Call service passing the updated object data
    this.projectService.updateProject(updatedProject).subscribe((data) => {
      this.getProjects(); // Refresh the list of projects
    });
    // Clear form fields
    this.clearForm();
  }

  // Method to call the service to delete a project
  deleteProject(_id: string): void {
    if (confirm('Are you sure you want to delete this project?')) {
      // Call service passing the project ID to delete
      this.projectService.deleteProject(_id).subscribe((data) => {
        this.getProjects(); // Refresh the list of projects
      });
    }
  }

  // Clear form fields after create and update
  clearForm(): void {
    this._id = '';
    this.name = '';
    this.dueDate = '';
    this.course = '';
  }
}
