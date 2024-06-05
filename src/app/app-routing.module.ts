import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'task',
    loadChildren: () =>
      import('./task/task.module').then((m) => m.TaskPageModule),
  },
  {
    path: 'animation',
    loadChildren: () =>
      import('./animation-study/animation-study.module').then(
        (m) => m.AnimationStudyPageModule
      ),
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./post/post.module').then((m) => m.PostPageModule),
    // потрібно для захисту сторінок від не авторизованої особи
    canActivate: [AuthGuard],
  },
  {
    path: 'directives',
    loadChildren: () =>
      import('./directives/directives.module').then(
        (m) => m.DirectivesPageModule
      ),
    // потрібно для захисту сторінок від не авторизованої особи
    canActivate: [AuthGuard],
  },
  {
    path: 'pipes-numbers',
    loadChildren: () =>
      import('./pipes-study/pipes-numbers/pipes-numbers.module').then(
        (m) => m.PipesNumbersPageModule
      ),
  },
  {
    path: 'text-page',
    loadChildren: () =>
      import('./text-page/text-page.module').then((m) => m.TextPagePageModule),
  },
  {
    path: 'modals-page',
    loadChildren: () =>
      import('./modals-page/modals-page.module').then(
        (m) => m.ModalsPagePageModule
      ),
  },
  {
    path: 'auth-page',
    loadChildren: () =>
      import('./auth-page/auth-page.module').then((m) => m.AuthPagePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
