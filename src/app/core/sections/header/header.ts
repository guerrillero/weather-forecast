import { Component, input } from '@angular/core';

interface IHeaderProps {
	eyebrow: string;
	title: string;
	description: string;
}

@Component({
	imports: [],
	selector: 'app-header',
	styleUrl: './header.css',
	templateUrl: './header.html',
})
export class Header {
	readonly data = input.required<IHeaderProps>();
}
