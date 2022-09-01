import { Component, OnInit } from '@angular/core';
import { RedmineService } from '../../services/redmine.service';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  token: string = '';
  startDate: string = '';
  start2Date: string = '';
  // tasks: any = [];
  totalCount: number = 0;

  constructor(
    private redmineService: RedmineService,
    private _tasksService: TasksService
  ) {}

  handleClick() {
    this.getTasks(this.token, 0, this.startDate, this.start2Date);
  }

  getTasks(token: string, len: number, start: string, end: string) {
    this.redmineService
      .getTasks(token, len, start, end)
      .subscribe((response: any) => {
        this._tasksService.setTasks(response.issues);
        // this.tasks = [...this.tasks, ...response.issues];
        this.totalCount = response.total_count;
        const tasks = this._tasksService.getTasks();
        console.log(tasks);
        if (tasks.length === response.total_count) {
          return;
        } else {
          this.getTasks(token, tasks.length, start, end);
        }
      });
  }
}
