import { NgModule } from '@angular/core';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzElementPatchModule } from 'ng-zorro-antd/core/element-patch';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule, NzImageService } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzListModule } from 'ng-zorro-antd/list';

const antModules = [
  NzImageModule,
  NzEmptyModule,
  NzDatePickerModule,
  NzProgressModule,
  NzUploadModule,
  NzButtonModule,
  NzInputModule,
  NzRateModule,
  NzRadioModule,
  NzTagModule,
  NzIconModule,
  NzCardModule,
  NzTableModule,
  NzTypographyModule,
  NzSpinModule,
  NzPageHeaderModule,
  NzBreadCrumbModule,
  NzFormModule,
  NzSelectModule,
  NzInputNumberModule,
  NzLayoutModule,
  NzTabsModule,
  NzAutocompleteModule,
  NzCollapseModule,
  NzModalModule,
  NzStepsModule,
  NzDescriptionsModule,
  NzCheckboxModule,
  NzAlertModule,
  NzDividerModule,
  NzResultModule,
  NzToolTipModule,
  NzNotificationModule,
  NzPopconfirmModule,
  NzDropDownModule,
  NzElementPatchModule,
  NzListModule
];

@NgModule({
  imports: [...antModules],
  exports: [...antModules],
  providers: [NzImageService]
})
export class AntModule {}
