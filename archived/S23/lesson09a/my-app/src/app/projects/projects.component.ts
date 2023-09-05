import { Component } from '@angular/core';

// Define Project Class
export class Project {
  // propertyName: Type
  id!: number;
  name!: string;
  course!: string; // ! avoids warnings related to property initialization
}
// Mock accessing the database and retrieving a list
const PROJECTS: Project[] = [
  {id: 101, name: "Lab 1", course: "JS Frameworks" },
  {id: 102, name: "Lab 2", course: "JS Frameworks" },
  {id: 103, name: "Lab 3", course: "JS Frameworks" }
]

@Component({
  selector: 'app-projects', // html element to render my component
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // this class can contain properties
  // in-memory project to display
  // project: Project = {
  //   id: 1,
  //   name: "Lab 3",
  //   course: "JS Frameworks"
  // }
  // property that would receive the list from calling a function
  projects = PROJECTS;
  // new property to store the value of the currently selected project
  selectedProject!: Project; // use ! to avoid initialization warnings
  // define functions that are available in the view
  // onSelect accepts a parameter of type project and returns NOTHING
  onSelect(project: Project) : void {
    this.selectedProject = project;
  }
  // classes can have constructors and a special onInit method that's executed when the component is loaded
  // Used for injecting any dependency
  constructor() { 
    // inject service that connects to the db
  }
  // Runs as soon as the page load
  ngOnInit(): void {
    // retrieve info from database
  }

}
