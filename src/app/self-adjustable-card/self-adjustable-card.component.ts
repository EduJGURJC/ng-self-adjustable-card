import { fxLayoutAlignHorizontal, fxLayoutAlignVertical } from '../models/fx-layout-align.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'self-adjustable-card',
  templateUrl: './self-adjustable-card.component.html',
  styleUrls: ['./self-adjustable-card.component.css'],
})
export class SelfAdjustableCardComponent implements OnInit {
  @Input() private titleAlignHorizontal: fxLayoutAlignHorizontal = '';
  @Input() private titleAlignVertical: fxLayoutAlignVertical = '';

  @Input() private contentAlignHorizontal: fxLayoutAlignHorizontal = '';
  @Input() private contentAlignVertical: fxLayoutAlignVertical = '';

  constructor() {}

  ngOnInit() {}
}
