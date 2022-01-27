import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Task List';
  taskList: string[] = ['task 1', 'task 2', 'task 3', 'task 4'];
}
