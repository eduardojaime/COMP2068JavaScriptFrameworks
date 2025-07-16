import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // Dependency injection of HttpClient
  constructor(private http: HttpClient) {}
  // Method to get projects from the API
  getProjects() {
    return this.http.get('http://localhost:3000/api/projects');
  }  
}
