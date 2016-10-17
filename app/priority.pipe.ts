import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "priority",
  pure: false
})

export class PriorityPipe implements PipeTransform{
  transform(input: Task[], desiredPriority){
    var output: Task[]=[];
    for(var i =0;i<input.length;i++){
      if(input[i].priority===desiredPriority){
        output.push(input[i]);
      }
    }
    if(output.length>0){
      return output;
    }else{
      return input;
    }
  }
}
