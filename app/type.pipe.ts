import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "type",
  pure: false
})

export class TypePipe implements PipeTransform{
  transform(input: Task[], desiredType) {
    var output: Task[] = [];
    for ( var i = 0; i < input.length; i++ ){
      if (input[i].type === desiredType){
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
