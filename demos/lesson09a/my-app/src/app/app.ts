import { Component, signal } from '@angular/core';
// Component declaration
@Component({
  selector: 'app-root', // HTML tag for this component > <app-root></app-root>
  templateUrl: './app.html', // where to find the HTML code for this component
  standalone: false,
  styleUrl: './app.css' // where to find the CSS code for this component
})
// every component is a class
export class App {
  protected readonly title = signal('my-app');
  protected readonly linkList = [
          { title: 'Explore the Docs', link: 'https://angular.dev' },
          { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
          { title: 'Prompt and best practices for AI', link: 'https://angular.dev/ai/develop-with-ai'},
          { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
          { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
          { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
        ];
  // Declare counter variable
  counter = 0;
  // Function to increment the counter
  incrementCounter(): void {
    this.counter++;
  }
}
