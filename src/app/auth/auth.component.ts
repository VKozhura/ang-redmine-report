import { Component, OnInit } from '@angular/core';
import { RedmineService } from '../services/redmine.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  token: string = '';
  startDate: string = '';
  start2Date: string = '';
  tasks: any = [];
  totalCount: number = 0;

  constructor(private redmineService: RedmineService) {}

  handleClick() {
    this.getTasks(this.token, 0, this.startDate, this.start2Date);
  }

  getTasks(token: string, len: number, start: string, end: string) {
    this.redmineService
      .getTasks(token, len, start, end)
      .subscribe((response: any) => {
        this.tasks = [...this.tasks, ...response.issues];
        this.totalCount = response.total_count;

        if (this.tasks.length === response.total_count) {
          return 
        } else {
          this.getTasks(token, this.tasks.length, start, end);
        }
      
      });
      
      
  }
}
