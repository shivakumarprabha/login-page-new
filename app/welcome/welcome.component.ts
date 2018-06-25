import { Component, OnInit } from '@angular/core';


import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username:string = '';
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem('username') != null{
      this.username = localStorage.getItem('username');
    }
  }

logout(): void{
  localStorage.removeItem('username');
  this.router.navigate(['/login']);

}
}