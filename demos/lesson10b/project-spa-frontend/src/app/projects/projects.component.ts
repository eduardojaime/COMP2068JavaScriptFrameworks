import { Component } from '@angular/core';
// Import ProjectsService to make it available via DI
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Variable to hold projects data
  projects: any = []; // Array of projects

  // Add constructor to inject ProjectsService
  constructor(private projectsService: ProjectsService) { }

  // create method to retrieve projects from service
  getProjects() {
    // use observer pattern to wait for the response from the HTTP Call
    this.projectsService.getProjects().subscribe((data) => { this.projects = data; });
  }

  // Use ngOnInit lifecycle hook to call getProjects method on page load
  ngOnInit()  : void{
    this.getProjects();
  }
}
