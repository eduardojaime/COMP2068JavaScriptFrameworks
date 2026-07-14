import { Component, input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  standalone: false,
  templateUrl: './list-item.html',
  styleUrl: './list-item.css',
})  
export class ListItem {
  // These two are required inputs to be passed from parent component
  link = input.required<string>(); //'https://angular.io';
  title = input.required<string>(); //'Angular';
}
