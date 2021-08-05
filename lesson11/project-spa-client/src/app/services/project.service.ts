import { Injectable } from '@angular/core';
// Import this library in order to make HTTP calls
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // service requires http client when it's created
  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get('http://localhost:3000/projects');
  }
}
