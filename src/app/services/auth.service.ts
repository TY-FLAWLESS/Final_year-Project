import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

interface LoginPayload {
  email: string;
  password: string;
  role?: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role?: string;
}

interface UserRecord {
  name: string;
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'unimart_users';
  private readonly delayMs = 250;

  private getUsers(): UserRecord[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  private saveUsers(users: UserRecord[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('unimart_token');
  }

  getCurrentUser(): { name: string; email: string; role: string } | null {
    const userJson = localStorage.getItem('unimart_user');
    return userJson ? JSON.parse(userJson) : null;
  }

  login(payload: LoginPayload): Observable<any> {
    const users = this.getUsers();
    const user = users.find((item) => item.email.toLowerCase() === payload.email.toLowerCase());

    if (!user || user.password !== payload.password) {
      return throwError(() => ({ error: { message: 'Invalid email or password.' } })).pipe(delay(this.delayMs));
    }

    return of({
      token: Math.random().toString(36).slice(2),
      user: {
        name: user.name,
        email: user.email,
        role: user.role
      },
      message: 'Login successful'
    }).pipe(delay(this.delayMs));
  }

  register(payload: RegisterPayload): Observable<any> {
    const users = this.getUsers();
    const emailExists = users.some((item) => item.email.toLowerCase() === payload.email.toLowerCase());

    if (emailExists) {
      return throwError(() => ({ error: { message: 'Email is already registered.' } })).pipe(delay(this.delayMs));
    }

    const newUser: UserRecord = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      role: payload.role || 'customer'
    };

    users.push(newUser);
    this.saveUsers(users);

    return of({
      message: 'Registration successful'
    }).pipe(delay(this.delayMs));
  }
}
