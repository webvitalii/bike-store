import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BikeInterface } from '@app/core/interfaces/bike.interface';
import { BikeService } from '@app/core/services/bike.service';

@Component({
  selector: 'app-bike-list-view',
  templateUrl: './bike-list-view.component.html',
  styleUrls: ['./bike-list-view.component.scss']
})
export class PostsComponent implements OnInit {
  bikes$: Observable<BikeInterface[]>;

  constructor(public bikeService: BikeService) {}

  ngOnInit(): void {
    this.bikes$ = this.bikeService.getAll();
  }
}
