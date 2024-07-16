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
}
