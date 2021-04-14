import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserModel } from "src/app/models/user.model";
import { AuthServices } from "../auth.services";

@Component({
    selector: 'signup-component',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class signupComponent implements OnInit{

    signupSuccess = undefined;
    errorMessage = "";

    mainForm: FormGroup = new FormGroup({
        email : new FormControl('', [Validators.required, Validators.email]),
        password : new FormControl('', [Validators.required, Validators.minLength(6)])
    })
    errorEmail: string="";
    errorPassword: string="";

    constructor(private authServices: AuthServices){}

    ngOnInit(){
        
    }

    onSubmit(){
        if(this.mainForm.controls.email.invalid){
            this.errorEmail = "Please enter a correct email.";
        }
        if(this.mainForm.controls.password.invalid){
            this.errorPassword = "Passwords must be 6 characters long.";
        }

        if(this.mainForm.invalid){
            return;
        }

        const email = this.mainForm.value.email;
        const password = this.mainForm.value.password;
        const user = new UserModel(email, password);
        this.authServices.signUp(user)
            .subscribe(response => {
                this.signupSuccess = true;
                this.mainForm.reset();
            }, error => {
                console.log(error);
                this.signupSuccess = false;
                this.errorMessage = error;
            })
    }

}

