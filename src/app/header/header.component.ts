import { Component, OnInit } from "@angular/core";
import { AuthServices } from "../auth/auth.services";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class headerComponent implements OnInit{

    isAuthenticated: boolean = false; 
    constructor(private authServices: AuthServices){}

    ngOnInit(): void{
        this.authServices.user.subscribe(r => {
            console.log(r);
            if(r){
                this.isAuthenticated = true;
            }else{
            this.isAuthenticated = false;

            }
        }, e => {
            this.isAuthenticated = false;
        })
    }
    
    logout(){
        console.log("HERE");
        this.authServices.logOut();
    }
}