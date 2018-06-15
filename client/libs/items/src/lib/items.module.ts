import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './pages/items/items.component';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  declarations: [ItemsComponent]
})
export class ItemsModule { }
