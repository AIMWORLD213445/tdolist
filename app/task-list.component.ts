import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';
import { CompletenessPipe } from './completeness.pipe';
import { PriorityPipe } from './priority.pipe';
import { TypePipe } from './type.pipe';

@Component({
  selector: 'task-list',
  template: `
  <label>Show Tasks by completion:</label>
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="isDone">Show Done</option>
    <option value="notDone">Show Not Done</option>
  </select>
  <label>Show Tasks by priority:</label>
  <select (change)="changePriority($event.target.value)">
    <option value="all">Show all</option>
    <option value="High">High Priority</option>
    <option value="Medium">Medium Priority</option>
    <option value="Low">Low Priority</option>
  </select>
  <label>Show Tasks by type:</label>
  <select (change)="changeType($event.target.value)">
    <option value="all">Show all</option>
    <option value="Home">To Do at Home</option>
    <option value="Work">To Do at Work</option>
    <option value="Hobby">To Do for Hobbies</option>
  </select>

  <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness | priority:selectedPriority | type:selectedType">
     <task-display [task]="currentTask"></task-display>
     <button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
   </div>
  `
})

export class TaskListComponent {
  public selectedCompleteness: string = "notDone";
  public selectedPriority: string = "all";
  public selectedType: string = "all";
  onChange(optionFromMenu){
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  changePriority(optionFromPriorityMenu){
    this.selectedPriority = optionFromPriorityMenu;
    console.log(this.selectedPriority);
  }
  changeType(optionFromTypeMenu){
    this.selectedType = optionFromTypeMenu;
    console.log(this.selectedType);
  }
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task){
    this.clickSender.emit(taskToEdit);
  }
}
