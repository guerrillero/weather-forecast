import { Component, signal } from '@angular/core';

@Component({
	imports: [],
	selector: 'app-top',
	styleUrl: './top.css',
	templateUrl: './top.html',
})
export class Top {
	readonly today = signal(new Date().toLocaleDateString([], {
		month: 'short',
		day: '2-digit',
		year: '2-digit'
	}));

	readonly time = signal(new Date().toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true
	}));
	readonly broadcasting = signal("LIVE · NWS MLB");
}
