import { Injectable } from '@angular/core';
// Import HttpClient to enable REST requests
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// This service connects to the backend endpoints
// via http request, retrieves data in JSON format,
// and passes this data on to the Component class
export class ProjectService {
  // Use DI to insert an instance of the http module
  constructor(private http: HttpClient) { }
  // declare methods for each action
  // GET
  getProjects() {
    return this.http.get("http://localhost:3000/projects");
  }
  // POST
  // TODO
  // PUT
  // TODO
  // DELETE
  // TODO
}
