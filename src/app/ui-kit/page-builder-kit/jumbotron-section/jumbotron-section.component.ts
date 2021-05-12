import { Component, OnInit, Input } from '@angular/core';

import { ScrollPosition } from '../../../core/data/scroll-pos';

@Component({
  selector: 'archincer-jumbotron-section',
  templateUrl: './jumbotron-section.component.html',
  styleUrls: ['./jumbotron-section.component.scss']
})
export class JumbotronSectionComponent implements OnInit {

  @Input() title: string;

  ScrollPosition = ScrollPosition;

  constructor() { }

  ngOnInit(): void {
  }

}
