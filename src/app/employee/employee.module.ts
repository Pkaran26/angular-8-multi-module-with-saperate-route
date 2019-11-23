import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule, employeeRoutingComponents } from './employee-routing.module';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    employeeRoutingComponents
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  exports: [EmployeeComponent]
})
export class EmployeeModule { }
