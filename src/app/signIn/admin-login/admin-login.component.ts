import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule,RouterLink,HttpClientModule,CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  email: string = "";
  password: string = "";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  onLogin() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post("http://localhost:8081/Admin/login", loginData)
      .subscribe({
        next: (response: any) => {
          if (response.success) {
            alert("Login successful!");
            
            localStorage.setItem('currentUser', JSON.stringify(response.user));
            
            this.router.navigate(['/AdminCustomerManage']);
          } else {
            alert(response.message || "Invalid credentials!");
          }
        },
        error: (error) => {
          console.error('Login error:', error);
          alert("Login failed! Please check your credentials.");
        }
      });
  }
}
