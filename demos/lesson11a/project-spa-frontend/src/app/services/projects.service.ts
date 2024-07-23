// Service for retrieving project related data from the backend API
import { Injectable } from '@angular/core';
// Import http client library to make HTTP requests
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // Use dependency injection to inject an instance of the HttpClient service
  constructor(private http: HttpClient) { }
  // CRUD operations
  // Method to get all projects
  getProjects() {
    // Make a GET request to the backend API to get all projects
    // returns an observable that emits the response in JSON format
    return this.http.get("http://localhost:3000/projects");
  }
  // Method to create a new project
  addProject(newProject: any) {
    // Make a POST request to the backend API to create a new project
    // parameters: backend endpoint, data to send
    return this.http.post("http://localhost:3000/projects", newProject);
  }
  // Method to delete a project by ID
  deleteProject(_id: string) {
    // concatenate id to the endpoint to delete a specific project
    return this.http.delete("http://localhost:3000/projects/" + _id);
  };
  // Method to update a project by ID
  updateProject(selectedProject: any) {
    // selectedProject is the project object with the updated information
    return this.http.put("http://localhost:3000/projects", selectedProject); 
  }
}
