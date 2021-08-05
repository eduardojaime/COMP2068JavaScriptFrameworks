import { Injectable } from '@angular/core';
// Import httpclient in order to make HTTP calls (GET, POST, DELETE, PUT)
import { HttpClient } from '@angular/common/http';
// Import environment module
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // use dependency injection to inject http module
  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get(environment.serverApiUrl + '/projects');
  }

  addProject(newProject: any) {
    return this.http.post(environment.serverApiUrl + '/projects', newProject);
  }

  deleteProject(_id: any) {
    // send ID in the URL
    // http://localhost:3000/projects/60d622d14fc7aa13d4420243
    return this.http.delete(environment.serverApiUrl + '/projects/' + _id);
  }

}
