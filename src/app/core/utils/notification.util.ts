import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationUtil {
  constructor() {}

  open(message: string, options = {}): void {
    const optionsDefault = {
      duration: 5000
    };
    const optionsMerged = {
      ...optionsDefault,
      ...options
    };
    //this.matSnackBar.open(message, 'Close', optionsMerged);
  }
}
