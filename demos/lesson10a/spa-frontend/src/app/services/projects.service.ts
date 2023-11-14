import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // for http requests
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // Dependency Injection via constructor
  // This class has access to anything configured in app.module.ts
  // We need an instance of the HttpClient object to make requests
  constructor(private http: HttpClient) { }
  // Methods to call the backend API
  // Retrieve projects
  getProjects() {
    // make a GET request to localhost
    // it will return a list in JSON format
    return this.http.get("http://localhost:3000/projects");
  }
  // TODO Create projects
  // TODO Update projects
  // TODO Delete projects 
}
