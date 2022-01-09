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

  updateProject(selectedProject: any) {
    return this.http.put(this.projectsApiUrl, selectedProject);
  }

  deleteProject(_id: any) {
    // passing id value as part of the request url
    // request url looks like this
    // http://localhost:3000/Projects/60d622d14fc7aa13d4420243
    return this.http.delete(this.projectsApiUrl + '/' + _id);
  }

}
