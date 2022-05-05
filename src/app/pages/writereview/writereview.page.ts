import { Component, OnInit } from '@angular/core';
import { Review,ReviewsService } from 'src/app/apis/reviews.service';

@Component({
  selector: 'app-writereview',
  templateUrl: './writereview.page.html',
  styleUrls: ['./writereview.page.scss'],
})
export class WritereviewPage implements OnInit {
  data: Review;

  name: any;
 review: any;
  constructor(private service: ReviewsService) { }

  ngOnInit() {
  }
  addReview(){

    const data = {

      name: this.name,
      review: this.review,
    };


      this.service.addReview(data).subscribe(res => {
      });

 }
}


