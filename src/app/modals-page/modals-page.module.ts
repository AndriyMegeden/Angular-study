import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalsPagePageRoutingModule } from './modals-page-routing.module';

import { ModalsPagePage } from './modals-page.page';
import { ButtonModalComponent } from '../theme/components/button-modal/button-modal.component';
import { NavbarComponent } from '../theme/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from '../navbar.module';
import { ModalsComponent } from '../theme/components/modals/modals.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalsPagePageRoutingModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    HttpClientModule,
    NavbarModule,
    RouterModule,
  ],
  declarations: [ModalsPagePage, ButtonModalComponent, ModalsComponent],
})
export class ModalsPagePageModule {}
