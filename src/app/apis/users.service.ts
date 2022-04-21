import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User{
  email: string;
  password: string;

}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private url='http://localhost/finalapi/';

  constructor(private http: HttpClient) { }

  getAlluser(){
    return this.http.get<[User]>(this.url+ 'api.php');
  }
  addUser(user: User){
    return this.http.post(this.url + 'post.php',JSON.stringify(user));
  }

}
