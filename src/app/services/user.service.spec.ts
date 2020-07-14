import { TestBed, async } from '@angular/core/testing';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { UsersComponent } from '../components/users/users.component';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

/*
  it ('should get users', async(() => {
    const service: UserService = TestBed.get(UserService);
    /*
    this.userService.getUsers().subscribe( users => {
      this.users = users;
    });
    service.getUsers().subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  }));*/

 
});
