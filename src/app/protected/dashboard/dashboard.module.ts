import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/Shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DachboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    DachboardRoutingModule
  ]
})
export class DashboardModule { }
