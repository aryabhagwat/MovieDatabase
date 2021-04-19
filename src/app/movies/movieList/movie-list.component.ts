import { Component, OnInit } from "@angular/core";
import { MovieModel } from "src/app/models/movie.model";
import { MovieService } from "../movie.services";
import { map } from 'rxjs/operators';

@Component({
    selector: 'movielist-component',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
    movieList:MovieModel;

    constructor(private movieService: MovieService) {

    }

    ngOnInit() {
        this.movieService.getMovies()
            .pipe(
                map((res: { message: string, movies:any }) => {
                    return {
                        movies: res.movies.map(r =>{
                            return {
                                id: r._id,
                                ...r
                            }
                        }),
                        message: res.message
                    }
                }
                ))
            .subscribe(res => {
                this.movieList = res.movies;
            })
    }
}