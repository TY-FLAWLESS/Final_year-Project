import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface LoginForm {
  email: string;
  password: string;
}

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

interface VendorRegisterForm extends RegisterForm {
  businessName: string;
  businessCategory: string;
  businessPhone: string;
}

type Role = 'customer' | 'vendor' | 'admin';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-container">
      <!-- Animated Background -->
      <div class="background-animation">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
      </div>

      <div class="auth-content">
        <!-- Brand Header -->
        <div class="auth-header">
          <div class="logo">🎓</div>
          <h1>KTU Marketplace</h1>
          <p>Campus Commerce Simplified</p>
        </div>

        <!-- Main Card -->
        <div class="auth-card">
          <!-- Role Selector -->
          <div class="role-selector">
            <button 
              type="button"
              class="role-btn"
              [class.active]="currentRole === 'customer'"
              (click)="switchRole('customer')"
            >
              <span class="role-icon">👤</span>
              <span class="role-text">Student</span>
            </button>
            <button 
              type="button"
              class="role-btn"
              [class.active]="currentRole === 'vendor'"
              (click)="switchRole('vendor')"
            >
              <span class="role-icon">🏪</span>
              <span class="role-text">Seller</span>
            </button>
            <button 
              type="button"
              class="role-btn"
              [class.active]="currentRole === 'admin'"
              (click)="switchRole('admin')"
            >
              <span class="role-icon">⚙️</span>
              <span class="role-text">Admin</span>
            </button>
          </div>

          <!-- Form Container -->
          <div class="form-container">
            <!-- Mode Tabs (Login/Register) -->
            <div class="mode-tabs" *ngIf="currentRole !== 'admin'">
              <button 
                type="button"
                class="mode-tab"
                [class.active]="isLoginMode"
                (click)="isLoginMode = true"
              >
                Login
              </button>
              <button 
                type="button"
                class="mode-tab"
                [class.active]="!isLoginMode"
                (click)="isLoginMode = false"
              >
                Register
              </button>
            </div>

            <!-- Login Form -->
            <form *ngIf="isLoginMode" (ngSubmit)="handleLogin()" class="auth-form">
              <div class="form-header">
                <h2>Welcome Back</h2>
                <p>Sign in to your account</p>
              </div>

              <div class="form-group">
                <label class="form-label">Email Address</label>
                <div class="input-wrapper">
                  <span class="input-icon">✉️</span>
                  <input 
                    type="email" 
                    class="form-input"
                    [(ngModel)]="loginForm.email"
                    name="email"
                    placeholder="you@university.edu"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Password</label>
                <div class="input-wrapper">
                  <span class="input-icon">🔒</span>
                  <input 
                    [type]="showPassword ? 'text' : 'password'"
                    class="form-input"
                    [(ngModel)]="loginForm.password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                  <button 
                    type="button"
                    class="toggle-password"
                    (click)="showPassword = !showPassword"
                    tabindex="-1"
                  >
                    {{ showPassword ? '👁️‍🗨️' : '👁️' }}
                  </button>
                </div>
              </div>

              <div class="forgot-password">
                <a href="#" class="forgot-link">Forgot password?</a>
              </div>

              <button type="submit" class="submit-btn" [disabled]="isLoading">
                {{ isLoading ? '⏳ Signing in...' : '✓ Sign In' }}
              </button>

              <div class="error-message" *ngIf="errorMessage">
                ⚠️ {{ errorMessage }}
              </div>

              <div class="form-footer">
                <span>Don't have an account?</span>
                <button type="button" class="link-btn" (click)="isLoginMode = false">
                  Create one now
                </button>
              </div>
            </form>

            <!-- Register Form -->
            <form *ngIf="!isLoginMode" (ngSubmit)="handleRegister()" class="auth-form">
              <div class="form-header">
                <h2>{{ currentRole === 'vendor' ? 'Start Your Shop' : 'Join Us' }}</h2>
                <p>{{ currentRole === 'vendor' ? 'Set up your business account' : 'Create your account' }}</p>
              </div>

              <!-- Common Fields -->
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <div class="input-wrapper">
                  <span class="input-icon">👤</span>
                  <input 
                    type="text" 
                    class="form-input"
                    [(ngModel)]="registerForm.name"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                </div>
              </div>

              <!-- Vendor-specific Fields -->
              <div *ngIf="currentRole === 'vendor'" class="vendor-section">
                <div class="form-group">
                  <label class="form-label">Business Name</label>
                  <div class="input-wrapper">
                    <span class="input-icon">🏪</span>
                    <input 
                      type="text" 
                      class="form-input"
                      [(ngModel)]="vendorForm.businessName"
                      name="businessName"
                      placeholder="Your shop name"
                      required
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">Category</label>
                  <div class="input-wrapper">
                    <span class="input-icon">📁</span>
                    <select class="form-input" [(ngModel)]="vendorForm.businessCategory" name="category" required>
                      <option value="">Select a category</option>
                      <option value="electronics">Electronics & Gadgets</option>
                      <option value="fashion">Fashion & Accessories</option>
                      <option value="books">Books & Stationery</option>
                      <option value="food">Food & Beverages</option>
                      <option value="services">Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">Business Phone</label>
                  <div class="input-wrapper">
                    <span class="input-icon">📱</span>
                    <input 
                      type="tel" 
                      class="form-input"
                      [(ngModel)]="vendorForm.businessPhone"
                      name="businessPhone"
                      placeholder="+233 XXX XXX XXX"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Email Address</label>
                <div class="input-wrapper">
                  <span class="input-icon">✉️</span>
                  <input 
                    type="email" 
                    class="form-input"
                    [(ngModel)]="registerForm.email"
                    name="email"
                    placeholder="you@university.edu"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Password</label>
                <div class="input-wrapper">
                  <span class="input-icon">🔒</span>
                  <input 
                    [type]="showPassword ? 'text' : 'password'"
                    class="form-input"
                    [(ngModel)]="registerForm.password"
                    name="password"
                    placeholder="Create a strong password"
                    required
                  />
                  <button 
                    type="button"
                    class="toggle-password"
                    (click)="showPassword = !showPassword"
                    tabindex="-1"
                  >
                    {{ showPassword ? '👁️‍🗨️' : '👁️' }}
                  </button>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Confirm Password</label>
                <div class="input-wrapper">
                  <span class="input-icon">🔒</span>
                  <input 
                    [type]="showPassword ? 'text' : 'password'"
                    class="form-input"
                    [(ngModel)]="registerForm.confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>

              <label class="checkbox-group">
                <input 
                  type="checkbox" 
                  [(ngModel)]="registerForm.terms"
                  name="terms"
                  required
                />
                <span>I agree to the <strong>Terms of Service</strong> and <strong>Privacy Policy</strong></span>
              </label>

              <button type="submit" class="submit-btn" [disabled]="isLoading">
                {{ isLoading ? '⏳ Creating account...' : '✨ Create Account' }}
              </button>

              <div class="error-message" *ngIf="errorMessage">
                ⚠️ {{ errorMessage }}
              </div>

              <div class="form-footer">
                <span>Already have an account?</span>
                <button type="button" class="link-btn" (click)="isLoginMode = true">
                  Sign in here
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Footer -->
        <div class="auth-footer">
          <p>&copy; 2026 KTU Marketplace</p>
          <div class="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%);
      min-height: 100vh;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      color: #e0e0e0;
      overflow: hidden;
    }

    * {
      box-sizing: border-box;
    }

    .auth-container {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      overflow: hidden;
    }

    /* Animated Background */
    .background-animation {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
    }

    .blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.3;
      animation: blobMove 8s infinite ease-in-out;
    }

    .blob-1 {
      width: 300px;
      height: 300px;
      background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
      top: -50%;
      left: -10%;
      animation-duration: 8s;
    }

    .blob-2 {
      width: 250px;
      height: 250px;
      background: linear-gradient(135deg, #ff00ff 0%, #ff0066 100%);
      bottom: -20%;
      right: -5%;
      animation-duration: 10s;
      animation-delay: 2s;
    }

    .blob-3 {
      width: 200px;
      height: 200px;
      background: linear-gradient(135deg, #00ff88 0%, #00d4ff 100%);
      bottom: 10%;
      left: 10%;
      animation-duration: 12s;
      animation-delay: 4s;
    }

    @keyframes blobMove {
      0%, 100% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(30px, -30px);
      }
      50% {
        transform: translate(-30px, 30px);
      }
      75% {
        transform: translate(30px, 30px);
      }
    }

    .auth-content {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 480px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    /* ===== HEADER ===== */
    .auth-header {
      text-align: center;
      margin-bottom: 20px;
    }

    .logo {
      font-size: 56px;
      margin-bottom: 16px;
      display: inline-block;
      animation: floatUp 0.6s ease-out;
    }

    @keyframes floatUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .auth-header h1 {
      font-size: 32px;
      font-weight: 800;
      margin: 0 0 8px 0;
      background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: floatUp 0.6s ease-out 0.1s backwards;
    }

    .auth-header p {
      margin: 0;
      color: #888;
      font-size: 14px;
      font-weight: 500;
      animation: floatUp 0.6s ease-out 0.2s backwards;
    }

    /* ===== AUTH CARD ===== */
    .auth-card {
      background: rgba(20, 30, 48, 0.5);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
      animation: slideUp 0.6s ease-out 0.3s backwards;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ===== ROLE SELECTOR ===== */
    .role-selector {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      padding: 16px;
      background: rgba(0, 0, 0, 0.2);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .role-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 12px 10px;
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      color: #888;
      font-size: 12px;
      font-weight: 600;
    }

    .role-btn:hover {
      border-color: rgba(0, 212, 255, 0.3);
      background: rgba(0, 212, 255, 0.05);
      color: #00d4ff;
    }

    .role-btn.active {
      background: linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(0, 102, 255, 0.15) 100%);
      border-color: rgba(0, 212, 255, 0.5);
      color: #00d4ff;
      box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
    }

    .role-icon {
      font-size: 20px;
    }

    /* ===== FORM CONTAINER ===== */
    .form-container {
      padding: 28px;
    }

    /* Mode Tabs */
    .mode-tabs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-bottom: 24px;
    }

    .mode-tab {
      padding: 12px 16px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      color: #888;
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .mode-tab:hover {
      border-color: rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.08);
    }

    .mode-tab.active {
      background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
      border-color: rgba(0, 212, 255, 0.5);
      color: white;
      box-shadow: 0 4px 16px rgba(0, 212, 255, 0.2);
    }

    /* Form */
    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .form-header {
      text-align: center;
      margin-bottom: 8px;
    }

    .form-header h2 {
      margin: 0 0 4px 0;
      font-size: 20px;
      font-weight: 700;
    }

    .form-header p {
      margin: 0;
      font-size: 13px;
      color: #888;
    }

    /* Form Group */
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .form-label {
      font-size: 12px;
      font-weight: 600;
      color: #aaa;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .input-icon {
      position: absolute;
      left: 12px;
      font-size: 16px;
      pointer-events: none;
    }

    .form-input,
    select {
      width: 100%;
      padding: 12px 12px 12px 40px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      color: #e0e0e0;
      font-size: 14px;
      transition: all 0.3s ease;
      font-family: inherit;
    }

    .form-input:focus,
    select:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(0, 212, 255, 0.3);
      box-shadow: 0 0 20px rgba(0, 212, 255, 0.1), inset 0 0 10px rgba(0, 212, 255, 0.05);
    }

    .form-input::placeholder {
      color: #555;
    }

    select option {
      background: #1a1f2e;
      color: #e0e0e0;
    }

    .toggle-password {
      position: absolute;
      right: 12px;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 16px;
      padding: 4px 8px;
      color: #888;
      transition: color 0.3s ease;
    }

    .toggle-password:hover {
      color: #00d4ff;
    }

    /* Forgot Password */
    .forgot-password {
      text-align: right;
      margin: -8px 0 4px 0;
    }

    .forgot-link {
      font-size: 12px;
      color: #888;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .forgot-link:hover {
      color: #00d4ff;
    }

    /* Checkbox */
    .checkbox-group {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: 12px;
      color: #aaa;
      cursor: pointer;
      margin: 8px 0 4px 0;
    }

    .checkbox-group input {
      margin-top: 3px;
      width: 16px;
      height: 16px;
      cursor: pointer;
      accent-color: #00d4ff;
    }

    /* Submit Button */
    .submit-btn {
      padding: 14px 16px;
      background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
      color: white;
      border: none;
      border-radius: 10px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 8px;
      box-shadow: 0 6px 24px rgba(0, 212, 255, 0.2);
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(0, 212, 255, 0.3);
    }

    .submit-btn:active:not(:disabled) {
      transform: translateY(0);
    }

    .submit-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    /* Error Message */
    .error-message {
      padding: 12px 14px;
      background: rgba(255, 107, 107, 0.1);
      border: 1px solid rgba(255, 107, 107, 0.3);
      border-radius: 8px;
      color: #ff9898;
      font-size: 12px;
      margin-top: 4px;
    }

    /* Form Footer */
    .form-footer {
      text-align: center;
      font-size: 12px;
      color: #888;
      margin-top: 8px;
    }

    .link-btn {
      background: none;
      border: none;
      color: #00d4ff;
      font-weight: 600;
      cursor: pointer;
      padding: 0;
      font-size: 12px;
      margin-left: 4px;
      transition: color 0.3s ease;
    }

    .link-btn:hover {
      color: #00ff88;
      text-decoration: underline;
    }

    /* Vendor Section */
    .vendor-section {
      padding: 12px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      margin: 8px 0;
    }

    /* ===== FOOTER ===== */
    .auth-footer {
      text-align: center;
      font-size: 11px;
      color: #666;
    }

    .footer-links {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-top: 8px;
    }

    .footer-links a {
      color: #888;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: #00d4ff;
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 480px) {
      .auth-content {
        max-width: 100%;
      }

      .auth-header h1 {
        font-size: 24px;
      }

      .form-container {
        padding: 20px;
      }

      .mode-tabs {
        margin-bottom: 16px;
      }

      .auth-form {
        gap: 12px;
      }
    }
  `]
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  currentRole: Role = 'customer';
  isLoginMode = true;
  isLoading = false;
  showPassword = false;
  errorMessage = '';

  loginForm: LoginForm = {
    email: '',
    password: ''
  };

  registerForm: RegisterForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  };

  vendorForm: VendorRegisterForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
    businessName: '',
    businessCategory: '',
    businessPhone: ''
  };

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      const user = this.authService.getCurrentUser();
      if (user?.role === 'admin') {
        this.router.navigateByUrl('/admin');
      } else if (user?.role === 'vendor') {
        this.router.navigateByUrl('/vendor');
      } else if (user?.role === 'customer') {
        this.router.navigateByUrl('/customer');
      } else {
        this.router.navigateByUrl('/');
      }
    }
  }

  switchRole(role: Role): void {
    this.currentRole = role;
    this.isLoginMode = true;
    this.errorMessage = '';
    this.resetForms();
  }

  handleLogin(): void {
    this.errorMessage = '';

    if (!this.loginForm.email || !this.loginForm.password) {
      this.errorMessage = 'Please enter your email and password.';
      return;
    }

    this.isLoading = true;

    this.authService.login({
      email: this.loginForm.email,
      password: this.loginForm.password,
      role: this.currentRole
    }).subscribe({
      next: (response) => {
        this.isLoading = false;
        localStorage.setItem('unimart_user_role', this.currentRole);
        
        if (this.currentRole === 'admin') {
          this.router.navigateByUrl('/admin');
        } else if (this.currentRole === 'vendor') {
          this.router.navigateByUrl('/vendor');
        } else if (this.currentRole === 'customer') {
          this.router.navigateByUrl('/customer');
        } else {
          this.router.navigateByUrl('/');
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message || 'Login failed. Please try again.';
      }
    });
  }

  handleRegister(): void {
    this.errorMessage = '';

    const commonForm = this.registerForm;
    const vendorForm = this.currentRole === 'vendor' ? this.vendorForm : null;

    if (!commonForm.name || !commonForm.email || !commonForm.password) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    if (this.currentRole === 'vendor' && vendorForm) {
      if (!vendorForm.businessName || !vendorForm.businessCategory || !vendorForm.businessPhone) {
        this.errorMessage = 'Please fill in all required fields.';
        return;
      }
    }

    if (commonForm.password !== commonForm.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    if (!commonForm.terms) {
      this.errorMessage = 'You must agree to the Terms of Service.';
      return;
    }

    this.isLoading = true;

    this.authService.register({
      name: commonForm.name,
      email: commonForm.email,
      password: commonForm.password,
      role: this.currentRole,
      businessName: this.currentRole === 'vendor' ? vendorForm?.businessName : undefined,
      businessCategory: this.currentRole === 'vendor' ? vendorForm?.businessCategory : undefined,
      businessPhone: this.currentRole === 'vendor' ? vendorForm?.businessPhone : undefined
    }).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.errorMessage = '';
        
        if (this.currentRole === 'vendor') {
          alert('Vendor account created! Your shop is pending admin approval.');
        } else {
          alert('Account created successfully! Please log in.');
        }
        
        this.isLoginMode = true;
        this.resetForms();
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message || 'Registration failed. Please try again.';
      }
    });
  }

  private resetForms(): void {
    this.loginForm = { email: '', password: '' };
    this.registerForm = { name: '', email: '', password: '', confirmPassword: '', terms: false };
    this.vendorForm = { 
      name: '', 
      email: '', 
      password: '', 
      confirmPassword: '', 
      terms: false,
      businessName: '',
      businessCategory: '',
      businessPhone: ''
    };
    this.showPassword = false;
  }
}
