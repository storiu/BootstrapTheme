import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'archincer-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hasShadow = false;

  constructor() { }

  ngOnInit(): void {
  }

}
