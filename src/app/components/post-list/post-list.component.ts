import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  standalone: false,
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe({
      next: data => this.posts = data,
      error: err => console.error('Error al obtener publicaciones', err)
    });
  }

  deletePost(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta publicación?')) {
      this.postService.deletePost(id).subscribe({
        next: () => this.posts = this.posts.filter(post => post.id !== id),
        error: err => console.error('Error al eliminar publicación', err)
      });
    }
  }
}
