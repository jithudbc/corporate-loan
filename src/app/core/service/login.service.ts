import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{ environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(data){
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    return this.http.post(environment.baseUrl+"login",data,{headers:header});
  }
}
