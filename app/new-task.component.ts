import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
selector: 'new-task',
template:
  `  <h1>New Task</h1>
    <div>
      <label> Enter Task Description: </label>
      <input class="form-control" #newDescription>
    </div>
    <div>
      <label> Enter Task Priority: </label>
      <div (change)="changePriority($event.target.value)">
        <input type="radio" name='priority' value='High' >  High Priority<br>
        <input type="radio" name='priority' value='Medium' >  Medium Priority<br>
        <input type="radio" name='priority' value='Low'>  Low Priority
      </div>

    </div>
    <div>
      <label> Enter Task Type: </label>
      <div (change)="changeType($event.target.value)">
        <input type="radio" name='type' value='Home' >  Home<br>
        <input type="radio" name='type' value='Work' >  Work<br>
        <input type="radio" name='type' value='Hobby'>  Hobby
      </div>

      <button class="btn btn-success" (click)=
        "addClicked(newDescription.value);
        newDescription.value='';">Add</button>
    </div>`

})

export class NewTaskComponent {
  public selectedPriority:string="None";
  public selectedType: string ="None";
  changePriority(optionFromPriorityMenu){
    this.selectedPriority = optionFromPriorityMenu;
    console.log(this.selectedPriority);
  }
  changeType(optionFromTypeyMenu){
    this.selectedType = optionFromTypeyMenu;
    console.log(this.selectedType);
  }
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string) {
    var newTaskToAdd: Task = new Task(description, this.selectedPriority,this.selectedType);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
