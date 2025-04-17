import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';

// Мокаем AuthService
class MockAuthService {
  isAuthenticated() {
    return true;  // Можно также тестировать логику для isAuthenticated() = false
  }
}

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        { provide: AuthService, useClass: MockAuthService }, // Мокаем сервис
      ],
    });

    guard = TestBed.inject(AuthGuard);  // Получаем экземпляр guard
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access to route if authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);  // Мокаем поведение

    // Создаём фиктивные объекты для ActivatedRouteSnapshot и RouterStateSnapshot
    const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const state: RouterStateSnapshot = {} as RouterStateSnapshot;

    const result = guard.canActivate(route, state);  // Проверка Guard
    expect(result).toBe(true);  // Ожидаем, что доступ разрешен
  });

  it('should deny access if not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);  // Мокаем поведение

    // Создаём фиктивные объекты для ActivatedRouteSnapshot и RouterStateSnapshot
    const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const state: RouterStateSnapshot = {} as RouterStateSnapshot;

    const result = guard.canActivate(route, state);
    expect(result).toBe(false);  // Ожидаем, что доступ будет заблокирован
  });
});
