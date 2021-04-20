import {Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MovieModel } from 'src/app/models/movie.model';

@Component({
    selector: 'movieCard',
    templateUrl: 'movieCard.component.html',
    styleUrls: ['movieCard.component.css']
})
export class MovieCardComponent implements OnInit{


    defaultImage = '';

    @Input() movie: MovieModel;
    @Input() displayButtons:boolean;


    ngOnInit(): void {
    }

    editCard(){
        // console.log(this.movie.id);
    }
}