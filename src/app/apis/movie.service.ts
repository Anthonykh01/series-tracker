import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Movie{
  name: string;
  link: string;

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
}
