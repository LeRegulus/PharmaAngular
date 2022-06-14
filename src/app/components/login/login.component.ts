import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  errorMessage: string = "Invalid credentials";
  invalidLogin = false;

  constructor(private  route : Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if (this.username ==="alou" && this.password==="12345"){
      this.route.navigate(['/home']);
    }else{
      this.invalidLogin = true;
    }
  }

}
