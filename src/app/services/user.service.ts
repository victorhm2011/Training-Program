import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl:string = "https://api.github.com/users";
  limitUrl:string = "?per_page=12";
  pageNumberUrl:string = "&page=1";


  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl+this.limitUrl);
  }
}
