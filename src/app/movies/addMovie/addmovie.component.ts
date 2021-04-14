import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'add-movie',
    templateUrl: './addMovie.component.html',
    styleUrls: ['./addMovie.component.css']
})
export class AddMovieComponent {

    constructor(private http: HttpClient) {

    }

    movieAddForm: FormGroup = new FormGroup({
        movieName: new FormControl(''),
        movieGenre: new FormControl(''),
        movieBadge: new FormArray([]),
        movieDescription: new FormControl(''),
        movieImage: new FormControl(''),
    })

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
        let title = this.movieAddForm.value.movieName
        let genre = this.movieAddForm.value.movieGenre
        let desc = this.movieAddForm.value.movieDescription
        let img = this.movieAddForm.value.movieImage

        this.http.post('http://localhost:3000/admin/addMovie', {
            title: title,
            genre: genre,
            description: desc,
            imageURL: img,
            rating: 5
        })
            .subscribe(res => {
                console.log(res);
            })


    }
}