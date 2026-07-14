// Main component file, similar to a router outlet in Express
import { Component, signal } from '@angular/core';

// Component definition points to the other files that make up the component (HTML, CSS, and TypeScript)
@Component({
  selector: 'app-root', // HTML tag name for this component > see index.html
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My Angular App');
  protected readonly items = signal([
          { title: 'Explore the Docs', link: 'https://angular.dev' },
          { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
          { title: 'Prompt and best practices for AI', link: 'https://angular.dev/ai/develop-with-ai'},
          { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
          { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
          { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
          { title: 'Eduardo Home Page', link: 'https://eduardojaime.github.io' }
        ]); 

  handleClickEvent(): void {
    console.log('Button clicked!');
  } 
}
