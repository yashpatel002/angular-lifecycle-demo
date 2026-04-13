import { Component } from '@angular/core';
import { LifecycleHooksDemoComponent } from './lifecycle-hooks-demo/lifecycle-hooks-demo.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [LifecycleHooksDemoComponent],
    standalone: true
})
export class AppComponent { }