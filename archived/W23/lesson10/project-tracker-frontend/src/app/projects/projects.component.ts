import { Component } from '@angular/core';
// import project service
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // use DI to receive an instance of ProjectService from the app level
  constructor(private projectService: ProjectsService) { }
  // we need class level variables to hold data and show in the UI
  projects: any;
  // create methods to call the service
  getProjects() : void {
    // just call the service using the subscribe pattern
    // this calls getProjects, gets a response JSON object, sets value of projects
    this.projectService.getProjects().subscribe(res => { this.projects = res });
  }
  // special method that executes automatically when the component is loaded on the screen
  ngOnInit() : void {
    this.getProjects();
  }
}
