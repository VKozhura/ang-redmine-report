import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TasksService } from './tasks.service';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class RedmineService {

  constructor(private http: HttpClient, ) {}

  getTasks(token: string, offset: number, date1: string, date2: string) {
    const headers = new HttpHeaders().set('X-Redmine-API-Key', token);
    const options = { headers: headers };
    return this.http.get(
      `https://redmine.bivgroup.com/issues.json?status_id=*&offset=${offset}&limit=100&created_on=%3E%3C${date1}|${date2}`,
      options
    )
  
  }
}
