# CorporateLoan

1) Main Module - App Module
  This will have all component and service registered in the application

2) Shared Component -
      i)Header component
      2)Nav component
      3)Footer component

3) Apply-Loan component

   Loan Application form has been designed in this component
   With 3 tabs which includes loan, corporate,personal details

4)Login Component
  After successful completion of loan application,
  Customer will receive a email with user name and password after successful
   Verification of business login from backend serve.

5) Apply-loan service:
  This service is called after filling all the information in the Apply-Loan component.
  Provides a Successful/error response from the backend server based on business logic.

6) Global Error Handling
  HTTP Intercepter - Used to handle all sort of errors,
  Which has been send from backend server.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

