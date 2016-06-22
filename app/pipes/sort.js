import {Injectable, Pipe, PipeTransform} from 'angular2/core';

/*
  Generated class for the Sort pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'sortk'
})
//@Injectable()
export class SortK{
  /*
    Takes a value and makes it lowercase.
   */
  // transform(value, args) {
  //   value = value + ''; // make sure it's a string
  //   return value.toLowerCase();
  // }

  transform(value, args) {
    console.log("value" + value);
    value.sort((a, b) => {
      debugger;
      if (a.date > b.date) {
        return -1;
      } else if (a.date < b.date) {
        return 1;
      } else {
        return 0;
      }
    });
    
    debugger;
    //value[0].text += 'changed';    
    return value;
  }
}
