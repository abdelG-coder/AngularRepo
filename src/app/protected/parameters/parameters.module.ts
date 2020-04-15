import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/Shared.module';
import { ParametersComponent } from './parameters/parameters.component';
import { ParameterRoutingModule } from './parameters-routing.module';

@NgModule({
  declarations: [ParametersComponent],
  imports: [
    SharedModule,
    ParameterRoutingModule
  ]
})
export class ParametersModule { }
