import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Review{
  name: string;
  review: string;

}
@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private url='http://localhost/finalapi/';

  constructor(private http: HttpClient) { }
  getAllreviews(){
    return this.http.get<[Review]>(this.url+ 'getriviews.php');
  }

  addReview(review: Review){
    return this.http.post(this.url + 'review.php',JSON.stringify(review));
  }

}
