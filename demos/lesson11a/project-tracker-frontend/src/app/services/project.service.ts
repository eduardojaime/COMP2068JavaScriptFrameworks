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
}
