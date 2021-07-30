import { Component, OnInit } from '@angular/core';
// import project service
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project', // <app-project>
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  // use dependency injection to configure an instance of ProjectService
  constructor(private projectService: ProjectService) { }

  // variable to hold list of projects
  projects: any;

  // create a method to call the service
  getProjects(): void {
    // subscriber pattern
    this.projectService.getProjects().subscribe(response => {
      this.projects = response;
    });
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
