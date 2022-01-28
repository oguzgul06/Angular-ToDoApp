import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  @Input() taskList: string[] = [];
  newTask: string = '';
  constructor() {}

  ngOnInit(): void {}

  addTodo() {
    this.taskList.unshift(this.newTask);
    this.newTask = '';
  }
}
