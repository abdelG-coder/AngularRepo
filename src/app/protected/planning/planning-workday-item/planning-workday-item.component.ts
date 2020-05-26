import { Component, Input, OnChanges, SimpleChange, EventEmitter, Output, } from '@angular/core';
import { Workday } from 'src/app/shared/models/workday';
import { Router } from '@angular/router';

@Component({
  selector: 'al-planning-workday-item',
  templateUrl: './planning-workday-item.component.html'
})
export class PlanningWorkdayItemComponent {

  @Input() workday: Workday; // nouveau, tout le reste a été nettoyé :)

  @Output() workdayRemoved = new EventEmitter<Workday>(); //  On émet directement une Workday.



  constructor(private router: Router) {}

  
  goWorkday(workday: Workday) {
    this.router.navigate(
     ['app/workday'], 
     { 
      queryParams: { 
       date: workday.dueDate 
      } 
     }
    );
   }

  removeWorkday() {
    this.workdayRemoved.emit(this.workday);
  }
}
