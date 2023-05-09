import { Injectable } from '@angular/core';
// import httpclient in order to make http calls, it comes from HttpClientModule
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // Use Dependency Injection to pass an instance of the httpclient object
  // in other words: this service expects an instance of HttpClient to use as the 'http' object
  constructor(private http: HttpClient) { }

  // write methods for each CRUD operation
  getProjects() {
    return this.http.get('http://localhost:3000/api/projects'); // simple GET call to endpoint
  }
}
