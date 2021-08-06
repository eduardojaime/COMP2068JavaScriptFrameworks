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
  // add id variable to hold id of project to be updated
  _id!: any;
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

  updateProject(): void {
    // create object to be updated including the id
    let selectedProject = {
      _id: this._id,
      name: this.name,
      dueDate: this.dueDate,
      course: this.course
    }

    this.projectService.updateProject(selectedProject).subscribe(response => {
      this.getProjects();
    });

    this.clearForm();
  }

  deleteProject(_id: any) : void {
    // add a confirmation dialog same as javascript
    if (confirm('Are you sure you want to delete this?')) {
      // call project service and pass the id
      this.projectService.deleteProject(_id).subscribe(response => {
        this.getProjects();
      });
    }
  }

  selectProject(project: any) {
    this._id = project._id;
    this.name = project.name;
    this.dueDate = project.dueDate;
    this.course = project.course;
  }

  clearForm(): void {
    this._id = '';
    this.name = '';
    this.dueDate = '';
    this.course= '';
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
