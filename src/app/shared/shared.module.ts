import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntModule } from './ant.module';

import { LoadingComponent } from './components/loading/loading.component';

const sharedComponents = [LoadingComponent];

const sharedModules = [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, AntModule];

@NgModule({
  declarations: [...sharedComponents],
  imports: [...sharedModules],
  exports: [...sharedComponents, ...sharedModules]
})
export class SharedModule {}
