import { Component, Input, OnInit, Renderer2 } from '@angular/core';

import { TaskInterface } from 'src/app/interfaces/task-interface';

@Component({
  selector: 'app-tasks-completed',
  templateUrl: './tasks-completed.component.html',
  styleUrls: ['./tasks-completed.component.scss']
})
export class TasksCompletedComponent implements OnInit {

  @Input() completedTasks: TaskInterface[]|undefined
  @Input() deletedTasks: TaskInterface[]|undefined

  currentListTitle = "Completed";
  

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
  }

  restoreTask(task:TaskInterface) {
    console.log("Task Restoration Initiated")
  }

  changeListView(completedTasksList: any, deletedTasksList: any, totalViewControl:any) {
    console.log("List View Change Initiated")
    if (this.currentListTitle === "Deleted") {
      this.currentListTitle = "Completed";
      this.renderer.setStyle(completedTasksList, 'display', 'block');
      this.renderer.setStyle(totalViewControl, 'grid-template-rows', '70px 1fr 70px')
      this.renderer.setStyle(deletedTasksList, 'display', 'none')

    } else {
      this.currentListTitle = "Deleted";
      this.renderer.setStyle(completedTasksList, 'display', 'none');
      this.renderer.setStyle(totalViewControl, 'grid-template-rows', '70px 70px 1fr')
      this.renderer.setStyle(deletedTasksList, 'display', 'block')
    }
  }

}
