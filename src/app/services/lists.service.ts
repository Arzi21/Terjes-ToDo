import { Injectable } from '@angular/core';

import { TaskInterface } from '../interfaces/task-interface';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor() { }

  taskList:TaskInterface[] = [
    {
      title: "Drink more water",
      details: "They say you should drink around 2 liters of water a day, I need to get on that.",
      date: "Date/Time here"
    },
    {
      title: "Eat more ice",
      details: "Since I am struggling to drink all the water I am supposed to, I have deceided to eat ice in addition to the water I am drinking.",
      date: "Date/Time here"
    },
    {
      title: "Double or nothing",
      details: "If I combine my water drinking and the ice eating, I feel like I would be able to double my water consumption.",
      date: "Date/Time here"
    },
    {
      title: "Triple or nothing?",
      details: "If I combine my water drinking and the ice eating, I feel like I would be able to double my water consumption.",
      date: "Date/Time here"
    }
  ];

  taskListComplete:TaskInterface[] = [
    {
      title: "Setup one awesome project",
      details: "Setup an awesome project! Setup an awesome project. Setup an awesome project, Setup an awesome project?",
      date: "Date/Time here"
    },
    {
      title: "Setup two awesome projects",
      details: "Setup an awesome project! Setup an awesome project. Setup an awesome project, Setup an awesome project?",
      date: "Date/Time here"
    },
    {
      title: "Setup three awesome projects",
      details: "Setup an awesome project! Setup an awesome project. Setup an awesome project, Setup an awesome project?",
      date: "Date/Time here"
    }
  ];

  taskListDelete:TaskInterface[]=[
    {
      title: "Setup four awesome projects",
      details: "Setup an awesome project! Setup an awesome project. Setup an awesome project, Setup an awesome project?",
      date: "Date/Time here"
    },
    {
      title: "Setup five awesome projects",
      details: "Setup an awesome project! Setup an awesome project. Setup an awesome project, Setup an awesome project?",
      date: "Date/Time here"
    }
  ];

  getTasks(){
    return this.taskList;
  }

  getDeletedTasks(){
    return this.taskListDelete;
  }

  getCompletedTasks(){
    return this.taskListComplete;
  }

  deleteTask(taskToDelete:TaskInterface) {
    this.taskList.forEach( 
      (item, index) => {
        if (item === taskToDelete) this.taskList.splice(index, 1);
      }
    );
    this.taskListDelete.push(taskToDelete);
  }

}
