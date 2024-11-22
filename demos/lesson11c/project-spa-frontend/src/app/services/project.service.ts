import { Injectable } from '@angular/core';
// Import the HTTP client module to make HTTP requests
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  // Use Dependency Injection to get the HTTP client instance
  // This is what was declared in the imports list in the app.module.ts file
  constructor(private http: HttpClient) {}

  // Method to get all projects from the backend
  getProjects() {
    // Make a GET request to the backend to get all projects
    return this.http.get('http://localhost:3000/api/projects');
  }
  // Method to add a project to the backend
  addProject(project: any) {
    // Make a POST request to the backend to add a project
    // Pass url and data to the post method
    return this.http.post('http://localhost:3000/api/projects', project);
  }

  // Method to update a project in the backend
  updateProject(project: any) {
    // Make a PUT request to the backend to update a project
    // Pass url and data to the put method
    return this.http.put('http://localhost:3000/api/projects', project);
  }

  // Method to delete a project from the backend
  deleteProject(id: string) {
    // Make a DELETE request to the backend to delete a project
    // Pass url including the id to the delete method
    return this.http.delete(`http://localhost:3000/api/projects/${id}`);
  }
}
