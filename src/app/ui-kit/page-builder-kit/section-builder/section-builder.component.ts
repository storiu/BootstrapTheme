import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'archincer-section-builder',
  templateUrl: './section-builder.component.html',
  styleUrls: ['./section-builder.component.scss']
})
export class SectionBuilderComponent implements OnInit {

  @Input() header: string;
  @Input() title: string;
  @Input() description: string;
  @Input() isWhite = true;
  @Input() hasBottomPadding = true;
  @Input() sectionClass = '';
  @Input() titleClass = '';
  @Input() align = 'center';
  @Input() container = true;

  constructor() { }

  ngOnInit(): void {
  }

}
