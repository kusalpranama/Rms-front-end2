import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-managementment',
  standalone: true,
  imports: [FormsModule,CommonModule,NgFor,HttpClientModule],
  templateUrl: './item-managementment.component.html',
  styleUrl: './item-managementment.component.css'
})
export class ItemManagementmentComponent {
  public item:any={
    itemName:"",
    description:"",
    rentalCost:"",
    inventory:""
  };

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
  public addItem(){
    this.http.post("http://localhost:8081/items/add-item",this.itemTemps).subscribe((data)=>{
        alert("Item Added!!!!");
    })
  }

  deleteItemById(id:any){
    console.log(id);

    this.http.delete(`http://localhost:8081/items/delete-item/${id}`).subscribe(data=>{
      alert("Item deleted !!!!");
      this.loadTable();
    })
    
}
public itemTemp:any={}
  updateItem(item:any){
    console.log(item);
    this.itemTemp=item;
    
  }
  public itemTemps:any={}
  addItems(items:any){
    console.log(items);
    this.itemTemps=items;
    
  }

  saveItem(){
    this.http.put("http://localhost:8081/items/update-item",this.itemTemp).subscribe(data=>{
      alert("Item Updated!!!!!");
      this.loadTable();
    })
  }
}
