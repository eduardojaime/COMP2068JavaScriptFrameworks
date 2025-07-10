// Component class where we'll have the properties and methods for the UI
import { Component, signal } from '@angular/core';
// Component declaration where we define the selector, template, and styles
@Component({
  selector: 'app-root', // name of the custom HTML element that represents this component
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My First Angular App');
  links: Array<any> = [
          { title: 'Explore the Docs', link: 'https://angular.dev' },
          { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
          { title: 'Prompt and best practices for AI', link: 'https://angular.dev/ai/develop-with-ai'},
          { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
          { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
          { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
        ];
  counter: number = 0;

  // Method to increment the counter
  // FunctionName(parameters): returnType { }
  increaseCounter(): void {
    this.counter++;
  }
}
