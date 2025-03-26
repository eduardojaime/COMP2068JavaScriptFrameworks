import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = 'http://localhost:3000';

  // Use DI to get an instance of HTTPCLIENT object
  constructor(private http: HttpClient) { }

  // Method to get all projects from the backend API
  getProjects() {
    // concatenate baseurl + /api/projects
    return this.http.get(`${this.baseUrl}/api/projects`);
  }

  // Method to add a new project calling the backend API
  addProject(newProject: any) {
    // two parameters: the URL and the project object that goes in the request body
    return this.http.post(`${this.baseUrl}/api/projects`, newProject);
  }

  // Method to update project data calling the backend API
  updateProject(updatedProject: any) {
    return this.http.put(`${this.baseUrl}/api/projects`, updatedProject);
  }

  // Method to delete project by ID
  deleteProject(_id: string) {
    // this includes the id value in the URL
    return this.http.delete(`${this.baseUrl}/api/projects/${_id}`);
  }
}
