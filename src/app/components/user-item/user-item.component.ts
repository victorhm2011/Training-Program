import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() userInput: User;

  constructor(private userService: UserService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  setClasses(){
    let clases = {
      userContainer: true,
    }
    return clases;
  }

  onRepositories(){
    this.router.navigateByUrl(`/users/${this.userInput.login}/repositories`);
  }

}
