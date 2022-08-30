import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // use DI to inject an instance of HTTPCLIENT
  // private property named http of type HttpClient
  constructor(private http: HttpClient) { }

  // Method to call API endpoint http://localhost:3000/projects
  getProjects() {
    // make an http request here....
    return this.http.get('http://localhost:3000/projects');
  }
}
