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
  // variables to temporarily hold field values (2-way data binding)
  name: any;
  dueDate: any;
  course: any;

  // create a method to call the service
  getProjects(): void {
    // subscriber pattern
    this.projectService.getProjects().subscribe(response => {
      this.projects = response;
    });
  }

  // method to add a new project
  addProject(): void {
    // create a new project object using the information from the form fields
    let newProject = {
      name: this.name,
      dueDate: this.dueDate,
      course: this.course
    }
    // call the service and pass new project as parameter
    this.projectService.addProject(newProject).subscribe(response => {
      this.getProjects();
    });
    // what else needs to be done?
    this.clearForm();
  }

  clearForm(): void {
    this.name = '';
    this.dueDate = '';
    this.course= '';
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
