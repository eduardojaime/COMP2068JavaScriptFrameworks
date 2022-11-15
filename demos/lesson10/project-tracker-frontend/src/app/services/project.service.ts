import { Injectable } from '@angular/core';
// import library to make http calls
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // service requires http client when it's created
  constructor(private http: HttpClient) { }
  // method to retrieve data from API Backend
  getProjects() {
    return this.http.get('http://localhost:3000/projects');
  }

  // add more methods to perform CRUD operations

}
