import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule,RouterLink,HttpClientModule,CommonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
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

    this.http.post("http://localhost:8081/customer/login", loginData)
      .subscribe({
        next: (response: any) => {
          if (response.success) {
            alert("Login successful!");
            
            localStorage.setItem('currentUser', JSON.stringify(response.user));
            
            this.router.navigate(['/Home']);
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
