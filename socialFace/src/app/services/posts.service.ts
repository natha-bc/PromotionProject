import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { POSTS_URL } from '../constants/constants';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(public http: HttpClient) {
  }

  getPosts():Observable<Post[]> { 
    return this.http.get<Post[]>(POSTS_URL);
  }

  likePost(post: Post): Observable<Post> {
    return this.http.put<Post>(POSTS_URL + `/${post.id}`, {...post, likes: post.likes + 1}, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  dislikePost(post: Post): Observable<Post> {
    return this.http.post<Post>(POSTS_URL + `/${post.id}`, {...post, likes: post.likes - 1}, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  addComment(post:Post): Observable<Post> {
    return this.http.put<Post>(POSTS_URL + `/${post.id}`, {...post}, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}
