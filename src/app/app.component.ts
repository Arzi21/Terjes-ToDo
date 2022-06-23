import { Component, Renderer2 } from '@angular/core';

import { ListsService } from './services/lists.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private renderer: Renderer2,
    private listService: ListsService,

  ){}

  title = 'Terjes To-Do List';
  rememberance = false;

  taskList = this.listService.getTasks();
  taskListComplete = this.listService.getCompletedTasks();
  taskListDelete = this.listService.getDeletedTasks();

  setSelectedTask(selectedTask: any) {
    if (this.rememberance) {
      this.renderer.setStyle(this.rememberance, 'border', 'none');
    }
    this.renderer.setStyle(selectedTask, 'border', 'solid 5px var(--primary-verydark)');
    this.rememberance = selectedTask;
  }

}
