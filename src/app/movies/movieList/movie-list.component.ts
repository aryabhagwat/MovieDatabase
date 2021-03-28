import { Component } from "@angular/core";

@Component({
    selector: 'movielist-component',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent{
    movieList = [
        {
            name: 'Silence of the lambs',
            genre: 'Psychological'
        }
    ]
}