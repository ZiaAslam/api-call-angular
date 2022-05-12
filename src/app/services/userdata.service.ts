import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  url3='https://jsonplaceholder.typicode.com/comments'
  url2='https://jsonplaceholder.typicode.com/posts '
  url = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get(this.url);
  }
  postData(){
    return this.http.get(this.url2)
  }
  commentData(){
    return this.http.get(this.url3)
  }
}
