import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({ providedIn: 'root' })
export class NotificationUtil {
  constructor(private nzNotificationService: NzNotificationService) {}

  open(message: string, options = {}): void {
    const optionsDefault = {
      nzDuration: 5000
    };
    const optionsMerged = {
      ...optionsDefault,
      ...options
    };
    //this.matSnackBar.open(message, 'Close', optionsMerged);
    this.nzNotificationService.blank(message, '', optionsMerged);
  }
}
