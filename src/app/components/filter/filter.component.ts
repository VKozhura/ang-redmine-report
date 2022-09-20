import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { TasksService } from 'src/app/services/tasks.service';

interface Tracker {
  id: number;
  name: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  tracker: BehaviorSubject<string>;
  filteredTasks: Observable<any[]>;
  // tracker: string = 'Все';
  trackers: Tracker[] = [
    { id: 1, name: 'Все' },
    { id: 1, name: 'Поддержка' },
    { id: 2, name: 'Платная доработка' },
    { id: 3, name: 'Консультация' },
  ];
  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tracker = new BehaviorSubject('Все');
    this.filteredTasks = this.createFilterTasks(
      this.tracker,
      this.tasksService.tasks
    );
  }

  createFilterTasks(tracker$: Observable<string>, tasks: Observable<any[]>) {
    return combineLatest(tasks, tracker$, (tasks, tracker: string) => {
      // this is the project function where we imperatively
      // implement the filtering logic
      if (tracker === 'Все') return tasks;
      return tasks.filter(
        (task) => task.tracker.name.toLowerCase() === tracker.toLowerCase()
      );
    });
  }

  onSelectTracker(value: string) {
    console.log('селект');
    this.tracker.next(value);
    // this.tasksService.filterTrackers(tracker);
    console.log(this.tasksService.tasks);
  }
}
