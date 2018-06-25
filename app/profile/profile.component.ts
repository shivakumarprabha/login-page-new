import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import {Router} from '@angular/router';
import { AccountService } from '../account.services';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  profileForm:FormGroup;
  errorMsg:string;

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService,
              private router :Router) { }

  ngOnInit() {
    this.accountService.find(localStorage.getItem('username ')).subscribe(
      res => {
        this.profileForm = this.formBuilder.group({
          username: [ res.result.username, [ Validators.required]],
          password: ['',   []],
          fullName: [res.result.fullName, [ Validators.required]]
        });
      },



      error =>{
        this.errorMsg = error;
      }
    );
  }


  cancel(): void {
    this.router.navigate(['/welcome']);
  }


  save(): void {
    this.accountService.find(localStorage.getItem('username')).subscribe(
      res =>{
        var currentAccount = res.result;
        if(this.profileForm.value.password !=''){
          currentAccount.password = this.profileForm.value.password;
        }
    
       
      currentAccount.fullName = this.profileForm.value.fullName;
      this.accountService.update(currentAccount).subscribe(
        res => {
            this.router.navigate(['/welcome']);
        },

        error =>{
          this.errorMsg = error;
        }
      );
    },
      error => {
        this.errorMsg = error;
      }
    );
  }
  }

  
  

