import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemDetailPage } from './item-detail/item-detail.page';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    ItemDetailPage
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    QRCodeModule
  ]
})
export class ItemsModule { }
