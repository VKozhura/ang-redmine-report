import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit{
  tasks: any = [];
  constructor(
    public tasksService: TasksService,
    private cdr: ChangeDetectorRef
  ) {
    
  }

  ngOnInit() {
    concat(this.tasksService.getTasks()).subscribe((data: any) => { 
      this.tasks = data;
      console.log(this.tasks);
      
      this.cdr.detectChanges();
    });
  }
}
