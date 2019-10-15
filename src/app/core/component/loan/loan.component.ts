import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , } from '@angular/forms'

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  mortgageForm:FormGroup;
  tab = 1;
  constructor( private fb: FormBuilder) { }

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
    
  }

}
