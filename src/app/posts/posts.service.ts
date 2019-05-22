import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';


// Angular will find and it will create only one instance of this Service.
// Injectable from @angular/core
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title, content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
