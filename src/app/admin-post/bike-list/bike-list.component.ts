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
  posts: BikeInterface[] = [];
  postSub: Subscription;
  deleteSub: Subscription;

  constructor(private postService: BikeService) {}

  ngOnInit() {
    this.postSub = this.postService.getAll().subscribe((posts) => {
      this.posts = posts;
    });
  }

  remove(id: string) {
    this.deleteSub = this.postService.remove(id).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== id);
    });
  }

  ngOnDestroy() {
    if (this.postSub) {
      this.postSub.unsubscribe();
    }

    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
  }
}
