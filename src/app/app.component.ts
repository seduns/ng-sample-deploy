import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TodoList';

  ngOnInit(): void {
      
  }

  constructor() {}

  isClick: boolean = false


  btnClick(): void {
    this.isClick = !this.isClick;
    console.log(this.isClick);
  }
}
