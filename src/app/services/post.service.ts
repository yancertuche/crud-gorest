import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://gorest.co.in/public/v2/posts';

  // El token se debe configurar en los archivos de entorno (environment.ts)
  private token = environment.token;

  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
    'Content-Type': 'application/json'
  });

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl, { headers: this.headers });
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post, { headers: this.headers });
  }

  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post, { headers: this.headers });
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.headers });
  }
}
