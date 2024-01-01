import { Routes } from '@angular/router';
import { BIKE_LIST_VIEW_ROUTE } from './bike-list-view/bike-list-view.route';
import { BIKE_DETAILS_VIEW_ROUTE } from './bike-details-view/bike-details-view.route';

export const BIKE_VIEW_ROUTE: Routes = [
  {
    path: '',
    children: [
      /*{
        path: '',
        redirectTo: 'bikes',
        pathMatch: 'full'
      },*/
      ...BIKE_LIST_VIEW_ROUTE,
      ...BIKE_DETAILS_VIEW_ROUTE
    ]
  }
];
