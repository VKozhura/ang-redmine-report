import { Component, OnInit } from '@angular/core';
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
export class FilterComponent {
  tracker: string = 'Все';
  trackers: Tracker[] = [
    { id: 1, name: 'Все' },
    { id: 1, name: 'Поддержка' },
    { id: 2, name: 'Платная доработка' },
    { id: 3, name: 'Консультация' },
  ];
  constructor(private tasksService: TasksService) {}

  onSelectTracker(tracker: string) {
    console.log('селект');

    this.tasksService.filterTrackers(tracker);
    console.log(this.tasksService.tasks);
  }
}
