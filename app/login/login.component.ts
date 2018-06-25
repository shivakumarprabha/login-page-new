import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators}  from '@angular/forms';


import {Router} from '@angular/router';

import {AccountService} from '../services/account.services';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


loginForm: FormGroup;
errorMsg:string;
  constructor( private formBuilder: FormBuilder,
              private router: Router,
              private accountService: AccountService ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [ Validators.required]]
    });
  }

  login(): void{
    this.accountService.login(this.loginForm.value).subscribe(
      res =>{
        if( res.result == true){
          localStorage.setItem('username',
        this.loginForm.value.username);
        this.router.navigate(['/welcome']);
        } else {
          this.errorMsg = 'Invalid Account';
        }
      },
      error => {
        this.errorMsg = error;
      }
    };
  }