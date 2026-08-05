import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="topbar">
      <div class="container">
        <div class="topbar-inner">
          <a class="brand-mark" routerLink="/">
            <span class="brand-icon">U</span>
            <span>UniMart</span>
          </a>

          <div class="topbar-actions">
            <a class="top-link" routerLink="/login">Login</a>
            <a class="top-cta" routerLink="/register">Join now</a>
          </div>

          <button class="menu-toggle" type="button" (click)="toggleMenu()" aria-label="Toggle menu">
            ☰
          </button>
        </div>

        <div class="mobile-backdrop" [class.show]="isMenuOpen" (click)="closeMenu()"></div>
        <div class="mobile-menu" [class.show]="isMenuOpen">
          <div class="mobile-menu-header">
            <div>
              <div class="drawer-label">UniMart</div>
              <div class="drawer-subtitle">Student marketplace</div>
            </div>
            <button class="close-menu" type="button" (click)="closeMenu()" aria-label="Close menu">✕</button>
          </div>
          <a routerLink="/" (click)="closeMenu()">Home</a>
          <a routerLink="/register" (click)="closeMenu()">Categories</a>
          <a routerLink="/login" (click)="closeMenu()">Login</a>
          <a routerLink="/register" (click)="closeMenu()">Create account</a>
        </div>
      </div>
    </div>

    <div class="auth-shell">
      <div class="container">
        <div class="row auth-grid align-items-stretch g-4">
          <div class="col-lg-5 d-none d-lg-block">
            <div class="feature-panel h-100">
              <div class="feature-badge">Trusted campus commerce</div>
              <h2 class="fw-bold mb-3">Shop faster. Sell smarter.</h2>
              <p class="feature-copy">Access student deals, verified vendors, and a premium marketplace experience built for campus life.</p>
              <div class="feature-list">
                <span class="feature-chip">Fast checkout</span>
                <span class="feature-chip">Secure sign in</span>
                <span class="feature-chip">Vendor-ready roles</span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mx-auto">
            <div class="glass-card p-4 p-lg-4 h-100">
              <div class="text-center mb-4">
                <div class="brand-badge">UniMart</div>
                <h2 class="mt-3 fw-bold mb-2">Welcome back</h2>
                <p class="text-muted mb-0">Sign in to continue shopping and managing your store.</p>
              </div>

              <form (ngSubmit)="login()">
                <div class="mb-3">
                  <label class="form-label fw-semibold">Email</label>
                  <input type="email" class="form-control form-control-lg" [(ngModel)]="email" name="email" placeholder="you@unimart.com" required>
                </div>
                <div class="mb-3">
                  <label class="form-label fw-semibold">Password</label>
                  <input type="password" class="form-control form-control-lg" [(ngModel)]="password" name="password" placeholder="Enter your password" required>
                </div>

                <button class="btn btn-primary btn-lg w-100 rounded-pill fw-bold" type="submit" [disabled]="submitting">
                  {{ submitting ? 'Signing in...' : 'Login' }}
                </button>
              </form>

              <p class="text-danger mt-3 mb-0" *ngIf="errorMessage">{{ errorMessage }}</p>
              <p class="text-success mt-3 mb-0" *ngIf="successMessage">{{ successMessage }}</p>

              <div class="text-center mt-4">
                <span class="text-muted">New to UniMart?</span>
                <a routerLink="/register" class="fw-semibold ms-1">Create account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .topbar {
        position: sticky;
        top: 0;
        z-index: 20;
        background: linear-gradient(180deg, rgba(6, 14, 30, 0.98), rgba(22, 60, 145, 0.94));
        backdrop-filter: blur(18px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }

      .topbar-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 0;
        min-height: 72px;
      }

      .brand-mark {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: #ffffff;
        text-decoration: none;
        font-size: 1.25rem;
        font-weight: 900;
        letter-spacing: 0.04em;
      }

      .brand-icon {
        width: 34px;
        height: 34px;
        display: inline-grid;
        place-items: center;
        border-radius: 10px;
        background: linear-gradient(135deg, #ffffff, #cfe0ff);
        color: #0b5ed7;
        font-weight: 900;
        font-size: 0.95rem;
      }

      .topbar-actions {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .top-link,
      .top-cta {
        text-decoration: none;
        font-weight: 800;
        font-size: 0.9rem;
      }

      .top-link {
        color: rgba(255, 255, 255, 0.88);
      }

      .top-cta {
        padding: 9px 16px;
        border-radius: 999px;
        background: linear-gradient(135deg, #ffffff, #dbeafe);
        color: #1d4ed8;
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
      }

      .menu-toggle {
        display: none;
        border: 0;
        background: rgba(255, 255, 255, 0.14);
        color: #fff;
        width: 42px;
        height: 42px;
        border-radius: 12px;
        font-size: 1.15rem;
        box-shadow: 0 10px 20px rgba(5, 10, 25, 0.2);
      }

      .mobile-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(3, 7, 18, 0.45);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.25s ease;
        z-index: 25;
      }

      .mobile-backdrop.show {
        opacity: 1;
        pointer-events: auto;
      }

      .mobile-menu {
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: min(320px, 85vw);
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 1rem;
        background: linear-gradient(180deg, rgba(7, 16, 31, 0.98), rgba(8, 76, 178, 0.98));
        box-shadow: -16px 0 40px rgba(0, 0, 0, 0.35);
        transform: translateX(110%);
        transition: transform 0.28s ease;
        z-index: 30;
        visibility: hidden;
        backdrop-filter: blur(18px);
      }

      .mobile-menu-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        padding: 6px 4px 14px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      }

      .drawer-label {
        color: #fff;
        font-weight: 900;
        font-size: 1rem;
      }

      .drawer-subtitle {
        color: rgba(255, 255, 255, 0.72);
        font-size: 0.78rem;
      }

      .close-menu {
        border: 0;
        background: rgba(255, 255, 255, 0.12);
        color: #fff;
        width: 38px;
        height: 38px;
        border-radius: 10px;
      }

      .mobile-menu a {
        color: #fff;
        text-decoration: none;
        padding: 12px 14px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.10);
        font-weight: 700;
      }

      .mobile-menu.show {
        transform: translateX(0);
        visibility: visible;
      }

      .auth-shell {
        min-height: calc(100vh - 70px);
        background:
          radial-gradient(circle at top left, rgba(13, 110, 253, 0.22), transparent 35%),
          linear-gradient(135deg, #f4f8ff, #eef4ff 45%, #ffffff 100%);
        padding-top: 3rem;
        padding-bottom: 3rem;
      }

      .auth-grid {
        min-height: calc(100vh - 130px);
      }

      .feature-panel {
        border-radius: 30px;
        padding: 2rem;
        background: linear-gradient(160deg, #071120, #1847b3 58%, #5b2fd8);
        color: #fff;
        box-shadow: 0 28px 70px rgba(7, 26, 58, 0.20);
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .feature-badge {
        display: inline-flex;
        align-self: flex-start;
        padding: 6px 12px;
        background: rgba(255, 255, 255, 0.16);
        border: 1px solid rgba(255, 255, 255, 0.24);
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }

      .feature-copy {
        color: rgba(255, 255, 255, 0.82);
        max-width: 420px;
        line-height: 1.7;
      }

      .feature-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .feature-chip {
        padding: 8px 12px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.14);
        border: 1px solid rgba(255, 255, 255, 0.22);
        font-size: 0.78rem;
        font-weight: 700;
      }

      .glass-card {
        border-radius: 28px;
        background: rgba(255, 255, 255, 0.96);
        border: 1px solid rgba(15, 23, 42, 0.08);
        box-shadow: 0 22px 58px rgba(7, 26, 58, 0.14);
      }

      .brand-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 6px 12px;
        border-radius: 999px;
        background: linear-gradient(135deg, #2563eb, #7c3aed);
        color: #fff;
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }

      .form-control {
        border-radius: 12px;
        border: 1px solid #1d4ed8;
        padding: 0.7rem 0.85rem;
        font-size: 0.95rem;
      }

      .form-control:focus {
        border-color: #0d6efd;
        box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.14);
      }

      .btn-primary {
        background: linear-gradient(135deg, #2563eb, #7c3aed);
        border: none;
        box-shadow: 0 14px 30px rgba(37, 99, 235, 0.28);
      }

      @media (min-width: 768px) {
        .mobile-backdrop,
        .mobile-menu {
          display: none !important;
        }
      }

      @media (max-width: 767.98px) {
        .topbar-actions {
          display: none;
        }

        .menu-toggle {
          display: inline-grid;
          place-items: center;
        }

        .auth-grid {
          min-height: auto;
        }
      }
    `
  ],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink]
})
export class LoginComponent {
  email = '';
  password = '';
  submitting = false;
  errorMessage = '';
  successMessage = '';
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  login(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password.';
      return;
    }

    this.submitting = true;
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (response) => {
        this.submitting = false;
        localStorage.setItem('unimart_token', response.token);
        localStorage.setItem('unimart_user', JSON.stringify(response.user));
        this.successMessage = response.message || 'Login successful';

        if (response.user?.role === 'admin') {
          this.router.navigateByUrl('/admin');
        } else if (response.user?.role === 'vendor') {
          this.router.navigateByUrl('/vendor');
        } else {
          this.router.navigateByUrl('/');
        }
      },
      error: (error) => {
        this.submitting = false;
        this.errorMessage = error?.error?.message || 'Unable to login right now.';
      }
    });
  }
}
