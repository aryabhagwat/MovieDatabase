import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'movieCard',
    templateUrl: 'movieCard.component.html',
    styleUrls: ['movieCard.component.css']
})
export class MovieCardComponent implements OnInit{

    @Input() movie: {
        movieName: string,
        movieGenre: string,
        movieLink: string
    };


    ngOnInit(): void {
        console.log(this.movie);
    }

}