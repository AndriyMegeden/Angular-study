import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectivesPageRoutingModule } from './directives-routing.module';

import { DirectivesPage } from './directives.page';
import { StyleDirective } from './style.directive';
import { IfnotDirective } from './ifnot.directive';
import { NavbarModule } from '../navbar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectivesPageRoutingModule,
    FormsModule,
    NavbarModule,
    RouterModule
  ],
  declarations: [DirectivesPage, StyleDirective, IfnotDirective,  ]
})
export class DirectivesPageModule {}
