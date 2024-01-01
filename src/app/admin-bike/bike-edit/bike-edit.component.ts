import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subject, takeUntil } from 'rxjs';
import { NotificationUtil } from '@core/utils/notification.util';
import { BikeService } from '@app/core/services/bike.service';
import { BikeInterface } from '@app/core/interfaces/bike.interface';

@Component({
  selector: 'app-bike-edit',
  templateUrl: './bike-edit.component.html',
  styleUrls: ['./bike-edit.component.scss']
})
export class BikeEditComponent implements OnInit, OnDestroy {
  bikeItem: BikeInterface;

  private unsubscribe$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute, 
    private bikeService: BikeService, 
    private notificationUtil: NotificationUtil) {
      if (this.activatedRoute.snapshot.queryParamMap.get('action') === 'create') {
        this.notificationUtil.open('Created successfully');
      }
    }

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return this.bikeService.getById(params.get('bike_id'));
        })
      )
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((bike: BikeInterface) => {
        this.bikeItem = bike;
      });
  }

  processFormData($event: any) {
    this.bikeService
      .update({
        ...this.bikeItem,
        title: $event?.title,
        desc: $event?.desc,
        image: $event?.image,
        bikeType: $event?.bikeType,
        price: $event?.price,
        qty: $event?.qty
      })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.notificationUtil.open('Updated successfully');
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
