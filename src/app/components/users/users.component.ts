import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[]

  constructor() { }

  ngOnInit(): void {
    this.users=[
      {
        avatar:"https://avatars0.githubusercontent.com/u/1?v=4",
        name:"mojombo",
        page:"https://github.com/mojombo",
        repositories:"https://api.github.com/users/mojombo/repos"
      },
      {
        avatar:"https://avatars0.githubusercontent.com/u/1?v=4",
        name:"mojombo",
        page:"https://github.com/mojombo",
        repositories:"https://api.github.com/users/mojombo/repos"
      }
    ]
  }

}
