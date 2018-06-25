import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup,Validators}  from '@angular/forms';

//import {AccountService} from './account.services';

import {AccountService} from '../services/account.services';


import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  rigisterForm: FormGroup;
  errorMsg:string='';

  constructor( private formBuilder: FormBuilder,
              private accountService: AccountService,
              private router: Router ) { }

  ngOnInit() {

    this.rigisterForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [ Validators.required]],
      fullName: ['', [ Validators.required]]
    });
  }


  save(): void{
    this.accountService.create(this.rigisterForm.value).subscribe(
      res =>{
        if(res.status == 200 && res.result == true){
          localStorage.setItem('username',
        this.rigisterForm.value.username);
        this.router.navigate([''])

        }
      },
      error =>{
          this.errorMsg = error;
      }
    );
  }
}