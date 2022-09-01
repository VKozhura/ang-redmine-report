import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: any = [];

  setTasks(data: any) {
    this.tasks = [...this.tasks, ...data];
  }

  getTasks() {
    return this.tasks;
  }
}
