
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompanyComponent } from './components/company/company.component';
import { ViewEmployeeComponent } from './components/company/view-employee/view-employee.component';

const routes: Routes = [
  {path: 'dashboard', children : [
    {path : '', redirectTo: 'employee', pathMatch: 'full'},
  {path: 'employee', component: EmployeeComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'company/:id', component: ViewEmployeeComponent},
  {path: 'addemployee', component: AddemployeeComponent},
  {path: 'deleteemployee', component: DeleteEmployeeComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
