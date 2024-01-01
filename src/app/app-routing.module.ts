import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CMSModule } from '@app/cms/cms.module';
import { AuthGuard } from '@core/guards/auth.guard';
import { AccountModule } from '@app/account/account.module';
import { CMSAdminModule } from '@app/cms-admin/cms-admin.module';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { AdminBikeModule } from './admin-bike/admin-bike.module';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  /* {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: PostsComponent },
      { path: 'post/:id', component: PostComponent }
    ]
  }, */
  {
    path: 'posts',
    loadChildren: () => CMSModule
  },
  {
    path: 'account',
    loadChildren: () => AccountModule
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'bikes',
        loadChildren: () => AdminBikeModule
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => CMSAdminModule
  },
  { path: 'home', component: HomeComponent },
  { path: 'not-found', component: ErrorComponent, data: { message: 'Page Not Found' } },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
