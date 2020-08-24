import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteBancairePage } from './carte-bancaire.page';

const routes: Routes = [
  {
    path: '',
    component: CarteBancairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteBancairePageRoutingModule {}
