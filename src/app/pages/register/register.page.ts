import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { response } from 'express';
import { User,UsersService } from 'src/app/apis/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})



export class RegisterPage /*implements OnInit*/ {
  data: User;

  email: any;
 password: any;

  constructor(private service: UsersService) { }

  //ngOnInit() {
    //this.service.getAlluser().subscribe(response =>{
     // this.users = response;
      //console.log(this.users);
   // });

  //}
   addUser(){

      const data = {

        email: this.email,
        password: this.password,
      };


        this.service.addUser(data).subscribe(res => {
        });

   }
}
