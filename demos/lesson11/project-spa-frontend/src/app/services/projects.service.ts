import { Injectable } from '@angular/core';
// Needs the HttpClientModule to make HTTP requests
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // Inject the HttpClient service via DI
  constructor(private http : HttpClient) { }
  // Helper methods to call the REST backend API
  getProjects() {
    return this.http.get("http://localhost:3000/api/projects");
  }
}
