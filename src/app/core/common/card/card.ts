import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ICard } from './card.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  readonly card = input.required<ICard>();
}
