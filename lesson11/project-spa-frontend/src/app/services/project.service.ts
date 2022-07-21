import { Injectable } from '@angular/core';
// Import this library in order to make HTTP calls
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService { 
  // service requires http client when it's created
  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get(environment.serverAPI + '/projects');
  }

  addProject(newProject: any) {
    // Add/Create is usually a POST request
    return this.http.post(environment.serverAPI + '/projects', newProject);
  }

  updateProject(selectedProject: any) {
    return this.http.put(environment.serverAPI + '/projects', selectedProject);
  }
  
  deleteProject(_id: any) {
    // send id to be deleted as part of the url
    return this.http.delete(environment.serverAPI + '/projects/' + _id);
  }
}
