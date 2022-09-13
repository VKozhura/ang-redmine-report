import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  filterTrackers(tracker: string) {
    console.log('filter');
    const filtered = this.tasks.pipe(
      map((tasks) => tasks.filter((task: any) => task.tracker.name === tracker))
    );
    console.log(filtered);

    return filtered;
  }
}
