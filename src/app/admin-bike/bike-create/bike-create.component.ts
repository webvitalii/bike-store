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
  bikeItem: BikeInterface;

  private unsubscribe$ = new Subject<void>();

  constructor(public router: Router, 
    private bikeService: BikeService) {}

  ngOnInit() {
  }

  processFormData($event: any) {
    const bike: BikeInterface = {
      title: $event?.title,
      desc: $event?.desc,
      image: $event?.image,
      date: new Date(),
      bikeType: $event?.bikeType,
      price: $event?.price, 
      qty: $event?.qty,
      rating: $event?.rating
    };

    this.bikeService.create(bike)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next:(bikeResponse) => {
          const routerExtras = {
            queryParams: {
              action: 'create'
            }
          };
          this.router.navigate(['/admin', 'bikes', bikeResponse?.id, 'edit'], routerExtras);
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
