import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="childSelectedTask">
      <h1>Edit Task</h1>
      <div class="form-group">
        <label>Enter Task Description:</label>
        <input class="form-control" [(ngModel)]="childSelectedTask.description">
      </div>
      <div class="form-group">
        <label>Enter Task Priority:</label>
        <input type="radio" name="priority" [(ngModel)]="childSelectedTask.priority" value='High'> High Priority
        <input type="radio" name="priority" [(ngModel)]="childSelectedTask.priority" value='Medium'> Medium Priority
        <input type="radio" name="priority" [(ngModel)]="childSelectedTask.priority" value='Low'> Low Priority
      </div>
      <div class="form-group">
        <label>Enter Task Type</label>
        <input type="radio" name="type" value="Home" [(ngModel)]="childSelectedTask.type"> Home
        <input type="radio" name="type" value="Work" [(ngModel)]="childSelectedTask.type"> Work
        <input type="radio" name="type" value="Hobby" [(ngModel)]="childSelectedTask.type">  Hobby
      </div>
        <button class="btn btn-info" (click)="doneClicked()">Done</button>

    </div>
  `
})

export class EditTaskComponent{
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked () {
    this.doneClickedSender.emit();
  }
}
