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

  constructor(
    private formBuilder: FormBuilder,
    private listsService: ListsService
  ) { }

  ngOnInit(): void {
    
  }


  onSelect(activatedTask: any) {
    this.selectedTask.emit(activatedTask);
  }

  newTaskFormSubmit() {
    if (this.taskForm?.value.date == undefined) {
      let timestamp = new Date().toLocaleDateString();
      this.taskForm?.get('date')?.setValue(timestamp);
    }
    
    this.listsService.taskList.push(this.taskForm?.value)
  }

  newTaskFormInit () {
    this.taskForm = this.formBuilder.group({
      title: ["", Validators.required],
      details: ["", Validators.required],
      date: [undefined]
    })
  }

  taskAdd() {
    console.log("Task Creation Initialized")
    this.newTaskFormInit()

  }
  
  nothing() {
    console.log("I've not coded this path yet");
  }

}
