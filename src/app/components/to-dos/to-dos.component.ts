import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  todos:Todo[];

  name:string = 'James Telang';

  changeName(newName:string):void {
    this.name = newName;
  }

  constructor(private todoService:TodoService) { 
    this.changeName('James');
    console.log('3 2 1');
  }

  ngOnInit() {
    console.log(this.todoService);
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

}
