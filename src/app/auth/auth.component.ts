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

  getTasks() {
    console.log(this.tasks.length, this.totalCount);

    this.redmineService
      .getTasks(this.token, this.tasks.length, this.startDate, this.start2Date)
      .subscribe((response: any) => {
        console.log(response);

        this.tasks = [...this.tasks, ...response.issues];
        this.totalCount = response.total_count;
        console.log(this.totalCount);
      });

    while (this.tasks.length < this.totalCount) {
      const length: number = this.tasks.length + 1;
      this.redmineService
        .getTasks(this.token, length, this.startDate, this.start2Date)
        .subscribe((response: any) => {
          console.log(response);

          this.tasks = [...this.tasks, ...response.issues];
          this.totalCount = response.total_count;
          console.log(this.totalCount);
        });
    }
  }
}
