import { Component } from '@angular/core';

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
export class AppComponent {}
