import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: BehaviorSubject<any> = new BehaviorSubject<any>([]);

}
