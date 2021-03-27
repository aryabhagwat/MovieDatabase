import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserModel } from "src/app/models/user.model";
import { AuthServices } from "../auth.services";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class loginComponent
{
    mainForm: FormGroup = new FormGroup({
        email : new FormControl('', [Validators.required, Validators.email]),
        password : new FormControl('', [Validators.required, Validators.minLength(6)])
    })

    errorEmail = "";
    errorPassword = "";

    constructor(private authServices: AuthServices){}

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
        this.authServices.login(user);
    }
}