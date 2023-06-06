import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskStatusChanged = new EventEmitter<Task>();

  updateTaskStatus(task: Task) {
    this.taskStatusChanged.emit(task);
  }
}
