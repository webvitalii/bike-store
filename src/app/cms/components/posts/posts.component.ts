import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BikeInterface } from '@app/core/interfaces/bike.interface';
import { BikeService } from '@app/core/services/bike.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<BikeInterface[]>;

  constructor(public postService: BikeService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getAll();
  }
}
