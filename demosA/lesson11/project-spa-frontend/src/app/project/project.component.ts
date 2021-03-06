import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: any;
  // properties to store project info
  name!: any;
  dueDate!: any;
  course!: any;
  // property to store id when editing
  _id!: any;

  // use dependency injection to inject a service instance into my class
  constructor(private projectService: ProjectService) { }

  // this method is called when component is loaded
  ngOnInit(): void {
    this.getProjects();
  }

  // TODO: create a method that calls the service
  getProjects() {
    // subscriber pattern > my class is listening for changes in the data
    this.projectService.getProjects().subscribe(response => {
      this.projects = response;
    });
  }

  // Create new project
  addProject(): void {
    // create a new project object using the information in the form fields
    let newProject = {
      name: this.name,
      dueDate: this.dueDate,
      course: this.course
    }
    // call the service and pass the new project object
    this.projectService.addProject(newProject).subscribe(response => {
      this.getProjects();
    });
    // clear form
    this.clearForm();
  }

  deleteProject(_id: any): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(_id).subscribe(response => {
        this.getProjects();
      })
    }
  }

  // select project then update
  selectProject(project: any) {
    this._id = project._id;
    this.name = project.name;
    this.dueDate = project.dueDate;
    this.course = project.course;
  }

  updateProject(){
    let selectedProject = {
      _id: this._id,
      name: this.name,
      dueDate: this.dueDate,
      course: this.course
    }
    // pass on to service
    this.projectService.updateProject(selectedProject).subscribe(response => {
      this.getProjects();
    })
    // clear form
    this.clearForm();
  }

  clearForm(): void {
    this._id = '';
    this.name = '';
    this.dueDate = '';
    this.course = '';
  }
}
