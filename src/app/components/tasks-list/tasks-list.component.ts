import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],

})
export class TasksListComponent {
 
  constructor(public tasksService: TasksService) {}

  

}
