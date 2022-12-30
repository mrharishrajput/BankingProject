import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './module/customer/customer.component';

const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () =>
      import('./module/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: '',
    redirectTo: '/customer',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
