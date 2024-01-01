import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BikeInterface } from '@app/core/interfaces/bike.interface';
import { BikeService } from '@app/core/services/bike.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bike-list-view',
  templateUrl: './bike-list-view.component.html',
  styleUrls: ['./bike-list-view.component.scss']
})
export class PostsComponent implements OnInit {
  bikes$: Observable<BikeInterface[]>;
  usersOnline: any[];

  constructor(public bikeService: BikeService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.bikes$ = this.bikeService.getAll();
    this.fetchUsersOnline();
  }

  fetchUsersOnline(): void {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users/';

    this.httpClient.get(apiUrl)
      .subscribe({
        next: (response: any) => {
          this.usersOnline = response;
        },
        error: (error: any) => {
          console.error('Error fetching users online data:', error);
        }
      });
  }
}
