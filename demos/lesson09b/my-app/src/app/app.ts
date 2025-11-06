import { Component, signal } from '@angular/core';

// Interfaces can help define the shape of data
interface Project {
  name: string;
  dueDate: string;
  status: string;
}
// Mock data for projects, ideally this would come from a service
// Declare constant of type Project array based on the interface defined above
const PROJECTS: Project[] = [
  { name: "LAB01", dueDate: "2025-11-15", status: "Completed" },
  { name: "LAB02", dueDate: "2025-11-22", status: "In Progress" },
  { name: "LAB03", dueDate: "2025-11-29", status: "Not Started" }
];

@Component({
  selector: 'app-root', // <app-root>
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  // Define Properties
  protected readonly title = signal('My Angular App');
  // simple property to hold projects so we can render in the HTML
  protected readonly projects: Project[] = PROJECTS;
  // Define Methods
  // Add function to show an alert
  protected showAlert() {
    alert("Hello Everyone!");
  }
}
