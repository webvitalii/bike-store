import { Routes } from '@angular/router';
import { BIKE_LIST_ROUTE } from './bike-list/bike-list.route';
import { BIKE_CREATE_ROUTE } from './bike-create/bike-create.route';
import { BIKE_EDIT_ROUTE } from './bike-edit/bike-edit.route';

export const ADMIN_BIKE_ROUTE: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      ...BIKE_LIST_ROUTE,
      ...BIKE_CREATE_ROUTE,
      ...BIKE_EDIT_ROUTE
    ]
  }
];
