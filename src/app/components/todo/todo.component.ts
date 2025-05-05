import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CommonModule } from '@angular/common';
import { Todo } from '../../interfaces/todo';
import { MatChipsModule } from '@angular/material/chips';
import { LoadingOverlayComponent } from '../loading-overlay/loading-overlay.component';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, MatChipsModule, LoadingOverlayComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  isLoading: boolean = true;
  todos: Todo[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.httpService.getTodos().subscribe({
      next: (res) => {
        this.isLoading = false;
        this.todos = res;
      },
      error: () => {
        this.isLoading = false;
        alert('Failed to fetch data!');
      },
    });
  }

  onClickTodo(data: Todo) {
    this.isLoading = true;
    this.httpService.getTodoById(data.id).subscribe({
      next: (res) => {
        this.isLoading = false;
        alert(`Response from API: ${JSON.stringify(res)}`);
      },
      error: (err) => {
        this.isLoading = false;
        alert(`Response from API: ${JSON.stringify(err)}`);
      },
    });
  }
}
