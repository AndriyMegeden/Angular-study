import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextPagePage } from './text-page.page';

const routes: Routes = [
  {
    path: '',
    component: TextPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextPagePageRoutingModule {}
