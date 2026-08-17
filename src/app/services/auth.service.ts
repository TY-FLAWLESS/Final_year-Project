import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential, signOut } from 'firebase/auth';
import { Observable, from, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
  businessName?: string;
  businessCategory?: string;
  businessPhone?: string;
}

interface UserRecord {
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt?: string;
  isActive?: boolean;
  isBanned?: boolean;
  businessName?: string;
  businessCategory?: string;
  businessPhone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'unimart_users';
  private readonly firebaseApp = initializeApp(environment.firebaseConfig);
  private readonly firebaseAuth = getAuth(this.firebaseApp);

  constructor() {
    // Initialize auth state listener
    this.firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        const storedUser = this.getUsers().find(u => u.email.toLowerCase() === user.email?.toLowerCase());
        if (storedUser) {
          const currentUser = {
            name: storedUser.name,
            email: user.email,
            role: storedUser.role,
            uid: user.uid
          };
          localStorage.setItem('unimart_user', JSON.stringify(currentUser));
          localStorage.setItem('unimart_token', user.uid);
        }
      }
    });
  }

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

  getUsersByRole(role: string): UserRecord[] {
    return this.getUsers().filter(user => user.role === role);
  }

  updateUserRole(email: string, role: string): void {
    const users = this.getUsers();
    const index = users.findIndex((item) => item.email.toLowerCase() === email.toLowerCase());
    if (index >= 0) {
      users[index].role = role;
      users[index].isActive = role !== 'vendor' ? true : users[index].isActive ?? false;
      users[index].isBanned = false;
      this.saveUsers(users);
      
      // Update current user if it's the logged-in user
      const currentUser = this.getCurrentUser();
      if (currentUser?.email.toLowerCase() === email.toLowerCase()) {
        currentUser.role = role;
        localStorage.setItem('unimart_user', JSON.stringify(currentUser));
      }
    }
  }

  updateUserStatus(email: string, isActive: boolean): void {
    const users = this.getUsers();
    const index = users.findIndex((item) => item.email.toLowerCase() === email.toLowerCase());
    if (index >= 0) {
      users[index].isActive = isActive;
      this.saveUsers(users);
    }
  }

  banUser(email: string): void {
    const users = this.getUsers();
    const index = users.findIndex((item) => item.email.toLowerCase() === email.toLowerCase());
    if (index >= 0) {
      users[index].isBanned = true;
      users[index].isActive = false;
      this.saveUsers(users);
    }
  }

  unbanUser(email: string): void {
    const users = this.getUsers();
    const index = users.findIndex((item) => item.email.toLowerCase() === email.toLowerCase());
    if (index >= 0) {
      users[index].isBanned = false;
      users[index].isActive = users[index].role === 'vendor' ? false : true;
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

  logout(): Observable<void> {
    return from(signOut(this.firebaseAuth)).pipe(
      map(() => {
        localStorage.removeItem('unimart_token');
        localStorage.removeItem('unimart_user');
        localStorage.removeItem('unimart_user_role');
      }),
      catchError((error) => {
        localStorage.removeItem('unimart_token');
        localStorage.removeItem('unimart_user');
        localStorage.removeItem('unimart_user_role');
        return throwError(() => error);
      })
    );
  }

  getCurrentUser(): { name: string; email: string; role: string; uid?: string } | null {
    const userJson = localStorage.getItem('unimart_user');
    return userJson ? JSON.parse(userJson) : null;
  }

  getCurrentRole(): string {
    return localStorage.getItem('unimart_user_role') || 'customer';
  }

  updateUserName(email: string, name: string): void {
    const users = this.getUsers();
    const index = users.findIndex((item) => item.email.toLowerCase() === email.toLowerCase());
    if (index >= 0) {
      users[index].name = name;
      this.saveUsers(users);
      
      // Update current user if it's the logged-in user
      const currentUser = this.getCurrentUser();
      if (currentUser?.email.toLowerCase() === email.toLowerCase()) {
        currentUser.name = name;
        localStorage.setItem('unimart_user', JSON.stringify(currentUser));
      }
    }
  }

  private normalizeAuthError(error: any): string {
    const code = error?.code || '';
    switch (code) {
      case 'auth/invalid-credential':
      case 'auth/wrong-password':
      case 'auth/user-not-found':
      case 'auth/invalid-email':
        return 'Invalid email or password. Please try again.';
      case 'auth/email-already-in-use':
        return 'This email is already registered. Please log in or use a different email.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters long.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your connection and try again.';
      case 'auth/operation-not-allowed':
        return 'This operation is not allowed. Please contact support.';
      default:
        return error?.message || 'An authentication error occurred. Please try again later.';
    }
  }

  login(payload: LoginPayload): Observable<any> {
    return from(signInWithEmailAndPassword(this.firebaseAuth, payload.email, payload.password)).pipe(
      map((response: UserCredential) => {
        const storedUser = this.getUsers().find((item) => item.email.toLowerCase() === payload.email.toLowerCase());

        if (storedUser?.isBanned) {
          throw new Error('This account has been banned by the administrator.');
        }

        if (storedUser?.role === 'vendor' && storedUser.isActive === false) {
          throw new Error('This vendor account is pending admin approval.');
        }

        const user = {
          name: storedUser?.name || payload.email.split('@')[0],
          email: response.user.email || payload.email,
          role: storedUser?.role || payload.role || 'customer',
          uid: response.user.uid
        };

        localStorage.setItem('unimart_token', response.user.uid);
        localStorage.setItem('unimart_user', JSON.stringify(user));
        localStorage.setItem('unimart_user_role', user.role);

        return {
          token: response.user.uid,
          user,
          message: 'Login successful'
        };
      }),
      catchError((error) => {
        const errorMessage = error?.message || this.normalizeAuthError(error);
        return throwError(() => ({ 
          error: { 
            message: errorMessage,
            code: error?.code
          } 
        }));
      })
    );
  }

  register(payload: RegisterPayload): Observable<any> {
    // Validate email and password before Firebase call
    if (!payload.email || !payload.password || !payload.name) {
      return throwError(() => ({
        error: { message: 'Name, email, and password are required.' }
      }));
    }

    if (payload.password.length < 6) {
      return throwError(() => ({
        error: { message: 'Password must be at least 6 characters long.' }
      }));
    }

    return from(createUserWithEmailAndPassword(this.firebaseAuth, payload.email, payload.password)).pipe(
      map((response: UserCredential) => {
        const user: UserRecord = {
          name: payload.name,
          email: response.user.email || payload.email,
          password: payload.password, // Note: In production, never store plain passwords
          role: payload.role || 'customer',
          createdAt: new Date().toISOString(),
          isActive: payload.role === 'vendor' ? false : true, // Vendors need admin approval
          businessName: payload.businessName || '',
          businessCategory: payload.businessCategory || '',
          businessPhone: payload.businessPhone || ''
        };

        const users = this.getUsers();
        users.push(user);
        this.saveUsers(users);

        return {
          message: payload.role === 'vendor' 
            ? 'Vendor registration successful! Awaiting admin approval.'
            : 'Registration successful! You can now log in.',
          user
        };
      }),
      catchError((error) => {
        const errorMessage = this.normalizeAuthError(error);
        return throwError(() => ({ 
          error: { 
            message: errorMessage,
            code: error?.code
          } 
        }));
      })
    );
  }

  getUserCount(role?: string): number {
    const users = this.getUsers();
    if (role) {
      return users.filter(u => u.role === role).length;
    }
    return users.length;
  }

  getActiveVendors(): UserRecord[] {
    return this.getUsers().filter(u => u.role === 'vendor' && u.isActive);
  }

  getPendingVendors(): UserRecord[] {
    return this.getUsers().filter(u => u.role === 'vendor' && !u.isActive && !u.isBanned);
  }

  approveVendor(email: string): void {
    const users = this.getUsers();
    const index = users.findIndex((item) => item.email.toLowerCase() === email.toLowerCase());
    if (index >= 0) {
      users[index].isActive = true;
      users[index].isBanned = false;
      if (users[index].role !== 'vendor') {
        users[index].role = 'vendor';
      }
      this.saveUsers(users);
    }
  }

  rejectVendor(email: string): void {
    const users = this.getUsers();
    const index = users.findIndex((item) => item.email.toLowerCase() === email.toLowerCase());
    if (index >= 0) {
      users[index].isActive = false;
      users[index].isBanned = false;
      users[index].role = 'vendor';
      this.saveUsers(users);
    }
  }
}
