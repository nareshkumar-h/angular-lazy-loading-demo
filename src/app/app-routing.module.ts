import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { CreateCouponComponent } from './coupons/create-coupon/create-coupon.component';
import { ListCouponComponent } from './coupons/list-coupon/list-coupon.component';
import { ViewCouponComponent } from './coupons/view-coupon/view-coupon.component';

//Nested Routes ( we don't need to add prefix "coupons/" in all the components in coupon module)
const routes: Routes = [
  {path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'books', loadChildren: () => import('./books/book.module').then(m => m.BookModule)},
  {path:'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},

  // {path:'coupons', component:ListCouponComponent, canActivate:[AuthGuard, AdminGuard]},
  // {path:'coupons/new', component:CreateCouponComponent, canActivate:[AuthGuard,AdminGuard]},
  // {path:'coupons/:id', component:ViewCouponComponent, canActivate:[AuthGuard,AdminGuard]},

  {
    path:'coupons', canActivate:[AuthGuard, AdminGuard],
    children:[
      {path:'', component:ListCouponComponent},
      {path:'new', component:CreateCouponComponent},
      {path:':id', component:ViewCouponComponent}
    ]},
  {path:'', redirectTo:'auth/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
