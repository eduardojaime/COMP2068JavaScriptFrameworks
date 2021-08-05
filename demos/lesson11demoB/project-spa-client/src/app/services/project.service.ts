import { Injectable } from '@angular/core';
// This service will communicate over Http to the Server App
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // use dependency injection to use an instance of httpclient
  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get('http://localhost:3000/Projects');
  }
}
