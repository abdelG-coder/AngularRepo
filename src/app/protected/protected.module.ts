import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/Shared.module';

import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedComponent } from './protected.component';


@NgModule({
  declarations: [ProtectedComponent],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    // chergement asynchrone : lazy
    // DashboardModule, 
    // ParametersModule,
    // PlanningModule,
    // ProfilModule,
    // WorkdayModule
  ]
})
export class ProtectedModule { }
