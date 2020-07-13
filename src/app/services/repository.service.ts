import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Repository } from '../models/Repository';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  usersUrl:string = "https://api.github.com/users";
  limitUrl:string = "&per_page=32";
  pageNumberUrl:number = 1;

  constructor(private http:HttpClient) { }

  getRepositories(userLogin:string):Observable<Repository[]>{
    return this.http.get<Repository[]>( this.usersUrl + `/${userLogin}` + `/repos?page=`+this.pageNumberUrl+this.limitUrl);
   
  }
}
