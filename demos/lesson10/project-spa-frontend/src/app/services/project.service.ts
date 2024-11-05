import { Injectable } from '@angular/core';
// Import the HTTP client module to make HTTP requests
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // Use Dependency Injection to get the HTTP client instance
  // This is what was declared in the imports list in the app.module.ts file
  constructor(private http: HttpClient) { }

  // Method to get all projects from the backend
  getProjects() {
    return this.http.get('http://localhost:3000/api/projects');
  }
}
