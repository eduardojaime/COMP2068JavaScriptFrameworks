import { Injectable } from '@angular/core';
// Import httpclient in order to make HTTP calls (GET, POST, DELETE, PUT)
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // use dependency injection to inject http module
  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get('http://localhost:3000/projects');
  }
}
