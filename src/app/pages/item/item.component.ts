import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [FormsModule,CommonModule,NgFor,HttpClientModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {
  items: any[] = [];
  cart: any[] = []; 

  private apiUrl = 'http://localhost:8081/items'; 

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      data => {
        this.items = data;
      },
      error => {
        console.error('Error fetching items!', error);
      }
    );
  }

  addToCart(item: any) { 
    this.cart.push(item);
    alert(`${item.itemName} has been added to your cart!`);
  }

  placeOrder() {
    const totalCost = this.calculateTotal(); 
    const rental = {
      totalCost: totalCost,
      dueDate: this.calculateDueDate()
    };

    this.http.post("http://localhost:8081/rental/create",rental).subscribe(
      response => {
        alert(`Rental created successfully! Total: $${totalCost}`);
        this.cart = []; 
      },
      error => {
        console.error('Error creating rental!', error);
      }
    );
  }

  calculateTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.rentalCost, 0);
  }

  private calculateDueDate(): Date {
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7); 
    return dueDate;
  }
  public itemList:any = [];

  constructor(private http:HttpClient){
    this.loadTable();  
  }

  loadTable(){
    this.http.get("http://localhost:8081/items/getAll").subscribe(data=>{
      console.log(data);
      this.itemList=data;
      
    })
  }
}
