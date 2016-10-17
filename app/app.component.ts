import{ Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <pies></pies>
    <task-list
      [childTaskList]="masterTaskList" (clickSender)="showDetails($event)">
    </task-list>
    <new-task (newTaskSender) = 'addTask($event)'></new-task>
    <edit-task
      [childSelectedTask] = "selectedTask"
      (doneClickedSender) = "finishedEditing()"
    ></edit-task>
  </div>
    `
})

export class AppComponent {


  public masterTaskList: Task[] = [
    new Task("Do the dishes.", "High","Home"),
    new Task("Buy chocolate.", "Low","Home"),
    new Task("Wash the laundry.", "High","Home"),
    new Task("Practice origami.","Low","Hobby"),
    new Task("Bake a pie.","Low","Hobby"),
    new Task("Update website.", "High","Work"),
    new Task("Go to meeting.", "Medium","Work"),
    new Task("Clean ceiling.", "Low","Work")
  ];



  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }
}
