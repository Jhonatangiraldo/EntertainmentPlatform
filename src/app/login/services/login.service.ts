import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

const URLLOGIN: string = "http://localhost:8080/authenticate";
@Injectable()
export class LoginService {

  constructor(private http:Http) { }

  public login(username: string, password: string): Observable<any> {
      let params = {'username': username, 'password':password};
      return this.http.post(URLLOGIN, params);
  }

}
