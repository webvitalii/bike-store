import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ADMIN_BIKE_ROUTE } from './admin-bike.route';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeCreateComponent } from './bike-create/bike-create.component';
import { BikeEditComponent } from './bike-edit/bike-edit.component';
import { BikeFormComponent } from './bike-form/bike-form.component';

@NgModule({
  declarations: [BikeListComponent, BikeCreateComponent, BikeEditComponent, BikeFormComponent],
  imports: [RouterModule.forChild(ADMIN_BIKE_ROUTE), SharedModule]
})
export class AdminBikeModule {}
