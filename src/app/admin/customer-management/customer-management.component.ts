import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-customer-management',
  standalone: true,
  imports: [FormsModule,CommonModule,NgFor,HttpClientModule,RouterLink],
  templateUrl: './customer-management.component.html',
  styleUrl: './customer-management.component.css'
})
export class CustomerManagementComponent {
  public customerList:any = [];

  constructor(private http:HttpClient){
    this.loadTable();  
  }

  loadTable(){
    this.http.get("http://localhost:8081/customer/getAll").subscribe(data=>{
      console.log(data);
      this.customerList=data;
      
    })
  }
  deleteCustomerById(id:any){
    console.log(id);

    this.http.delete(`http://localhost:8081/customer/delete-customer/${id}`).subscribe(data=>{
      alert("customer deleted !!!!");
      this.loadTable();
    })
    
}
public customerTemp:any={}
  updateCustomer(customer:any){
    console.log(customer);
    this.customerTemp=customer;
    
  }

  saveCustomer(){
    this.http.put("http://localhost:8081/customer/update-customer",this.customerTemp).subscribe(data=>{
      alert("customer Updated!!!!!")
    })
  }
}
