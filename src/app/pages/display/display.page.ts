import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Movie, MovieService,Newmovie } from 'src/app/apis/movie.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
  movies: Movie[];
  sereiss: Serie[];
  newmovies: Newmovie[];
  data: Movie;
moviename: any;
  constructor(private service: MovieService) {}

  ngOnInit() {
    this.service.getAllmovies().subscribe(response =>{
      this.movies = response;
      console.log(this.movies);
    });
    this.service.getAllnewmovies().subscribe(response =>{
      this.newmovies = response;
      console.log(this.newmovies);
    });
    this.service.getseries().subscribe(response =>{
      this.series = response;
      console.log(this.series);
    });
  }
}
