import { Component } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Task {
  id: number;
  tracker: {
    name: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: any = [];
  startDate: string = '';
  start2Date: string = '';
  token: string = '';
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getTasks() {
    console.log('клик');

    const headers = new HttpHeaders().set('X-Redmine-API-Key', this.token);
    const options = { headers: headers };

    this.http
      .get(
        `https://redmine.bivgroup.com/issues.json?status_id=*&offset=0&limit=100&created_on=%3E%3C${this.startDate}|${this.start2Date}`,
        options
      )
      .subscribe((response: any) => {
        console.log(response);

        this.tasks = response.issues;
      });
  }
}
