import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BIKE_VIEW_ROUTE } from './bike-view.route';

import { SharedModule } from '@shared/shared.module';
import { PostsComponent } from './bike-list-view/bike-list-view.component';
import { PostComponent } from './bike-details-view/bike-details-view.component';

const routesCMS: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      // { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: PostsComponent },
      { path: ':post_id/view', component: PostComponent }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(BIKE_VIEW_ROUTE), SharedModule],
  exports: [RouterModule],
  declarations: [PostsComponent, PostComponent]
})
export class BikeViewModule {}
