import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() userInput: User;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses(){
    let clases = {
      userContainer: true,
    }
    return clases;
  }

  onRepositories(){
    console.log("repositories");
  }

}
