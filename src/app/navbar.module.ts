import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './theme/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [CommonModule, RouterModule ],
})
export class NavbarModule {}
