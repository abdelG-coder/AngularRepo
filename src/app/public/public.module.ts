import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/Shared.module';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    HomeModule
    //RegisterModule
    //LoginModule  mnt il est cparesseux donc on le charge plus ici (root asynchrone)
  ]
})
export class PublicModule { }
