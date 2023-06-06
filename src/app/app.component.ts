import { Component } from '@angular/core';

enum TaskFilter {
  All = 'All',
  Completed = 'Completed',
  Incomplete = 'Incomplete'
}

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  currentFilter: string = TaskFilter.All;

  addTask(task: string) {
    if (task.trim()) {
      this.tasks.push({ name: task, completed: false });
      this.applyTaskFilter();
    }
  }

  updateTaskFilter(filter: string) {
    this.currentFilter = filter;
    this.applyTaskFilter();
  }

  applyTaskFilter() {
    if (this.currentFilter === TaskFilter.All) {
      this.filteredTasks = this.tasks;
    } else if (this.currentFilter === TaskFilter.Completed) {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (this.currentFilter === TaskFilter.Incomplete) {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    }
  }

  onTaskStatusChanged(updatedTask: Task) {
    this.applyTaskFilter();
  }
}
