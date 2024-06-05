import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPageRoutingModule } from './post-routing.module';

import { PostPage } from './post.page';
import { PostCardComponent } from '../theme/components/post-card/post-card.component';
import { PostFormComponent } from '../theme/components/post-form/post-form.component';
import { NavbarModule } from '../navbar.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPageRoutingModule,
    NavbarModule,
    RouterModule
  ],
  declarations: [PostPage, PostCardComponent, PostFormComponent,]
})
export class PostPageModule {}
