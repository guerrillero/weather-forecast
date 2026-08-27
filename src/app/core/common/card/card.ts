import { Component, input } from '@angular/core';
import { ICard } from './card.model';

@Component({
	imports: [],
	selector: 'app-card',
	styleUrl: './card.css',
	templateUrl: './card.html',
})
export class Card {
	readonly card = input.required<ICard>({});
}
