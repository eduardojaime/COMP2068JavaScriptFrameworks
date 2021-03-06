import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// Service is a class that provides/manipulates data for the application
export class ProjectService {

  // use dependency injection to enhance the service class with services
  // declare a private property named http of type HttpClient in the class constructor method
  constructor(private http: HttpClient) { }

  // add a method to make a http request and retrieve JSON formatted data
  getProjects() {
    // return the result of a HTTP GET request to http://localhost:3000/projects
    return this.http.get('http://localhost:3000/projects');
  }
}
