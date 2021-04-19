import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieModel } from "src/app/models/movie.model";
import { MovieService } from "../movie.services";

@Component({
    selector: 'add-movie',
    templateUrl: './addMovie.component.html',
    styleUrls: ['./addMovie.component.css']
})
export class AddMovieComponent implements OnInit {

    isEditMode: boolean = false;
    
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

    ngOnInit(){
        this.route.params
            .subscribe(res => {
                if(res.id){
                    this.isEditMode = true;
                    

                }
            })
        
    }

    

    get enteredDetails() {
        return {
            name: this.movieAddForm.get('movieName').value,
            genre: this.controls,
            desc: this.movieAddForm.get('movieDescription').value,
            imageURL: this.movieAddForm.get('movieImage').value,
            displayButtons: false,
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

    addMovie() {
        let movie: MovieModel = {
            id: '123123',
            title: this.movieAddForm.value.movieName,
            genre: this.movieAddForm.value.movieGenre,
            description: this.movieAddForm.value.movieDescription,
            imageURL: this.movieAddForm.value.movieImage,
            rating: 5
        }
       
        this.movieService.addMovie(movie);
    }
}