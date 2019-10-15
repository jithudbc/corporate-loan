import { Injectable } from '@angular/core';
import { environment } from  '../../../environments/environment';
import { HttpClient , HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApplyLoanService {
 
  constructor( private http : HttpClient) { }
  

  applyLoan(details){
    // let loanDetails = JSON.stringify(details);
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    return this.http.post(environment.baseUrl + "/api/loan", details, { headers: header });
  }


}
