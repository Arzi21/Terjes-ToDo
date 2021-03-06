import { Component, Input, OnInit, Renderer2 } from '@angular/core';

import { TaskInterface } from 'src/app/interfaces/task-interface';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-tasks-completed',
  templateUrl: './tasks-completed.component.html',
  styleUrls: ['./tasks-completed.component.scss']
})
export class TasksCompletedComponent implements OnInit {

  @Input() completedTasks: TaskInterface[]|undefined
  @Input() deletedTasks: TaskInterface[]|undefined

  currentListTitle = "Completed";
  countdown:any
  

  constructor(
    private renderer: Renderer2,
    public listsService: ListsService,
  ) { }

  ngOnInit(): void {
  }

  changeListView(completedTasksList: any, deletedTasksList: any, totalViewControl: any, viewButton: any) {
    console.log("List View Change Initiated");
    if (this.currentListTitle === "Deleted") {
      this.currentListTitle = "Completed";
      this.renderer.setStyle(completedTasksList, 'display', 'block');
      this.renderer.setStyle(totalViewControl, 'grid-template-rows', '70px 1fr 70px');
      this.renderer.setStyle(deletedTasksList, 'display', 'none');
      this.renderer.setStyle(viewButton, 'border-radius', '20px 20px 0px 0px');
    } else {
      this.currentListTitle = "Deleted";
      this.renderer.setStyle(completedTasksList, 'display', 'none');
      this.renderer.setStyle(totalViewControl, 'grid-template-rows', '70px 70px 1fr');
      this.renderer.setStyle(deletedTasksList, 'display', 'block');
      this.renderer.setStyle(viewButton, 'border-radius', '0px 0px 20px 20px');
    }
  }

  deleteCompleteTask(taskToDelete:TaskInterface) {
    this.listsService.taskListComplete.forEach( 
      (item, index) => {
        if (item === taskToDelete) this.listsService.taskListComplete.splice(index, 1);
      }
    );
    this.listsService.taskListDelete.push(taskToDelete);
    this.countdown = setTimeout(this.deletionCountdown, 120000, taskToDelete, this.listsService.taskListDelete);
  }

  deletionCountdown(subject:TaskInterface, list:TaskInterface[]) {
    console.log("Full Deletion Initiated");
    list.forEach(
      (item, index) => {
        if (item === subject) list.splice(index, 1);
      }
    );
  }

  restoreCompletedTask(taskToRestore:TaskInterface) {
    this.listsService.taskListComplete.forEach(
      (item, index) => {
        if (item === taskToRestore) this.listsService.taskListComplete.splice(index, 1);
      }
    );
    this.listsService.taskList.push(taskToRestore);
  }

  restoreDeletedTask(taskToRestore:TaskInterface) {
    this.listsService.taskListDelete.forEach(
      (item, index) => {
        if (item === taskToRestore) this.listsService.taskListDelete.splice(index, 1);
      }
    );
    this.listsService.taskList.push(taskToRestore);
  }

}
