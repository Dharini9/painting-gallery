import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    constructor() {
    }

    login(userName: string, password: string): boolean {
        if (userName === 'admin' && password === 'admin') {
            localStorage.setItem('currentUser', JSON.stringify(userName));
            return true;
        } else {
            return false;
        }
    }

    logout() {
        // remove user data from local storage for log out
        localStorage.removeItem('currentUser');
    }
}