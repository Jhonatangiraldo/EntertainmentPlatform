import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private differentPass: boolean;
  public username: string;
  public password: string;
  public confirmPassword: string;
  constructor() { }

  ngOnInit() {
    this.differentPass = false;
  }

  /**
   * create user
   */
  public create() {
    if (this.password !== this.confirmPassword) {
      this.differentPass = true;
    } else {
      this.differentPass = false;
    }
  }

}
