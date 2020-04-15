import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/Shared.module';
import { PlanningComponent } from './planning/planning.component';
import { PlanningWorkdayListComponent } from './planning-workday-list/planning-workday-list.component';
import { PlanningWorkdayItemComponent } from './planning-workday-item/planning-workday-item.component';
import { PlanningrRoutingModule } from './planning-routing.module';



@NgModule({
  declarations: [PlanningComponent, PlanningWorkdayListComponent, PlanningWorkdayItemComponent],
  imports: [
    SharedModule,
    PlanningrRoutingModule
  ]
})
export class PlanningModule { }
