import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //component: CustomerComponent,
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
