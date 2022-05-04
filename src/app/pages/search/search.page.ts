import { Component, OnInit } from '@angular/core';
import { Movie, MovieService, Newmovie } from 'src/app/apis/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
movies: Movie[];
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
      this.newmovies = response;
      console.log(this.newmovies);
    });
 }
}
