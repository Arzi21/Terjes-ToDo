import { Component, Input, OnInit } from '@angular/core';
import { TaskInterface } from 'src/app/interfaces/task-interface';

@Component({
  selector: 'app-tasks-completed',
  templateUrl: './tasks-completed.component.html',
  styleUrls: ['./tasks-completed.component.scss']
})
export class TasksCompletedComponent implements OnInit {

  @Input() completedTasks: TaskInterface[]|undefined
  @Input() deletedTasks: TaskInterface[]|undefined
  

  constructor() { }

  ngOnInit(): void {
  }

  restoreTask(task:TaskInterface) {
    console.log("Task Restoration Initiated")
  }

}
