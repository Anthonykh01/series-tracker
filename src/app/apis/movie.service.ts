import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Movie{
  name: string;
  photo: string;
  description: string;
  genre: string;
}
export interface Moviec{
  name: string;
  photo: string;
  description: string;
  genre: string;
}
export interface Newmovie{
  name: string;
  link: string;

}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url='http://localhost/finalapi/';

  constructor(private http: HttpClient) { }
  getAllmovies(){
    return this.http.get<[Movie]>(this.url+ 'movies.php');
  }
  getAllnewmovies(){
    return this.http.get<[Newmovie]>(this.url+ 'newmovies.php');
  }
  searchaction(){
    return this.http.get<[Moviec]>(this.url+ 'action.php');
  }
  searchcomedy(){
    return this.http.get<[Movie]>(this.url+ 'comedy.php');
  }
  searchsci(){
    return this.http.get<[Movie]>(this.url+ 'sci-fi.php');
  }
  searchtrue(){
    return this.http.get<[Movie]>(this.url+ 'true.php');
  }
}
