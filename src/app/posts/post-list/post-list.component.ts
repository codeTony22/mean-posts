import {Component, OnDestroy, OnInit} from '@angular/core';
import { Post } from '../post.model';
import {PostsService} from '../posts.service';
import { Subscription} from 'rxjs';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
    // posts = [
    //     { title: "First Post", content: "This is the first post's content"},
    //     { title: "Second Post", content: "This is the second post's content"},
    //     { title: "Third Post", content: "This is the third post's content"},
    // ];

    // One way of creating a constructor
    // postsService: PostsService;
    // constructor(postsService: PostsService) {
    //   this.postsService = postsService;
    // }
    // Better way if your object is public
    posts: Post[] = [];
    private postsSub: Subscription;
    constructor(public postsService: PostsService) {}

    ngOnInit(): void {
      // subscription.
      // Three possible arguments
      /**
       * subscribe - let's you have a subscription.
       * Three possible arguments
       * function when new data is emitter
       * function error emitted
       * when the observable is completed. No more arg are expected.
       * */
      this.posts = this.postsService.getPosts();
      this.postsSub = this.postsService.getPostUpdateListener()
        .subscribe((posts: Post[]) => {
          this.posts = posts;
        });
    }
    ngOnDestroy(): void {
      this.postsSub.unsubscribe();
    }
};
