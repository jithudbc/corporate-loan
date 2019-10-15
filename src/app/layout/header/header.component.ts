import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin:boolean=true;
  constructor(private route:Router) { }

  ngOnInit() {
    let item = JSON.parse(localStorage.getItem('userDetails'));
    if (localStorage.length > 0) {
      this.isLogin=false;
    }
  }
  logout(){
    this.isLogin=true;
    localStorage.removeItem('userDetails');
    this.route.navigate(['login']);
    
  }
  

}
