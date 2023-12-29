import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoadingComponent } from './components/loading/loading.component';

const sharedComponents = [LoadingComponent];

@NgModule({
  declarations: [...sharedComponents],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [...sharedComponents, CommonModule, RouterModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
