import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'books', loadChildren: () => import('./books/book.module').then(m => m.BookModule)},
  {path:'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},
  {path:'', redirectTo:'auth/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
