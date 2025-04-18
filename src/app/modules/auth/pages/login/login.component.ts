import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone:false,
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  email: string = '';
  password: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  login(): void {
    // Пример логики для успешной авторизации
    if (this.email === 'user@example.com' && this.password === 'password') {
      localStorage.setItem('userRole', 'student'); // или 'teacher'
      localStorage.setItem('userEmail', this.email); // сохраняем email
      this.router.navigate(['/']); // Перенаправляем на главную
    } else {
      alert('Invalid credentials');
    }
  }
  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     const { email, password } = this.loginForm.value;
  //     const result = this.authService.login(email, password);
  //     if (result) {
  //       const role = this.authService.getRole();
  //       this.toastr.success('Успешный вход!');
  //       this.router.navigate([`/${role}`]);
  //     } else {
  //       this.toastr.error('Неверный логин или пароль');
  //     }
  //   }
  // }
  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     const { email, password } = this.loginForm.value;
  //     // Здесь вы сохраняете почту в localStorage
  //     localStorage.setItem('userEmail', email);  // Сохраняем почту
  //     localStorage.setItem('userRole', 'student'); // или 'teacher', в зависимости от роли
  //     this.router.navigate(['/']);  // Переходим на главную страницу
  //   }
  // }
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
  
      const user = this.authService.login(email, password);
  
      if (user) {
        localStorage.setItem('userEmail', user.email);
        localStorage.setItem('userRole', user.role);
  
        if (user.role === 'teacher') {
          this.router.navigate(['/teacher']);
        } else if (user.role === 'student') {
          this.router.navigate(['/student']);
        }
      } else {
        // Тут можно показать ошибку, если login вернул null
        alert('Invalid credentials');
      }
    }
  }
  
  
  
}
