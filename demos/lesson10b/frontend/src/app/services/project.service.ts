import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // attributes
  // constructors
  // Use DI to inject an instance of the HttpClient object
  constructor(private http: HttpClient) { }
  // methods
  // CRUD Methods
  // GET > Retrieve/Read Data
  getProjects() {
    return this.http.get("http://localhost:3000/projects"); // return JSON response from server app
  }
}
