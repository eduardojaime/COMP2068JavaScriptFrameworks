import { Injectable } from '@angular/core';
// This service will communicate over Http to the Server App
import { HttpClient } from '@angular/common/http';
// Import environment module
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  // create reusable and configurable value
  projectsApiUrl = environment.serverAPI + '/Projects';

  // use dependency injection to use an instance of httpclient
  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get(this.projectsApiUrl);
  }

  addProject(newProject: any) {
    return this.http.post(this.projectsApiUrl, newProject);
  }

}
