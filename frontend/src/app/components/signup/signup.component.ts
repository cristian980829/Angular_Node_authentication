import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../shared/models/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user : User = {};

  constructor(private router:Router,
    private authService: AuthService
    ) { }
  
  ngOnInit(): void {
  }

  onSignUp(){
    this.authService.signUp(this.user)
      .subscribe(res =>{
        console.log(res.token);
        localStorage.setItem('token', res.token)
        this.router.navigate(['private']);
      },err=>{
        console.log(err);
      })
  }


}
