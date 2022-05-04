import { Component, OnInit } from '@angular/core';
import { Movie, MovieService, Newmovie ,Moviec} from 'src/app/apis/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
movies: Movie[];
movies1: Moviec[];
movies2: Moviec[];
movie: Movie;
data: Movie;
name: any;
description: any;
photo: any;
newmovies: Newmovie[];
  constructor(private service: MovieService) { }

  ngOnInit() {
  }
  searchaction(){
    this.service.searchaction().subscribe(response =>{
      this.movies = response;
      console.log(this.movies);
    });
 }
 reload(){
  location.reload();
 }
 searchcomedy(){
  this.service.searchcomedy().subscribe(response =>{
    this.movies1 = response;
    console.log(this.movies1);
  });
}
searchsci(){
  this.service.searchsci().subscribe(response =>{
    this.movies2 = response;
    console.log(this.movies1);
  });
}
}
