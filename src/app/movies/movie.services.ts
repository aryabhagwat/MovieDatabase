import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MovieModel } from "../models/movie.model";
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private http: HttpClient) {

    }

    addMovie(movie: MovieModel) {
        this.http.post('http://localhost:3000/admin/addMovie', { ...movie })
            .subscribe(res => {
                console.log(res);
            })
    }

    getMovies() {
        return this.http.get('http://localhost:3000/admin/getMovies')
    }
}