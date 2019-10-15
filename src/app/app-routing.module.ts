import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/component/login/login.component';
import { LoanComponent } from './core/component/loan/loan.component';


const routes: Routes = [
  { path:'',component:LoanComponent},
  { path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
