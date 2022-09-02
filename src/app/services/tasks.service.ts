import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: any = [];

  setTasks(data: any) {
    this.tasks = [...this.tasks, ...data];
  }

  getTasks() {
    console.log(of(this.tasks));
    
    return of(this.tasks);
  }
}
