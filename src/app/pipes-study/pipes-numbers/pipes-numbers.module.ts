import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PipesNumbersPageRoutingModule } from './pipes-numbers-routing.module';

import { PipesNumbersPage } from './pipes-numbers.page';
import { FilterPipe } from '../filter.pipe';
import { NavbarModule } from 'src/app/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesNumbersPageRoutingModule,
    NavbarModule
  ],
  declarations: [PipesNumbersPage, FilterPipe]
})
export class PipesNumbersPageModule {}
