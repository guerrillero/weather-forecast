import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, timer } from 'rxjs';
import { TemperatureUnit } from '../../../service/temperature-unit';
import { TemperatureUnitSelector } from "../../common/temperature-unit-selector/temperature-unit-selector";

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-top',
	styleUrl: './top.css',
	templateUrl: './top.html',
 imports: [TemperatureUnitSelector],
})
export class Top {

	private readonly currentDate = toSignal(timer(0, 60_000).pipe(map(() => new Date())), {
		initialValue: new Date(),
	});

	protected readonly broadcasting = 'LIVE · NWS MLB';

	protected readonly today = computed(() =>
		this.currentDate().toLocaleDateString('en-US', {
			month: 'short',
			day: '2-digit',
			year: '2-digit',
		}),
	);

	protected readonly time = computed(() =>
		this.currentDate().toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: true,
		}),
	);


}
