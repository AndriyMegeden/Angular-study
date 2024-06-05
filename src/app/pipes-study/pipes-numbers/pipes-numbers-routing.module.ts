import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipesNumbersPage } from './pipes-numbers.page';

const routes: Routes = [
  {
    path: '',
    component: PipesNumbersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipesNumbersPageRoutingModule {}
