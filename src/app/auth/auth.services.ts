import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { UserModel } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthServices{
  
    user: UserModel;

    constructor(private http: HttpClient){}
    
    signUp(user: UserModel){
        this.http.post('http://localhost:3000/admin/signup', {user})
            .subscribe(response => {

            })
    }

    login(user: UserModel){
        this.http.post('', {user})
            .subscribe(response => {

            })
    }
}