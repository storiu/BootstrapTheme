import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'archincer-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss']
})
export class LikeButtonComponent implements OnInit {

  @Input() liked: boolean;
  @Output() likedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  changeLiked(): void {
    this.liked = !this.liked;
    this.likedChange.emit(this.liked);
  }

}
