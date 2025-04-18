import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userKey = 'school_user';

  constructor(private router: Router) {}

  register(email: string, password: string, role: string): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
  
    // Проверим, нет ли такого пользователя
    const existingUser = users.find((u: any) => u.email === email);
    if (existingUser) {
      throw new Error('User already exists');
    }
  
    users.push({ email, password, role });
    localStorage.setItem('users', JSON.stringify(users));
  }
  

  // login(email: string, password: string) {
  //   const user = this.getUser();
  //   if (user && user.email === email && user.password === password) {
  //     return true;
  //   }
  //   return false;
  // }
  login(email: string, password: string): { email: string; role: string } | null {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);
  
    return user || null;
  }

  logout() {
    localStorage.removeItem(this.userKey);
    this.router.navigate(['/auth/login']);
  }

  getUser() {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getUser();
  }

  getRole(): 'teacher' | 'student' | null {
    const user = this.getUser();
    return user?.role || null;
  }
}
