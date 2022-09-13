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

  constructor(
    private redmineService: RedmineService,
    public tasksService: TasksService
  ) {}

  handleClick() {
    this.getTasks(this.token, 0, this.startDate, this.start2Date);
  }

  getTasks(token: string, len: number, start: string, end: string) {
    this.redmineService
      .getTasks(token, len, start, end)
      .subscribe((response: any) => {
        this.tasksService.tasks.next([
          ...this.tasksService.tasks.value,
          ...response.issues,
        ]);

        const total = response.total_count;
        const tasksLength = this.tasksService.tasks.value.length;

        if (tasksLength === total) {
          return;
        } else {
          this.getTasks(token, tasksLength, start, end);
        }
      });
  }
}
