import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteBancairePageRoutingModule } from './carte-bancaire-routing.module';

import { CarteBancairePage } from './carte-bancaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteBancairePageRoutingModule
  ],
  declarations: [CarteBancairePage]
})
export class CarteBancairePageModule {}
