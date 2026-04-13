import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    DoCheck,
    SimpleChanges,
    ViewChild,
    ContentChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LifecycleGrandchildComponent } from '../lifecycle-grandchild/lifecycle-grandchild.component';

@Component({
    selector: 'app-lifecycle-child',
    standalone: true,
    imports: [CommonModule, FormsModule, LifecycleGrandchildComponent],
    templateUrl: './lifecycle-child.component.html',
    styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    DoCheck {

    @Input() title: string = 'Default Title';
    @Input() count: number = 0;
    @Output() logEvent = new EventEmitter<string>();

    @ViewChild(LifecycleGrandchildComponent) grandchildComponent!: LifecycleGrandchildComponent;
    @ContentChild('ng-content') contentChild: any;

    childMessage: string = 'Child Component Message';
    previousTitle: string = '';
    previousCount: number = 0;
    changeDetectionCount: number = 0;

    ngOnChanges(changes: SimpleChanges): void {
        this.logEvent.emit('Child: ngOnChanges - Input properties have changed');

        if (changes['title']) {
            this.logEvent.emit(`  └─ title changed: "${changes['title'].previousValue}" → "${changes['title'].currentValue}"`);
            this.previousTitle = changes['title'].currentValue;
        }
        if (changes['count']) {
            this.logEvent.emit(`  └─ count changed: ${changes['count'].previousValue} → ${changes['count'].currentValue}`);
            this.previousCount = changes['count'].currentValue;
        }
    }

    ngOnInit(): void {
        this.logEvent.emit('Child: ngOnInit - Initialized after first ngOnChanges');
    }

    ngDoCheck(): void {
        this.changeDetectionCount++;
        this.logEvent.emit(`Child: ngDoCheck - Change detection cycle #${this.changeDetectionCount}`);
    }

    ngAfterContentInit(): void {
        this.logEvent.emit('Child: ngAfterContentInit - Content children initialized');
    }

    ngAfterContentChecked(): void {
        this.logEvent.emit('Child: ngAfterContentChecked - Content children checked');
    }

    ngAfterViewInit(): void {
        this.logEvent.emit('Child: ngAfterViewInit - View and view children initialized');
    }

    ngAfterViewChecked(): void {
        this.logEvent.emit('Child: ngAfterViewChecked - View and view children checked');
    }

    ngOnDestroy(): void {
        this.logEvent.emit('Child: ngOnDestroy - Component is being destroyed');
    }

    updateChildMessage(newMessage: string): void {
        this.childMessage = newMessage;
        this.logEvent.emit(`Child: Child message updated to "${newMessage}"`);
    }

    forceChangeDetection(): void {
        this.logEvent.emit('Child: Forcing change detection...');
    }

    onGrandchildLog(message: string): void {
        this.logEvent.emit(message);
    }
}