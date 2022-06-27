import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TaskInterface } from 'src/app/interfaces/task-interface';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input() tasks:TaskInterface[]|undefined
  @Output() selectedTask = new EventEmitter();

  taskForm:FormGroup|undefined;
  taskToUse: any = false;

  constructor(
    private formBuilder: FormBuilder,
    public listsService: ListsService
  ) { }

  ngOnInit(): void {
    
  }


  onSelect(activatedTaskElement: any, activatedTask:TaskInterface) {
    this.selectedTask.emit(activatedTaskElement);
    this.taskToUse = activatedTask;
  }

  newTaskFormSubmit() {
    if (this.taskForm?.value.date == undefined) {
      let timestamp = new Date().toLocaleDateString();
      this.taskForm?.get('date')?.setValue(timestamp);
    }

    this.listsService.taskList.push(this.taskForm?.value);
  }

  newTaskFormInit () {
    this.taskForm = this.formBuilder.group({
      title: ["", Validators.required],
      details: ["", Validators.required],
      date: [undefined]
    });
  }

  taskAdd() {
    console.log("Task Creation Initialized"); //TOREMOVE
    this.newTaskFormInit();
  }

  taskComplete() { //remove task for tasklist
    console.log("Task Completion Initialized"); //TOREMOVE
    console.log("the data", this.taskToUse); //TOREMOVE
    
    this.listsService.taskList.forEach( 
      (item, index) => {
        if (item === this.taskToUse) this.listsService.taskList.splice(index, 1);
      }
    );
    this.listsService.taskListComplete.push(this.taskToUse);
    this.taskToUse = false;
  }

  taskDelete(taskToUse: TaskInterface) {
    this.listsService.deleteTask(taskToUse);
    this.taskToUse = false;
  }

}
