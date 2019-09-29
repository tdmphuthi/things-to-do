import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  private todoList: string[];
  private isAdding = false;
  newItem = new FormControl('');

  constructor() { }

  ngOnInit() {
    // Read from local storage
    this.todoList = JSON.parse(window.localStorage.getItem('todo-list')) || [];
  }

  add(item) {
    this.todoList.push(item);
    this.isAdding = false;
    this.newItem.reset();

    // Write to local storage
    window.localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }
}
