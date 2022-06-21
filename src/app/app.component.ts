import { Component, Renderer2 } from '@angular/core';

import { TaskInterface } from './interfaces/task-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private renderer: Renderer2,
    
  ){}

  title = 'Terjes To-Do List';
  rememberance = false;

  taskList:TaskInterface[] = [
    {
      title: "Drink more water",
      description: "They say you should drink around 2 liters of water a day, I need to get on that.",
      date: "Date/Time here"
    },
    {
      title: "Eat more ice",
      description: "Since I am struggling to drink all the water I am supposed to, I have deceided to eat ice in addition to the water I am drinking.",
      date: "Date/Time here"
    },
    {
      title: "Double or nothing",
      description: "If I combine my water drinking and the ice eating, I feel like I would be able to double my water consumption.",
      date: "Date/Time here"
    }
  ];

  taskListComplete:TaskInterface[] = [
    {
      title: "Setup an awesome project",
      description: "Setup an awesome project! Setup an awesome project. Setup an awesome project, Setup an awesome project?",
      date: "Date/Time here"
    }
  ]

  setSelectedTask(selectedTask: any) {
    if (this.rememberance) {
      this.renderer.setStyle(this.rememberance, 'border', 'none');
    }
    this.renderer.setStyle(selectedTask, 'border', 'solid 2px darkblue');
    this.rememberance = selectedTask;
  }

}
