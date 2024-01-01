import { Component, OnDestroy, OnInit } from '@angular/core';
import { BikeService } from '@app/core/services/bike.service';
import { BikeInterface } from '@app/core/interfaces/bike.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.scss']
})
export class BikeListComponent implements OnInit, OnDestroy {
  bikes: BikeInterface[] = [];
  bikeSub: Subscription;

  constructor(public bikeService: BikeService) {}

  ngOnInit() {
    this.bikeSub = this.bikeService.getAll().subscribe((bikes) => {
      this.bikes = bikes;
    });
  }

  ngOnDestroy() {
    if (this.bikeSub) {
      this.bikeSub.unsubscribe();
    }
  }
}
