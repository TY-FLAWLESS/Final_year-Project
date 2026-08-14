import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { Observable, from, of, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

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
  private readonly firebaseApp = initializeApp(environment.firebaseConfig);
  private readonly firebaseAuth = getAuth(this.firebaseApp);

  private getUsers(): UserRecord[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  private saveUsers(users: UserRecord[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  getAllUsers(): UserRecord[] {
    return this.getUsers();
  }

  updateUserRole(email: string, role: string): void {
    const users = this.getUsers();
    const index = users.findIndex((item) => item.email.toLowerCase() === email.toLowerCase());
    if (index >= 0) {
      users[index].role = role;
      this.saveUsers(users);
    }
  }

  deleteUser(email: string): void {
    const users = this.getUsers().filter((item) => item.email.toLowerCase() !== email.toLowerCase());
    this.saveUsers(users);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('unimart_token');
  }

  logout(): void {
    localStorage.removeItem('unimart_token');
    localStorage.removeItem('unimart_user');
  }

  getCurrentUser(): { name: string; email: string; role: string } | null {
    const userJson = localStorage.getItem('unimart_user');
    return userJson ? JSON.parse(userJson) : null;
  }

  updateUserName(email: string, name: string): void {
    const users = this.getUsers();
    const index = users.findIndex((item) => item.email.toLowerCase() === email.toLowerCase());
    if (index >= 0) {
      users[index].name = name;
      this.saveUsers(users);
    }
  }

  private normalizeAuthError(error: any): string {
    const code = error?.code || '';
    switch (code) {
      case 'auth/invalid-credential':
      case 'auth/wrong-password':
      case 'auth/user-not-found':
      case 'auth/invalid-email':
        return 'Invalid email or password.';
      case 'auth/email-already-in-use':
        return 'Email is already registered.';
      case 'auth/network-request-failed':
        return 'Unable to reach the authentication server. Please try again.';
      default:
        return 'Unable to complete authentication at this time. Please try again later.';
    }
  }

  login(payload: LoginPayload): Observable<any> {
    return from(signInWithEmailAndPassword(this.firebaseAuth, payload.email, payload.password)).pipe(
      map((response: UserCredential) => {
        const storedUser = this.getUsers().find((item) => item.email.toLowerCase() === payload.email.toLowerCase());
        const user = {
          name: storedUser?.name || payload.email.split('@')[0],
          email: response.user.email || payload.email,
          role: storedUser?.role || 'customer'
        };

        localStorage.setItem('unimart_token', response.user.uid);
        localStorage.setItem('unimart_user', JSON.stringify(user));

        return {
          token: response.user.uid,
          user,
          message: 'Login successful'
        };
      }),
      catchError((error) => {
        const errorMessage = this.normalizeAuthError(error);
        return throwError(() => ({ error: { message: errorMessage } }));
      })
    );
  }

  register(payload: RegisterPayload): Observable<any> {
    return from(createUserWithEmailAndPassword(this.firebaseAuth, payload.email, payload.password)).pipe(
      map((response: UserCredential) => {
        const user: UserRecord = {
          name: payload.name,
          email: response.user.email || payload.email,
          password: payload.password,
          role: payload.role || 'customer'
        };

        const users = this.getUsers();
        users.push(user);
        this.saveUsers(users);

        return {
          message: 'Registration successful'
        };
      }),
      catchError((error) => {
        const errorMessage = this.normalizeAuthError(error);
        return throwError(() => ({ error: { message: errorMessage } }));
      })
    );
  }
}
