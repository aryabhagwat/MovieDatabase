import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieModel } from "src/app/models/movie.model";
import { MovieService } from "../movie.services";
import { map } from "rxjs/operators";

@Component({
    selector: 'add-movie',
    templateUrl: './addMovie.component.html',
    styleUrls: ['./addMovie.component.css']
})
export class AddMovieComponent implements OnInit {

    isEditMode: boolean = false;
    isLoading: boolean = true;
    movie: MovieModel;


    movieAddForm: FormGroup = new FormGroup({
        movieName: new FormControl(''),
        movieGenre: new FormControl(''),
        movieBadge: new FormArray([]),
        movieDescription: new FormControl(''),
        movieImage: new FormControl(''),
    })

    constructor(private movieService: MovieService,
        private router: Router,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params
            .subscribe(res => {
                if (res.id) {
                    this.isEditMode = true;
                    this.movieService.getMovie(res.id)
                        .pipe(
                            map((response:any) => {
                                return {
                                    message: response.message,
                                    movie: {
                                        id: response.movie._id,
                                        ...response.movie
                                    }
                                }
                            })
                        )
                        .subscribe((result: {message: string, movie: MovieModel}) => {
                            this.movie = result.movie;
                            let res = this.movie;
                            this.movieAddForm.patchValue({
                                movieName: res.title,
                                movieGenre: res.genre,
                                movieDescription: res.description,
                                movieImage: res.imageURL,
                            })
                            this.isLoading = false;
                        })

                }else{
                    this.isEditMode = false;
                    this.isLoading = false;
                }
            })

    }



    get enteredDetails() {
        return {
            title: this.movieAddForm.get('movieName').value,
            genre: this.controls,
            description: this.movieAddForm.get('movieDescription').value,
            imageURL: this.movieAddForm.get('movieImage').value
        }
    }

    get controls() { // a getter!
        return (<FormArray>this.movieAddForm.get('movieBadge')).controls;
    }

    addBadge(value) {
        let badge = new FormControl('TEST');
        badge.setValue(value);
        this.movieAddForm.get('movieGenre').reset();

        (<FormArray>this.movieAddForm.get('movieBadge')).push(
            new FormGroup({
                'badge': badge
            })
        )

    }

    removeBadge(index) {
        (<FormArray>this.movieAddForm.get('movieBadge')).removeAt(index);
    }

    submitButton() {
        let movie: MovieModel = {
            id: '123123',
            title: this.movieAddForm.value.movieName,
            genre: this.movieAddForm.value.movieGenre,
            description: this.movieAddForm.value.movieDescription,
            imageURL: this.movieAddForm.value.movieImage,
            rating: 5
        }

        if(this.isEditMode){
            this.movieService.editMovie(movie);
        }else{
            this.movieService.addMovie(movie);
        }
        this.router.navigate(['/movies']);

    }

    onCancel(){
        this.router.navigate(['/movies']);
    }

    onDelete(){
        this.movieService.deleteMovie(this.movie.id)
            .subscribe(response => {
                this.router.navigate(['/movies']);
            })
    }
}