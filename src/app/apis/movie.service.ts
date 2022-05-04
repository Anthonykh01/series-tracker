import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Movie{
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
    return this.http.get<[Movie]>(this.url+ 'movie.php');
  }
}
