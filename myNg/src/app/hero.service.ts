import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable , of } from 'rxjs';

import { MessageService } from './message.service';
 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http:HttpClient,private MS:MessageService) { }

  getHeroesList(id:number): Observable<Hero> {
    // this.MS.add('HeroService: fetched heroe id=${id}');
    // console.log(`HeroService: fetched heroe id=${id}`);
    // return of(HEROES.find(he => he.id === id));

    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  getHeroesLists(): Observable<Hero[]> {
    this.MS.add('HeroService: fetched heroes');
    console.log('%c fetched heroes','color:blue;');
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl) //所有的 HttpClient 方法都会返回某个值的 RxJS Observable。
      .pipe(
        catchError(this.handleError('Lists', []))
      );
  }

  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  private log(message: string,thiss?:any) {
    // this.MS.add(`HeroService: ${message}`);
    console.dir(`HeroService: ${message}`);
    console.log(thiss);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error( error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}