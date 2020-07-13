import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() userInput: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let clases = {
      userContainer: true,
    }
    return clases;
  }

  onRepositories(){
    //this.router.navigateByUrl(`${this.userInput.repositories}`);
  }

}
