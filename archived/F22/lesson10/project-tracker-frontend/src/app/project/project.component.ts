import { Component, OnInit } from '@angular/core';
// import service
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  // provide instance of project service
  constructor(private projectService: ProjectService) { }

  // list of projects
  projects: any;

  // create a method to retrieve list of projects using service
  getProjects(): void {
    this.projectService.getProjects().subscribe(response => { 
      this.projects = response; 
    })
  }
  // call get projects when the Project Component is visualized
  ngOnInit(): void {
    this.getProjects();
  }

}
