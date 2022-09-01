import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  tasks: any = [];
  constructor(private tasksService: TasksService) {
    this.tasksService.getTasks().subscribe((data: any) => (this.tasks = data));
    console.log(this.tasks);
  }
}
