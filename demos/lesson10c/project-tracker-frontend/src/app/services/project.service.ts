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
}
