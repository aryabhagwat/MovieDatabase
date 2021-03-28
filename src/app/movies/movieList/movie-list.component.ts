import { Component } from "@angular/core";

@Component({
    selector: 'movielist-component',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent{
    movieList = [
        {
            movieName: 'UP',
            movieGenre: 'Animated',
            movieLink: 'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_UY1200_CR83,0,630,1200_AL_.jpg'
        },
        {
            movieName: 'UP 2',
            movieGenre: 'Animated',
            movieLink: 'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_UY1200_CR83,0,630,1200_AL_.jpg'
        },
        {
            movieName: 'UP 2',
            movieGenre: 'Animated',
            movieLink: 'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_UY1200_CR83,0,630,1200_AL_.jpg'
        },
        {
            movieName: 'UP 2',
            movieGenre: 'Animated',
            movieLink: 'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_UY1200_CR83,0,630,1200_AL_.jpg'
        },
        {
            movieName: 'UP 2',
            movieGenre: 'Animated',
            movieLink: 'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_UY1200_CR83,0,630,1200_AL_.jpg'
        },
        {
            movieName: 'UP 2',
            movieGenre: 'Animated',
            movieLink: 'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_UY1200_CR83,0,630,1200_AL_.jpg'
        }
    ]   
}