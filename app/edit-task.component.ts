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
        <label>Enter Task ID:</label>
        <input class="form-control" [(ngModel)]="childSelectedTask.id">
        <button class="btn btn-info" (click)="doneClicked()">Done</button>
      </div>
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
