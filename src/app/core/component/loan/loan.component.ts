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
    
       let data = {

        
       "loanDetails" : {
         "firstName": this.mortgageForm.value.firstName,
         "lastName": this.mortgageForm.value.lastName,
         "address":this.mortgageForm.value.address,
         "citizenship":this.mortgageForm.value.citizenship,
         "phoneNumber": this.mortgageForm.value.phoneNumber,
         "dateOfBirth":this.mortgageForm.value.dateOfBirth,
         "emailId": this.mortgageForm.value.emailId,
         "passport":this.mortgageForm.value.passport,
         "name": this.mortgageForm.value.name,
         "corporateAddress": this.mortgageForm.value.corporateAddress,
         "revenue": this.mortgageForm.value.revenue,
         "regNo": this.mortgageForm.value.regNo,
         "amount": this.mortgageForm.value.amount,
         "term": this.mortgageForm.value.term,
         "usage":this.mortgageForm.value.usage,
         "companyAge":this.mortgageForm.value.firstName
          
        }
     }
      console.log(this.mortgageForm.value);
    
    this.applyLoanService.applyLoan(this.mortgageForm.value).subscribe( data => {
      console.log(data);
    })
    
  }

}
