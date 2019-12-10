import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name:string = 'Ninad Telang';
  constructor() {
    this.changeName('Ninad');
    console.log('1 2 3');
  }
  changeName(newName:string):void {
    this.name = newName;
  }
  
}
