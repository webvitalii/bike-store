import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikeViewModule } from '@app/bike-view/bike-view.module';
import { AuthGuard } from '@core/guards/auth.guard';
import { AccountModule } from '@app/account/account.module';
import { CMSAdminModule } from '@app/cms-admin/cms-admin.module';
import { ErrorComponent } from '@shared/components/error/error.component';
import { AdminBikeModule } from './admin-bike/admin-bike.module';

const routes: Routes = [
  {
    path: 'bikes',
    loadChildren: () => BikeViewModule
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
  { path: 'not-found', component: ErrorComponent, data: { message: 'Page Not Found' } },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
