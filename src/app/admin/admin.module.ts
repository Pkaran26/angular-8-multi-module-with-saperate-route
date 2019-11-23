import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule, adminRoutingComponents } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    adminRoutingComponents
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
