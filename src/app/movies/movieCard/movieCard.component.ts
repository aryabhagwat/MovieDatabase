import {Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'movieCard',
    templateUrl: 'movieCard.component.html',
    styleUrls: ['movieCard.component.css']
})
export class MovieCardComponent implements OnInit{


    defaultImage = 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Back_to_the_Future.jpg/220px-Back_to_the_Future.jpg';

    @Input() movie: {
        name: string,
        genre: Array<FormGroup>,
        desc: string,
        imageURL: string,
        displayButtons: boolean,
    };


    ngOnInit(): void {
    }
}