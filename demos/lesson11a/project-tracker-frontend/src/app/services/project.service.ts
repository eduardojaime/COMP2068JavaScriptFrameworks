import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // Declare variable to store base api url
  baseUrl = 'http://localhost:3000'; // this makes it configurable later if we deploy to render

  // Use DI to receive an instance of HttpClient object
  // declare a private variable named http of type HttpClient to use in the class
  constructor(
    private http: HttpClient
  ) { }

  // Method to get all projects from the API
  getProjects() {
    // concatenate the base url with the endpoint to get all projects
    // e.g. GET http://localhost:3000/api/projects
    return this.http.get(`${this.baseUrl}/api/projects`);
  }

  // Method to add a new project calling the API
  addProject(newProject: any) {
    // Make POST request to backend API and send new project data
    return this.http.post(`${this.baseUrl}/api/projects`, newProject);
  }

  // Method to delete a project calling the API
  deleteProject(_id: string) {
    // Make DELETE request to backend API and send project ID to delete
    return this.http.delete(`${this.baseUrl}/api/projects/${_id}`);
  }

  // Method to update a project by ID calling the API
  updateProject(updatedProject: any) {
    // Make PUT request to backend API and send updated project data
    // updatedProject is an object and contains all the fields of the project including ID
    return this.http.put(`${this.baseUrl}/api/projects`, updatedProject);
  }
}
