import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextPagePageRoutingModule } from './text-page-routing.module';

import { TextPagePage } from './text-page.page';
import { TextOpenComponent } from '../theme/components/text-open/text-open.component';
import { NavbarModule } from '../navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextPagePageRoutingModule,
    NavbarModule,
  ],
  declarations: [TextPagePage, TextOpenComponent]
})
export class TextPagePageModule {}
