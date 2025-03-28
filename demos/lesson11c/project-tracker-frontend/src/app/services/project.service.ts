import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // Define the base URL of the API endpoint
  baseUrl = "http://localhost:3000";

  // Use DI to request an instance of HttpClient object from the app
  constructor(
    private http: HttpClient
  ) { }

  // Declare a method to get all projects from the API endpoint
  getProjects() {
    return this.http.get(`${this.baseUrl}/api/projects`);
  }

  // Declare a method to make a POST request to the create endpoint
  addProject(newProject: any) {
    // two parameters: the URL and the data to be sent (in req.body)
    return this.http.post(`${this.baseUrl}/api/projects`, newProject);
  }

  // Declare a method to make a PUT request to the update endpoint
  updateProject(updatedProject: any) {    
    // two parameters: the URL and the data to be sent (in req.body)
    return this.http.put(`${this.baseUrl}/api/projects/`, updatedProject);
  }

  // Declare a method to make a DELETE request to the delete endpoint
  deleteProject(projectId: string) {
    // Using interpolation to insert the project ID into the URL
    return this.http.delete(`${this.baseUrl}/api/projects/${projectId}`);
  }
}
