import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerdashboardComponent } from './customer/customerdashboard/customerdashboard.component';
import { LoginComponent } from './customer/login/login.component';
import { RegisterComponent } from './customer/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'dashboard', component: CustomerdashboardComponent },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
