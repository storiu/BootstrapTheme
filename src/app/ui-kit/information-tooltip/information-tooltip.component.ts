import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'archincer-information-tooltip',
  templateUrl: './information-tooltip.component.html',
  styleUrls: ['./information-tooltip.component.scss']
})
export class InformationTooltipComponent implements OnInit {

  @Input() placement = 'top';
  @Input() content = '';
  @Input() htmlContent: string;
  @Input() size = 18;
  @Input() hideAnchor = false;
  @Input() width = 'auto';
  @Input() hideBorder = false;

  constructor() { }

  ngOnInit(): void {
  }

}
