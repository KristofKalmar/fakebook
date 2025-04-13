import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(date: Date): string {
    return date.getFullYear() + "." + date.getMonth() + 1 + "." + date.getDay() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }

}
