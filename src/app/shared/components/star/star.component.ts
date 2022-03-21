import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
 
@Component({
    selector: "mp-star",
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {


    
    @Input() rating: number = 4;
    cropWidth: number = 75;

    @Output() notifyClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {

        this.cropWidth = this.rating * 75 / 5;

    }

    onClick(): void {

        this.notifyClicked.emit(`${this.rating}`)
    }
}