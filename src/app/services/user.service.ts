import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from '../models/User';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl:string = "https://api.github.com/users?page=";
  limitUrl:string = "&per_page=32";
  pageNumberUrl:number = 3;


  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl+this.pageNumberUrl+this.limitUrl);
  }

  
}
