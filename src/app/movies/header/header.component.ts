import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name: any;
  constructor() {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    console.log(this.name)
  }
}
