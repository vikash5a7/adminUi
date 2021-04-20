import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @Input() bgClass: string;
  @Input() data: number;
  name: string;
  constructor() { }
  time: Date // global variable for string interpolation on html
  ngOnInit() { 
    this.getCurrentDate();
    this.name = localStorage.getItem('User');
  }
  getCurrentDate() {
    setInterval(() => {
      this.time = new Date(); //set time variable with current date 
    }, 1000); // set it every one seconds}
  }
}
