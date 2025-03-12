import { Component } from '@angular/core';

// Hardcode data to pass to the UI template
export class Project {
  id!: number; // ! means that the variable can be null
  name!: string;
  course!: string;
}

// Mock list of projects
// Syntax: const <variable_name>: <datatype> = [<value1>, <value2>, ...]
const PROJECTS: Project[] = [
  { id: 1, name: 'LAB 1', course: 'COMP2068' },
  { id: 2, name: 'LAB 2', course: 'COMP2068' },
  { id: 3, name: 'LAB 3', course: 'COMP2068' }, 
]


@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects = PROJECTS; // Simulates a database call to get the list of projects
}
