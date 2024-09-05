import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
 /// standalone: true
})
export class FilterpipePipe implements PipeTransform {

  transform(value:any, search:any):any { 
    return value.filter((e : any)=>
    {
      return e.title.toLorweCase.indexOf(search) > -1
    })
    
  }
}
