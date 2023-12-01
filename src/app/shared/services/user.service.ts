import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private userSub=new BehaviorSubject<User>({
    id:0,
    age:0,
    name:'',

  })

  $user=this.userSub.asObservable();
 
  addUser(user:User){
    this.userSub.next(user);
  }
}
