import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { User } from "./user.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class AuthService {
    constructor(private http: Http, private errorService: ErrorService){}

    signUp(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'})
        return this.http.post('https://wrich-angular2-deployment.herokuapp.com/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => { 
                this.errorService.handelError(error.json());
                return Observable.throw(error.json());
            });
    }

    signIn(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'})
        return this.http.post('https://wrich-angular2-deployment.herokuapp.com/user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => { 
                this.errorService.handelError(error.json());
                return Observable.throw(error.json());
            });
    }

    logOut() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

}