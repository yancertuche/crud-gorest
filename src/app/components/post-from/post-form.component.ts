import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  standalone: false,
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm!: FormGroup;
  isEditMode = false;
  postId!: number;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Crear el formulario reactivo
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });

    // Detectar si se trata de edición (ruta con id)
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.isEditMode = !!this.postId;

    if (this.isEditMode) {
      this.postService.getPost(this.postId).subscribe({
        next: post => this.postForm.patchValue(post),
        error: err => console.error('Error al cargar la publicación para edición', err)
      });
    }
  }

  onSubmit(): void {
    if (this.postForm.invalid) return;

    if (this.isEditMode) {
      this.postService.updatePost(this.postId, this.postForm.value).subscribe({
        next: () => this.router.navigate(['/posts']),
        error: err => console.error('Error al actualizar publicación', err)
      });
    } else {
      this.postService.createPost(this.postForm.value).subscribe({
        next: () => this.router.navigate(['/posts']),
        error: err => console.error('Error al crear publicación', err)
      });
    }
  }
}
