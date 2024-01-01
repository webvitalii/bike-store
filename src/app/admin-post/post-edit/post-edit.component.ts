import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subject, takeUntil } from 'rxjs';
import { NotificationUtil } from '@core/utils/notification.util';
import { BikeService } from '@app/core/services/bike.service';
import { BikeInterface } from '@app/core/interfaces/bike.interface';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit, OnDestroy {
  postItem: BikeInterface;

  private unsubscribe$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute, 
    private postService: BikeService, 
    private notificationUtil: NotificationUtil) {
      if (this.activatedRoute.snapshot.queryParamMap.get('action') === 'create') {
        this.notificationUtil.open('Created successfully');
      }
    }

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return this.postService.getById(params.get('post_id'));
        })
      )
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((post: BikeInterface) => {
        this.postItem = post;
      });
  }

  processFormData($event: any) {
    this.postService
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
