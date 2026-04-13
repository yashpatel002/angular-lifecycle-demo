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
    SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-lifecycle-grandchild',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './lifecycle-grandchild.component.html',
    styleUrls: ['./lifecycle-grandchild.component.css']
})
export class LifecycleGrandchildComponent implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    DoCheck {

    @Input() parentData: string = 'No data';
    @Output() logEvent = new EventEmitter<string>();

    grandchildMessage: string = 'Grandchild Message';
    changeDetectionCount: number = 0;

    ngOnChanges(changes: SimpleChanges): void {
        this.logEvent.emit('  Grandchild: ngOnChanges - Input properties changed');

        if (changes['parentData']) {
            this.logEvent.emit(`    └─ parentData: "${changes['parentData'].previousValue}" → "${changes['parentData'].currentValue}"`);
        }
    }

    ngOnInit(): void {
        this.logEvent.emit('  Grandchild: ngOnInit - Initialized');
    }

    ngDoCheck(): void {
        this.changeDetectionCount++;
        if (this.changeDetectionCount <= 3) {
            this.logEvent.emit(`  Grandchild: ngDoCheck - Change detection cycle #${this.changeDetectionCount}`);
        }
    }

    ngAfterContentInit(): void {
        this.logEvent.emit('  Grandchild: ngAfterContentInit - Content initialization complete');
    }

    ngAfterContentChecked(): void {
        this.logEvent.emit('  Grandchild: ngAfterContentChecked - Content checked');
    }

    ngAfterViewInit(): void {
        this.logEvent.emit('  Grandchild: ngAfterViewInit - View initialization complete');
    }

    ngAfterViewChecked(): void {
        this.logEvent.emit('  Grandchild: ngAfterViewChecked - View checked');
    }

    ngOnDestroy(): void {
        this.logEvent.emit('  Grandchild: ngOnDestroy - Being destroyed');
    }

    updateMessage(newMessage: string): void {
        this.grandchildMessage = newMessage;
        this.logEvent.emit(`  Grandchild: Message updated to "${newMessage}"`);
    }
}