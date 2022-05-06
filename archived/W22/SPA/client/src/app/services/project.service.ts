// Move these two project.service.* files to /app/services
import { Injectable } from '@angular/core';

// service will connect via HttpClient module to server app
// register HttpClient in app.module.ts
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // use Dependency Injection to use an instance of HttpClient
  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get('http://localhost:3000/api/Projects');
  }
}
