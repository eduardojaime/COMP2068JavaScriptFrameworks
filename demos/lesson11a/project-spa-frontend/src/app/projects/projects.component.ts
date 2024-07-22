import { Component } from '@angular/core';
// Use DI to inject the ProjectsService into the component
// ../ refers to /src  (the parent of /projects)
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Variables
  projects: any; // hold the projects data once I retrieve it from the service
  // Inject the ProjectsService into the component
  constructor(private projectsService: ProjectsService) { }

  // create a method to get all projects calling the services
  getProjects() : void {
    // observer pattern > allows you to make a request and wait for the response
    // subscribe() is similar to .then() in promises
    // you can pass a callback function to subscribe() that will be called 
    // when the response is received
    this.projectsService.getProjects().subscribe((data) => {
       this.projects = data;
    });
  }

  // Call the getProjects() method when the component is initialized
  // ngOnInit fires when the component loads
  ngOnInit() : void {
    this.getProjects();
  }
}
