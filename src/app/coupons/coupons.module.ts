import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { ListCouponComponent } from './list-coupon/list-coupon.component';
import { ViewCouponComponent } from './view-coupon/view-coupon.component';



@NgModule({
  declarations: [
    CreateCouponComponent,
    ListCouponComponent,
    ViewCouponComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CouponsModule { }
