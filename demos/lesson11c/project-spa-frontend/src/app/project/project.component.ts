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
  // Declare variables to hold project data from the Form
  _id!: string;
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

  // Method to clear the form
  clearForm(): void {
    this._id = '';
    this.name = '';
    this.dueDate = '';
    this.course = '';
  }

  // Method to add a project
  addProject(): void {
    const project = {
      name: this.name,
      dueDate: this.dueDate,
      course: this.course,
    };
    // Call the service to add the project
    this.projectService.addProject(project).subscribe(() => {
      // callback function triggered after project is created
      // refresh table
      this.getProjects();
      // clear the form
      this.clearForm();
    });
  }

  // Method to select a project and load its data into the form
  selectProject(project: any): void {
    this._id = project._id;
    this.name = project.name;
    this.dueDate = project.dueDate;
    this.course = project.course;
  }

  // Method to update a project
  updateProject(): void {
    // put together an object containing the id and project data
    const project = {
      _id: this._id,
      name: this.name,
      dueDate: this.dueDate,
      course: this.course,
    };
    // Call the service to update the project
    this.projectService.updateProject(project).subscribe(() => {
      this.getProjects();
      this.clearForm();
    });
  }

  // Method to delete a project
  deleteProject(id: string): void {
    if (confirm('Are you sure you want to delete this project?')) {
      // Call the service to delete the project
      this.projectService.deleteProject(id).subscribe(() => {
        this.getProjects();
      });
    }
  }
}
