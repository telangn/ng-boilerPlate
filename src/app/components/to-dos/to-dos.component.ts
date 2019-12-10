import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  name:string = 'James Telang';

  changeName(newName:string):void {
    this.name = newName;
  }

  constructor() { 
    this.changeName('James');
    console.log('3 2 1');
  }

  ngOnInit() {
  }

}
