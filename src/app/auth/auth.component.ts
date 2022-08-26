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
  tasks: any = []
  
  constructor(private redmineService: RedmineService) {}

  getTasks() {
    this.redmineService.getTasks(this.token, this.startDate, this.start2Date).subscribe()
  }
  
}
