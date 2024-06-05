import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimationStudyPageRoutingModule } from './animation-study-routing.module';

import { AnimationStudyPage } from './animation-study.page';
import { CubeAnimationComponent } from '../theme/components/cube-animation/cube-animation.component';
import { DotAnimationComponent } from '../theme/components/dot-animation/dot-animation.component';
import { PhoneAnimationsComponent } from '../theme/components/phone-animations/phone-animations.component';
import { NavbarModule } from '../navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimationStudyPageRoutingModule,
    NavbarModule
  ],
  declarations: [AnimationStudyPage,
    PhoneAnimationsComponent,
    CubeAnimationComponent, 
    DotAnimationComponent]
})
export class AnimationStudyPageModule {}
