import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimationStudyPage } from './animation-study.page';

const routes: Routes = [
  {
    path: '',
    component: AnimationStudyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimationStudyPageRoutingModule {}
