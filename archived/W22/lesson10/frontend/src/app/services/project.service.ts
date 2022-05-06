// Service Layer performs operations for components
import { Injectable } from '@angular/core';
// Import httpclient to make http requests calls
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // Use dependency injection to use an instance of HttpClient in this class
  constructor(private http: HttpClient) { }

  // Create a method makes an HTTP GET call to an endpoint
  // and retrieves a list of data in JSON format
  getProjects() {
    return this.http.get('http://localhost:3000/api/projects');
  }
}
