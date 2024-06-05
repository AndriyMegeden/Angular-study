import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RestApiComponent } from '../theme/components/rest-api/rest-api.component';
import { NavbarModule } from '../navbar.module';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    NavbarModule,
    RouterModule


   
  ],
  declarations: [HomePage, RestApiComponent,],
})
export class HomePageModule {}
