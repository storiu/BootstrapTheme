import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'archincer-diagonal-section',
  templateUrl: './diagonal-section.component.html',
  styleUrls: ['./diagonal-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiagonalSectionComponent implements OnInit {

  @Input() mode: string;
  @Input() sectionClass: string;
  @Input() hasTriangle = false;

  constructor() { }

  ngOnInit(): void {
  }

}
