import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ImagePreviewDialogService } from '../../../shared/image-preview-dialog/image-preview-dialog.service';

@Component({
  selector: 'archincer-image-renderer',
  templateUrl: './image-renderer.component.html',
  styleUrls: ['./image-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageRendererComponent implements OnInit {

  @Input() src;
  @Input() alt = 'images';
  @Input() height = 65;
  @Input() readonly =  true;
  @Input() objectFit = 'cover';
  @Input() hasPreview =  false;
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private imagePreviewDialogService: ImagePreviewDialogService
  ) { }

  ngOnInit(): void {
  }

  preview(): void {
    this.imagePreviewDialogService.openImagePreviewDialog(this.src);
  }

}
