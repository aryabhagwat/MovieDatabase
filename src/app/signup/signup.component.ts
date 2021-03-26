import { AfterContentInit, Component } from "@angular/core";

@Component({
    selector: 'signup-component',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class signupComponent implements AfterContentInit{
    piggyImage="";

    ngAfterContentInit() {
        this.piggyImage = "../../webImages/animation_500_kmqrhpk0.gif";
    }

}