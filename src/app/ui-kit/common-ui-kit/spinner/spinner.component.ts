import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'archincer-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() diameter = 40;

  constructor() { }

  ngOnInit(): void {
  }

}
