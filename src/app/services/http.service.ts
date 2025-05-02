import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getTodos() {
    return this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getTodoById(id: number) {
    return this.httpClient.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
