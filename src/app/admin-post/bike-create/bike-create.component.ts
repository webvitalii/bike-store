import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BikeService } from '@app/core/services/bike.service';
import { BikeInterface } from '@app/core/interfaces/bike.interface';

@Component({
  selector: 'app-bike-create',
  templateUrl: './bike-create.component.html',
  styleUrls: ['./bike-create.component.scss']
})
export class BikeCreateComponent implements OnInit, OnDestroy {
  postItem: BikeInterface;

  private unsubscribe$ = new Subject<void>();

  constructor(public router: Router, 
    private postService: BikeService) {}

  ngOnInit() {
  }

  processFormData($event: any) {
    const post: BikeInterface = {
      title: $event?.title,
      desc: $event?.desc,
      image: $event?.image,
      date: new Date()
    };

    this.postService.create(post)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next:(postResponse) => {
          const routerExtras = {
            queryParams: {
              action: 'create'
            }
          };
          this.router.navigate(['/admin', 'posts', postResponse?.id, 'edit'], routerExtras);
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
