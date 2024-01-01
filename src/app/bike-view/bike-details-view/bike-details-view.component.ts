import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BikeInterface } from '@app/core/interfaces/bike.interface';
import { BikeService } from '@app/core/services/bike.service';

@Component({
  selector: 'app-bike-details-view',
  templateUrl: './bike-details-view.component.html',
  styleUrls: ['./bike-details-view.component.scss']
})
export class PostComponent implements OnInit {
  bike$: Observable<BikeInterface>;

  constructor(private activatedRoute: ActivatedRoute, private bikeService: BikeService) {}

  ngOnInit(): void {
    this.bike$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.bikeService.getById(params.get('bike_id'));
      })
    );
  }
}
