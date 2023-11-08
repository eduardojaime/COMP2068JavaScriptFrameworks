import { Component } from '@angular/core';
// Mock model > replicates my document structure from the DB
export class Project {
  id!: number;
  name!: string; 
  course!: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // declare variable projects of type array of Project, and then initialize the list
  // simulating data retrieved from the db as a list (in-memory list)
  projects: Project[] = [
    { id: 101, name: "LAB01", course: "JS FRAMEWORKS" },
    { id: 102, name: "LAB02", course: "JS FRAMEWORKS" },
    { id: 103, name: "LAB03", course: "JS FRAMEWORKS" },
  ];
}
