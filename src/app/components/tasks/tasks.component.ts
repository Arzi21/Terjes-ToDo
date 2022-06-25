import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TaskInterface } from 'src/app/interfaces/task-interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input() tasks:TaskInterface[]|undefined

  @Output() selectedTask = new EventEmitter();

  taskForm = true;

  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }


  onSelect(activatedTask: any) {
    this.selectedTask.emit(activatedTask);
  }

  initForm () {

  }

  taskAdd() {
    console.log("Task Creation Initialized")
    this.initForm()

  }
  
  nothing() {
    console.log("I've not coded this path yet");
  }

}
