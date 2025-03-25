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
}
