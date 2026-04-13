import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LifecycleChildComponent } from './lifecycle-child/lifecycle-child.component';

@Component({
    selector: 'app-lifecycle-hooks-demo',
    standalone: true,
    imports: [CommonModule, FormsModule, LifecycleChildComponent],
    templateUrl: './lifecycle-hooks-demo.component.html',
    styleUrls: ['./lifecycle-hooks-demo.component.css']
})
export class LifecycleHooksDemoComponent {
    childTitle: string = 'Initial Title';
    childCount: number = 0;
    childVisible: boolean = true;
    logs: string[] = [];

    addLog(message: string) {
        const timestamp = new Date().toLocaleTimeString();
        this.logs = [`[${timestamp}] ${message}`, ...this.logs];
    }

    ngOnInit() {
        this.addLog('Parent: ngOnInit - Component initialized');
    }

    updateTitle(newTitle: string) {
        this.childTitle = newTitle;
        this.addLog(`Parent: Title updated to "${newTitle}"`);
    }

    incrementCount() {
        this.childCount++;
        this.addLog(`Parent: Count incremented to ${this.childCount}`);
    }

    toggleChildVisibility() {
        this.childVisible = !this.childVisible;
        this.addLog(`Parent: Child component ${this.childVisible ? 'SHOWN' : 'HIDDEN'}`);
    }

    clearLogs() {
        this.logs = [];
    }

    getLogClass(log: string): string {
        if (log.includes('Parent:')) {
            return 'parent';
        } else if (log.includes('Grandchild:')) {
            return 'grandchild';
        } else if (log.includes('Child:')) {
            return 'child';
        }
        return '';
    }

    onChildLog(message: string): void {
        this.addLog(message);
    }
}