import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearProductoPageRoutingModule } from './crear-producto-routing.module';

import { CrearProductoPage } from './crear-producto.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearProductoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearProductoPage]
})
export class CrearProductoPageModule {}
