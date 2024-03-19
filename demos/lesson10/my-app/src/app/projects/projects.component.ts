import { Component } from '@angular/core';

// Mock MongoDB Schema and List of Projects
// This is usually data that comes from a service that 
// connects to the DB via API calls
export class Project {
  id!: number;
  name!: string;
  course!: string;
}
const PROJECTS: Project[] = [
  { id: 101, name: "LAB01", course: "JS FRAMEWORKS" },
  { id: 102, name: "LAB02", course: "JS FRAMEWORKS" },
  { id: 103, name: "LAB03", course: "JS FRAMEWORKS" },
  { id: 104, name: "ASSIGNMENT1", course: "JS FRAMEWORKS" },
  { id: 105, name: "ASSIGNMENT2", course: "JS FRAMEWORKS" },
]
// end mock data

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Data Attributes
  projects = PROJECTS; // assign mock data to local data attribute
  // Behaviour (functions)
}
