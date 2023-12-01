import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../shared/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatFormFieldModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private userservice:UserService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.form=this.fb.group({
     username:['', [Validators.required]],
     password: ['', [Validators.required]],
    })
  }

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }

  submit(){
    if(this.form.valid){
      const user={
        id:1,
        age:23,
        name:this.username?.value
      }
      this.userservice.addUser(user);
      this.router.navigate(['callback-hell']);
    }

  }

  

}
