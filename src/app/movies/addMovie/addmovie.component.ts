import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'add-movie',
    templateUrl: './addMovie.component.html',
    styleUrls: ['./addMovie.component.css']
})
export class AddMovieComponent{
    

    movieBadge = new FormArray([]);

    movieAddForm: FormGroup = new FormGroup({
        movieName: new FormControl(''),
        movieGenre: new FormControl(''),
        movieBadge: this.movieBadge
    }) 


    get controls() { // a getter!
        return (<FormArray>this.movieAddForm.get('movieBadge')).controls;
    }  

    addBadge(value){
        let badge = new FormControl('TEST');
        badge.setValue(value);
        this.movieAddForm.get('movieGenre').reset();

        (<FormArray>this.movieAddForm.get('movieBadge')).push(
            new FormGroup({
                'badge': badge
            })
        ) 
        
    }

    removeBadge(index){
        (<FormArray>this.movieAddForm.get('movieBadge')).removeAt(index);
    }
}