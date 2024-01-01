import { Routes } from '@angular/router';
import { BikeEditComponent } from './bike-edit.component';

export const BIKE_EDIT_ROUTE: Routes = [
  {
    path: ':bike_id/edit',
    component: BikeEditComponent
  }
];
