import { Injectable } from '@angular/core';
// Import HttpClient library to make HTTP requests (first configure in app.module.ts)
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // modify constructor to accept an instance of HttpClient via Dependency Injection (HttpClientModule)
  constructor(private http: HttpClient) { }

  // Add methods for CRUD operations
  // GET all projects from backend endpoint
  getProjects() {
    // Expected response:
    // [
    //   {
    //     "_id": "666a431826b78e7c47b58734",
    //     "name": "ASSIGNMENT 03",
    //     "dueDate": "2024-05-28T00:00:00.000Z",
    //     "course": "Programming Fundamentals",
    //     "status": "TO DO",
    //     "__v": 0
    //   }
    // ]
    return this.http.get('http://localhost:3000/projects');
  }

  // TODO Create, Update, Delete methods
}
