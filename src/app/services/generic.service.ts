import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Paintings } from '../models/paintings.model';
import { Music } from '../models/music.model';

@Injectable({ providedIn: 'root' })
export class GenericService {

    constructor(private http: HttpClient) { }

    paintingsApiUrl = 'api/paintings';
    musicApiUrl = 'api/music';
    headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    httpOptions = {
        headers: this.headers
    };

    private handleError(error: any) {
        console.error(error);
        return throwError(error);
    }

    // Painting Api Calls
    getPaintings(): Observable<Paintings[]> {
        return this.http.get<Paintings[]>(this.paintingsApiUrl).pipe(
            catchError(this.handleError)
        );
    }

    getPainting(id: number): Observable<Paintings> {
        const url = `${this.paintingsApiUrl}/${id}`;
        return this.http.get<Paintings>(url).pipe(
            catchError(this.handleError)
        );
    }

    addPainting(user: Paintings): Observable<Paintings> {
        user.id = null;
        return this.http.post<Paintings>(this.paintingsApiUrl, user, this.httpOptions).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    updatePainting(user: Paintings): Observable<Paintings> {
        const url = `${this.paintingsApiUrl}/${user.id}`;
        return this.http.put<Paintings>(this.paintingsApiUrl, user, this.httpOptions).pipe(
            map(() => user),
            catchError(this.handleError)
        );
    }

    // Music Api calls
    getMusics(): Observable<Music[]> {
        return this.http.get<Music[]>(this.musicApiUrl).pipe(
            catchError(this.handleError)
        );
    }

    getMusic(id: number): Observable<Music> {
        const url = `${this.musicApiUrl}/${id}`;
        return this.http.get<Music>(url).pipe(
            catchError(this.handleError)
        );
    }

    addMusic(user: Music): Observable<Music> {
        user.id = null;
        return this.http.post<Music>(this.musicApiUrl, user, this.httpOptions).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    updateMusic(user: Music): Observable<Music> {
        const url = `${this.musicApiUrl}/${user.id}`;
        return this.http.put<Music>(this.musicApiUrl, user, this.httpOptions).pipe(
            map(() => user),
            catchError(this.handleError)
        );
    }
}