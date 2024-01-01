import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikeViewModule } from '@app/bike-view/bike-view.module';
import { AuthGuard } from '@core/guards/auth.guard';
import { AccountModule } from '@app/account/account.module';
import { ErrorComponent } from '@shared/components/error/error.component';
import { AdminBikeModule } from './admin-bike/admin-bike.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bikes',
    pathMatch: 'full'
  },
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
  { path: 'not-found', component: ErrorComponent, data: { message: 'Page Not Found' } },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
