import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateDirective {
    getDayOfWeek() {
        return new Date().toLocaleString('en-us', {  weekday: 'long' })
    }

    weekOrderSwitch(dayIndex: string): any{
      switch(dayIndex){
        case "Sunday": {
          return { Sunday: 1, Monday: 2, Tuesday: 3, Wednesday: 4, Thursday: 5, Friday: 6, Saturday: 7 };
        }
        case "Monday": {
          return { Sunday: 7, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };
        }
        case "Tuesday": {
          return { Sunday: 6, Monday: 7, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5 };
        }
        case "Wednesday": {
          return { Sunday: 5, Monday: 6, Tuesday: 7, Wednesday: 1, Thursday: 2, Friday: 3, Saturday: 4 };
        }
        case "Thursday": {
          return { Sunday: 4, Monday: 5, Tuesday: 6, Wednesday: 7, Thursday: 1, Friday: 2, Saturday: 3 };
        }
        case "Friday": {
          return { Sunday: 3, Monday: 4, Tuesday: 5, Wednesday: 6, Thursday: 7, Friday: 1, Saturday: 2 };
        }
        case "Saturday": {
          return { Sunday: 2, Monday: 3, Tuesday: 4, Wednesday: 5, Thursday: 6, Friday: 7, Saturday: 1 };
        }
      }
    }
}