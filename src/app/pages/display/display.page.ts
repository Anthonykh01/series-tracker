import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Movie, MovieService } from 'src/app/apis/movie.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
  movies: Movie[];
  data: Movie;
moviename: any;
  constructor(private service: MovieService) {}

  ngOnInit() {
    this.service.getAllmovies().subscribe(response =>{
      this.movies = response;
      console.log(this.movies);
    });

  }
}
