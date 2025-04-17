import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userKey = 'school_user';

  constructor(private router: Router) {}

  register(user: { email: string; password: string; role: string }) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
    return true;
  }

  login(email: string, password: string) {
    const user = this.getUser();
    if (user && user.email === email && user.password === password) {
      return true;
    }
    return false;
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
