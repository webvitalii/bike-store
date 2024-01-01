import { Routes } from '@angular/router';
import { PostComponent } from './bike-details-view.component';

export const BIKE_DETAILS_VIEW_ROUTE: Routes = [
  {
    path: ':bike_id',
    component: PostComponent
  }
];
