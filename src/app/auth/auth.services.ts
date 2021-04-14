import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

import { UserModel } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthServices{
  
    user: BehaviorSubject<string> = new BehaviorSubject<string>(null); 

    private _isAuthenticated: boolean = false;


    constructor(private http: HttpClient, private router: Router){

    }

    get isAuthenticated(){
        return this._isAuthenticated;
    }
    
    signUp(user: UserModel){
        return this.http.post('http://localhost:3000/admin/signup', {user})
    }

    login(user: UserModel){
        this.http.post<{message: string, userID: string}>('http://localhost:3000/login', {user})
            .subscribe(response => {
                console.log(response);
                this.user.next(response.userID);
            })
    }

    logOut(){
        this.router.navigate(['/']);
        this.user.next(null);
    }
}