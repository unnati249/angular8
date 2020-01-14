import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
 

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private auth: AuthenticationService
    ) {
    // router.navigate(['/dashboard']);
   }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    });

  }
  
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(){
    console.log("in login controller");
    console.log(this.f.username.value);
    this.auth.login(this.f.username.value,this.f.password.value) 
    .pipe(first())
    .subscribe(
      data => {
          console.log("data*****");
          console.log(data);
          if(data){
          this.router.navigate(['/dashboard']);
          }else{
            alert('wrong credentials');
          }
      },
      error => {
          console.log(error);
      });

  }

}
