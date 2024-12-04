import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,HttpClientModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  public customer:any={
    name:"",
    email:"",
    password:"",
    city:"",
    contact:""
  };

  constructor(private http:HttpClient){}

  public addCustomer(){
    this.http.post("http://localhost:8081/customer/add-customer",this.customer).subscribe((data)=>{
        alert("Customer Added!!!!");
    })
  }
}
