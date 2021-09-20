import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user : User = {};

  constructor(private router:Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  onSignIn(){
    this.authService.signIn(this.user)
      .subscribe(res =>{
        localStorage.setItem('token', res.token)
        this.router.navigate(['/private']);
      },err=>{
        console.log(err.error);
      })
  }

}
