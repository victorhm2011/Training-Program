import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( users => {
      this.users = users;
    });
  }

}
