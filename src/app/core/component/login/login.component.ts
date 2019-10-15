import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private service:LoginService, private route:Router) { }

  ngOnInit() {
    //initilizing the form model
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
  });
  }
  //getting fields information
  get f() { return this.loginForm.controls; }

  //submitting the loginForm
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    } else{
      this.route.navigate(['dashboard']);
      let key = 'userDetails';
        localStorage.setItem(key, JSON.stringify(this.loginForm.value));
      // this.service.login(this.loginForm.value).subscribe(data=>{
      //   console.log(data);
        
      //   this.route.navigate(['dashboard']);
        
      // });
    }

    this.loading = true;
  }
}