import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { PiesListComponent } from './pies-list.component';
import { TaskListComponent } from './task-list.component';
import { EditTaskComponent } from './edit-task.component';
import { NewTaskComponent } from './new-task.component';
import { TaskComponent } from './task.component';
import { CompletenessPipe } from './completeness.pipe';
import { PriorityPipe } from './priority.pipe';
import { TypePipe } from './type.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PiesListComponent,
    TaskListComponent,
    EditTaskComponent,
    NewTaskComponent,
    CompletenessPipe,
    PriorityPipe,
    TypePipe,
    TaskComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
