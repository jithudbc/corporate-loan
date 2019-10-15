import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , } from '@angular/forms'
import { ApplyLoanService } from '../../service/apply-loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  mortgageForm:FormGroup;
  tab = 1;

  constructor( private fb: FormBuilder , private applyLoanService: ApplyLoanService) { }

  ngOnInit() {
    this.mortgageForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      address:[''],
      citizenship:[''],
      phoneNumber: [''],
      dateOfBirth:[''],
      emailId: [''],
      passport:[''],
      name: [''],
      corporateAddress: [''],
      revenue: [''],
      regNo: [''],
      amount: [''],
      term: [''],
      usage:[''],
      companyAge:[''],
      
      
    });
  }

  next(val) {
    this.tab = val;
  }

  mortgage(){
    
     let date = this.mortgageForm.value.dateOfBirth+"T00:00:00";

    // console.log(date);
       let details = {

        
       "loanDetails" : {
        "amount": this.mortgageForm.value.amount ? this.mortgageForm.value.amount : '',
        "term": this.mortgageForm.value.term ? this.mortgageForm.value.term: '',
        "usage":this.mortgageForm.value.usage? this.mortgageForm.value.usage:''

       },
       "corporateDetails":{
        
        "name": this.mortgageForm.value.name ? this.mortgageForm.value.name : '',
        "corporateAddress": this.mortgageForm.value.corporateAddress? this.mortgageForm.value.corporateAddress :'',
        "revenue": this.mortgageForm.value.revenue ? this.mortgageForm.value.revenue: '',
        "regNo": this.mortgageForm.value.regNo ? this.mortgageForm.value.regNo: '',
        
        "companyAge":this.mortgageForm.value.companyAge ? this.mortgageForm.value.companyAge: ''
       },
       "userDetails":{
        "firstName": this.mortgageForm.value.firstName ?this.mortgageForm.value.firstName: '',
        "lastName": this.mortgageForm.value.lastName ? this.mortgageForm.value.lastName: '',
        "address":this.mortgageForm.value.address ? this.mortgageForm.value.address: '',
        "citizenship":this.mortgageForm.value.citizenship ?this.mortgageForm.value.citizenship:'',
        "phoneNumber": this.mortgageForm.value.phoneNumber ? this.mortgageForm.value.phoneNumber:'',
        "dateOfBirth":date? date: '',
        "emailId": this.mortgageForm.value.emailId ? this.mortgageForm.value.emailId : '',
        "passport": "M7691801DB"
       // "passport":"this.mortgageForm.value.passport",

       }
      }
         
      
     // console.log(data);
    
    this.applyLoanService.applyLoan(details).subscribe( data => {
     /// console.log(data);
    })
    
  }

}
