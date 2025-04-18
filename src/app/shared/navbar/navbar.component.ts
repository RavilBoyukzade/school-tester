// src/app/shared/components/navbar/navbar.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }
getUsername() {
throw new Error('Method not implemented.');
}
  constructor(private router: Router) {}

  // Метод для проверки, авторизован ли пользователь
  isLoggedIn(): boolean {
    return localStorage.getItem('userRole') !== null;
  }

  // Метод для получения email пользователя
  getUserEmail(): string {
    return localStorage.getItem('userEmail') || ''; // Возвращает email или пустую строку
  }

  // Метод для выхода
  logout(): void {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/auth/login']);
  }
}