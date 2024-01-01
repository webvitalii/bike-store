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
  postItem: BikeInterface;

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
      .subscribe((post: BikeInterface) => {
        this.postItem = post;
      });
  }

  processFormData($event: any) {
    this.bikeService
      .update({
        ...this.postItem,
        title: $event?.title,
        desc: $event?.desc,
        image: $event?.image
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
