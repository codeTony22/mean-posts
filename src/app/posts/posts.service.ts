import { Post } from './post.model';
import {Injectable} from '@angular/core';


// Angular will find and it will create only one instance of this Service.
// Injectable from @angular/core
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];


  getPosts() {
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content};
    this.posts.push(post);
  }
}
