import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateDirective {
    getDayOfWeek() {
        return new Date().toLocaleString('en-us', {  weekday: 'long' })
    }
}