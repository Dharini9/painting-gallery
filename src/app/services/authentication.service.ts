import { Inject, Injectable } from '@angular/core';
import { resetStores } from '@datorama/akita';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    constructor(
        @Inject('persistStorage') private persistStorage
    ) {
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
        // Clear all
        // this.persistStorage.clearStore();
        // this.persistStorage.clearStore('paintings');

        // Reset all stores
        // resetStores();
        resetStores({
            exclude: ['music', 'paintings']
        });
    }
}
