
import { Injectable } from '@angular/core';

import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import {Observable} from 'rxjs/Rx';

import {Account} from './entities/account.entities';


@Injectable()

export class AccountService {

  private BASE_URL:string = 'http://localhost:3000/api/account/';

  constructor(
    private http:Http)  { }

login(account: Account):Observable<any>{
     return this.http.post(this.BASE_URL + 'login', account)
.map(
     (res: Response) => {
          return{ status:res.status, result:res.json()}
  }
)
.catch(
      (error :Error) => {
          return Observable.throw(new Error(error.message));
  }
)
}
}