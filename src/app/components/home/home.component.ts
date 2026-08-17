import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

type Product = {
  id: string;
  title: string;
  price: number;
  oldPrice: number;
  image: string;
  badge: string;
  soldText?: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-page">
      <!-- Ultra-Modern Header -->
      <header class="navbar">
        <div class="navbar-container">
          <button class="mobile-menu-toggle" type="button" aria-label="Open menu" (click)="mobileMenuOpen = !mobileMenuOpen">
            ☰
          </button>

          <!-- Logo/Brand -->
          <div class="navbar-brand">
            <div class="brand-icon">🎓</div>
            <div class="brand-info">
              <h1 class="brand-title">KTU</h1>
              <p class="brand-subtitle">Marketplace</p>
            </div>
          </div>

          <!-- Search Bar -->
          <div class="search-container">
            <input type="text" class="search-input" placeholder="Search items, shops, services..." />
            <button class="search-btn" type="button">
              <span class="search-icon">🔍</span>
            </button>
          </div>

          <!-- Right Actions -->
          <div class="navbar-actions">
            <button class="action-btn" type="button" aria-label="Help" routerLink="/help">
              <span>❓</span>
              <span class="btn-label">Help</span>
            </button>
            <button class="action-btn" type="button" routerLink="/login">
              <span>👤</span>
              <span class="btn-label">Login</span>
            </button>
            <button class="action-btn cart-btn" type="button" routerLink="/cart">
              <span class="cart-icon">🛒</span>
              <span class="cart-badge">{{ cartCount }}</span>
            </button>
          </div>
        </div>
      </header>

      <div class="mobile-overlay" [class.open]="mobileMenuOpen" (click)="mobileMenuOpen = false"></div>

      <aside class="slide-menu" [class.open]="mobileMenuOpen" aria-label="Mobile navigation">
        <div class="slide-menu-header">
          <div class="slide-brand">
            <span class="slide-brand-icon">🎓</span>
            <span>KTU Marketplace</span>
          </div>
          <button type="button" class="close-menu" (click)="mobileMenuOpen = false">✕</button>
        </div>

        <nav class="slide-nav">
          <a routerLink="/" (click)="mobileMenuOpen = false">Home</a>
          <a routerLink="/login" (click)="mobileMenuOpen = false">Login</a>
          <a routerLink="/cart" (click)="mobileMenuOpen = false">Cart</a>
          <a routerLink="/login" (click)="mobileMenuOpen = false">Vendor Portal</a>
          <a routerLink="/login" (click)="mobileMenuOpen = false">Student Shop</a>
        </nav>
      </aside>

      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <div class="hero-pill">OFFICIAL CAMPUS E-COMMERCE PLATFORM</div>

          <h2 class="hero-title">
            <span class="title-line">Everything You Need,</span>
            <span class="title-accent">Right on Campus</span>
          </h2>

          <p class="hero-subtitle">
            Shop goods, book services, pay with Mobile Money or card — all managed by KTU.
          </p>

          <div class="hero-features">
            <article class="feature-card admin-card">
              <div class="feature-icon">🛡️</div>
              <h3>Administration</h3>
              <p>Manage vendors, monitor orders, configure payments and platform settings.</p>
              <a href="/login" class="feature-link">Enter Portal <span>→</span></a>
            </article>

            <article class="feature-card vendor-card">
              <div class="feature-icon">🛍️</div>
              <h3>Vendor Portal</h3>
              <p>List your products and services, track sales and manage your campus shop.</p>
              <a href="/login" class="feature-link">Enter Portal <span>→</span></a>
            </article>

            <article class="feature-card student-card">
              <div class="feature-icon">🛒</div>
              <h3>Student Shop</h3>
              <p>Browse goods and services, order with MoMo or card, track deliveries.</p>
              <a href="/login" class="feature-link">Enter Portal <span>→</span></a>
            </article>
          </div>
        </div>
      </section>

      <!-- Products Section -->
      <main class="products-section">
        <div class="section-header">
          <h2>Trending Now</h2>
          <p>Popular items on campus</p>
        </div>
        
        <div class="products-grid">
          <article class="product-card" *ngFor="let item of products">
            <div class="product-image-wrap">
              <div class="product-image" [style.background-image]="item.image"></div>
              <div class="product-badge">{{ item.badge }}</div>
              <button class="wishlist-btn" type="button" aria-label="Add to wishlist">♡</button>
            </div>
            
            <div class="product-details">
              <h3 class="product-title">{{ item.title }}</h3>
              
              <div class="product-pricing">
                <span class="current-price">GH₵ {{ item.price }}</span>
                <span class="old-price">GH₵ {{ item.oldPrice }}</span>
                <span class="discount-percent">-{{ getDiscount(item) }}%</span>
              </div>

              <div class="product-meta">
                <span class="express-badge">📦 Express</span>
              </div>

              <button class="buy-btn" type="button" (click)="addToCart(item)">
                <span>Get Now</span>
                <span class="btn-arrow">→</span>
              </button>
            </div>
          </article>
        </div>
      </main>

      <!-- Footer -->
      <footer class="footer">
        <div class="footer-content">
          <p>&copy; 2026 KTU Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%);
      color: #e0e0e0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      min-height: 100vh;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    button, input {
      font: inherit;
    }

    .home-page {
      min-height: 100vh;
    }

    /* ===== NAVBAR ===== */
    .navbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(15, 20, 25, 0.8);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding: 12px 0;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }

    .mobile-menu-toggle,
    .mobile-overlay,
    .slide-menu {
      display: none;
    }

    .navbar-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .navbar-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 140px;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .navbar-brand:hover {
      transform: scale(1.05);
    }

    .brand-icon {
      font-size: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .brand-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .brand-title {
      font-size: 20px;
      font-weight: 800;
      background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
    }

    .brand-subtitle {
      font-size: 10px;
      color: #888;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      line-height: 1;
    }

    /* Search Bar */
    .search-container {
      flex: 1;
      max-width: 400px;
      display: flex;
      align-items: center;
      gap: 2px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 10px 16px;
      transition: all 0.3s ease;
    }

    .search-container:focus-within {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(0, 212, 255, 0.3);
      box-shadow: 0 0 20px rgba(0, 212, 255, 0.1);
    }

    .search-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      color: #e0e0e0;
      font-size: 14px;
    }

    .search-input::placeholder {
      color: #666;
    }

    .search-btn {
      background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
      border: none;
      border-radius: 8px;
      padding: 8px 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      color: white;
    }

    .search-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 16px rgba(0, 212, 255, 0.3);
    }

    .search-icon {
      font-size: 16px;
    }

    /* Navbar Actions */
    .navbar-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .action-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #e0e0e0;
      padding: 10px 14px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      transition: all 0.3s ease;
      white-space: nowrap;
    }

    .action-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }

    .action-btn.primary {
      background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
      border: none;
      color: white;
      box-shadow: 0 4px 16px rgba(0, 212, 255, 0.2);
    }

    .action-btn.primary:hover {
      box-shadow: 0 6px 24px rgba(0, 212, 255, 0.3);
      transform: translateY(-3px);
    }

    .btn-label {
      display: inline;
    }

    .cart-btn {
      position: relative;
    }

    .cart-icon {
      font-size: 16px;
    }

    .cart-badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background: linear-gradient(135deg, #ff6b6b 0%, #ff0066 100%);
      color: white;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 800;
    }

    /* ===== HERO SECTION ===== */
    .hero {
      padding: 40px 20px 30px;
      text-align: center;
      background: linear-gradient(135deg, rgba(0, 25, 53, 0.96) 0%, rgba(9, 34, 63, 0.96) 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }

    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero-university {
      display: inline-block;
      margin-bottom: 18px;
      font-size: 14px;
      line-height: 1.2;
      letter-spacing: 1.4px;
      font-weight: 700;
      color: #e9f3ff;
      text-transform: uppercase;
      opacity: 0.9;
    }

    .hero-pill {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 10px 18px;
      border: 1px solid rgba(243, 188, 71, 0.9);
      border-radius: 999px;
      color: #f5d38d;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      background: rgba(20, 40, 71, 0.5);
      margin-bottom: 28px;
    }

    .hero-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      font-size: clamp(2.1rem, 4vw, 3.5rem);
      font-weight: 700;
      margin-bottom: 18px;
      line-height: 1.08;
      color: #f6f8fb;
      letter-spacing: -0.04em;
    }

    .title-line {
      display: block;
      font-weight: 700;
      color: #f4f7fb;
    }

    .title-accent {
      display: block;
      background: linear-gradient(135deg, #f4d47f 0%, #d4a63d 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
      font-style: normal;
      font-family: inherit;
    }

    .hero-subtitle {
      max-width: 760px;
      margin: 0 auto 42px;
      font-size: clamp(0.95rem, 1.8vw, 1.28rem);
      color: #dbe8ff;
      line-height: 1.45;
      font-weight: 400;
      opacity: 0.92;
    }

    .hero-features {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 22px;
      max-width: 1200px;
      margin: 0 auto;
      text-align: left;
    }

    .feature-card {
      position: relative;
      min-height: 250px;
      padding: 26px 20px 18px;
      border-radius: 18px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(17, 51, 84, 0.8);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 16px;
    }

    .admin-card {
      background: linear-gradient(180deg, rgba(17, 40, 77, 0.9), rgba(12, 29, 56, 0.82));
    }

    .vendor-card {
      background: linear-gradient(180deg, rgba(8, 42, 78, 0.9), rgba(15, 35, 65, 0.82));
    }

    .student-card {
      background: linear-gradient(180deg, rgba(11, 56, 60, 0.9), rgba(10, 45, 52, 0.82));
    }

    .feature-icon {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.08);
      font-size: 28px;
      margin-bottom: 4px;
    }

    .feature-card h3 {
      margin: 0;
      font-size: clamp(1.3rem, 1.8vw, 1.7rem);
      line-height: 1.2;
      font-weight: 600;
      color: #edf5ff;
    }

    .feature-card p {
      margin: 0;
      color: #dfeafc;
      line-height: 1.6;
      font-size: 0.96rem;
      opacity: 0.96;
    }

    .feature-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: auto;
      color: #f5d38d;
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 600;
    }

    .feature-link span {
      font-size: 1.2rem;
      transition: transform 0.2s ease;
    }

    .feature-card:hover .feature-link span {
      transform: translateX(2px);
    }

    /* ===== PRODUCTS SECTION ===== */
    .products-section {
      max-width: 1400px;
      margin: 0 auto;
      padding: 60px 20px;
    }

    .section-header {
      margin-bottom: 40px;
      text-align: center;
    }

    .section-header h2 {
      font-size: 36px;
      font-weight: 800;
      margin-bottom: 8px;
      background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-header p {
      font-size: 14px;
      color: #666;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    }

    /* ===== PRODUCT CARD ===== */
    .product-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      overflow: hidden;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
      backdrop-filter: blur(10px);
    }

    .product-card:hover {
      transform: translateY(-8px);
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(0, 212, 255, 0.2);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 212, 255, 0.1);
    }

    .product-image-wrap {
      position: relative;
      width: 100%;
      height: 160px;
      overflow: hidden;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .product-image {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: transform 0.3s ease;
    }

    .product-card:hover .product-image {
      transform: scale(1.1);
    }

    .product-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      background: linear-gradient(135deg, #ff6b6b 0%, #ff0066 100%);
      color: white;
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      backdrop-filter: blur(10px);
    }

    .wishlist-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      width: 36px;
      height: 36px;
      font-size: 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      color: white;
    }

    .wishlist-btn:hover {
      background: rgba(255, 0, 102, 0.3);
      border-color: rgba(255, 0, 102, 0.5);
      transform: scale(1.1);
    }

    .product-details {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex: 1;
    }

    .product-title {
      font-size: 14px;
      font-weight: 600;
      color: #e0e0e0;
      line-height: 1.4;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .product-pricing {
      display: flex;
      align-items: baseline;
      gap: 8px;
      flex-wrap: wrap;
    }

    .current-price {
      font-size: 16px;
      font-weight: 800;
      color: #00d4ff;
    }

    .old-price {
      font-size: 12px;
      color: #666;
      text-decoration: line-through;
    }

    .discount-percent {
      font-size: 11px;
      color: #ff6b6b;
      font-weight: 700;
      background: rgba(255, 107, 107, 0.1);
      padding: 2px 6px;
      border-radius: 4px;
    }

    .product-meta {
      font-size: 12px;
      color: #888;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .express-badge {
      background: rgba(0, 212, 255, 0.1);
      color: #00d4ff;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      width: fit-content;
    }

    .buy-btn {
      background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
      color: white;
      border: none;
      border-radius: 10px;
      padding: 12px 16px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-top: auto;
      font-size: 13px;
    }

    .buy-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(0, 212, 255, 0.3);
    }

    .buy-btn:active {
      transform: translateY(0);
    }

    .btn-arrow {
      font-size: 16px;
      transition: transform 0.3s ease;
    }

    .buy-btn:hover .btn-arrow {
      transform: translateX(4px);
    }

    /* ===== FOOTER ===== */
    .footer {
      background: rgba(15, 20, 25, 0.8);
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding: 30px 20px;
      text-align: center;
    }

    .footer-content {
      max-width: 1400px;
      margin: 0 auto;
      font-size: 12px;
      color: #666;
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 768px) {
      .mobile-menu-toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.04);
        color: #eaf6ff;
        font-size: 24px;
        cursor: pointer;
        flex-shrink: 0;
      }

      .navbar-container {
        gap: 12px;
        padding: 0 14px;
      }

      .navbar-brand {
        min-width: auto;
        flex: 1;
      }

      .search-container {
        order: 3;
        width: 100%;
        max-width: none;
        flex: 1 1 100%;
      }

      .navbar-actions {
        display: none;
      }

      .btn-label {
        display: none;
      }

      .hero {
        padding-top: 30px;
      }

      .hero-university {
        font-size: 11px;
        letter-spacing: 1px;
      }

      .hero-pill {
        font-size: 9px;
        padding: 9px 12px;
        letter-spacing: 0.9px;
        margin-bottom: 20px;
      }

      .hero-title {
        font-size: 2.1rem;
        gap: 4px;
        margin-bottom: 14px;
      }

      .hero-subtitle {
        font-size: 0.98rem;
        margin-bottom: 26px;
      }

      .hero-features {
        grid-template-columns: 1fr;
        gap: 14px;
      }

      .feature-card {
        min-height: 180px;
        padding: 18px 16px;
      }

      .feature-icon {
        width: 46px;
        height: 46px;
        font-size: 22px;
      }

      .feature-card h3 {
        font-size: 1.35rem;
      }

      .feature-card p {
        font-size: 0.9rem;
      }

      .products-grid {
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 12px;
      }

      .products-section {
        padding: 40px 16px;
      }

      .section-header h2 {
        font-size: 24px;
      }

      .mobile-overlay {
        position: fixed;
        inset: 0;
        background: rgba(8, 12, 18, 0.5);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.25s ease;
        z-index: 1200;
      }

      .mobile-overlay.open {
        display: block;
        opacity: 1;
        pointer-events: auto;
      }

      .slide-menu {
        position: fixed;
        top: 0;
        left: 0;
        width: min(82vw, 320px);
        height: 100vh;
        background: linear-gradient(180deg, #0d1726 0%, #101c2d 100%);
        border-right: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 12px 0 32px rgba(0, 0, 0, 0.35);
        z-index: 1300;
        transform: translateX(-110%);
        transition: transform 0.28s ease;
        display: flex;
        flex-direction: column;
        padding: 18px 16px;
      }

      .slide-menu.open {
        display: flex;
        transform: translateX(0);
      }

      .slide-menu-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 16px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        margin-bottom: 18px;
      }

      .slide-brand {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #edf5ff;
        font-weight: 700;
      }

      .slide-brand-icon {
        font-size: 20px;
      }

      .close-menu {
        background: transparent;
        border: none;
        color: #edf5ff;
        font-size: 22px;
        cursor: pointer;
      }

      .slide-nav {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .slide-nav a {
        display: block;
        padding: 12px 14px;
        border-radius: 12px;
        color: #edf5ff;
        text-decoration: none;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.06);
        font-weight: 600;
      }
    }

    @media (max-width: 480px) {
      .navbar-container {
        flex-wrap: wrap;
      }

      .navbar-brand {
        min-width: auto;
      }

      .action-btn {
        padding: 8px 10px;
        font-size: 12px;
      }

      .products-grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 10px;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  mobileMenuOpen = false;
  cartCount = 0;

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.updateCartCount();
  }

  addToCart(product: Product): void {
    this.productService.addToCart(product.id);
    this.updateCartCount();
    this.router.navigate(['/cart']);
  }

  private updateCartCount(): void {
    this.cartCount = this.productService.getCartItems().reduce((sum, item) => sum + item.quantity, 0);
  }

  products: Product[] = [
    {
      id: 'backpack-1',
      title: 'School Backpack with Laptop Sleeve',
      price: 139,
      oldPrice: 210,
      badge: 'Back to school',
      image: 'url("https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80")'
    },
    {
      id: 'notebook-1',
      title: 'Premium Notebooks Set',
      price: 48,
      oldPrice: 76,
      badge: 'Study pack',
      image: 'url("https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80")'
    },
    {
      id: 'calculator-1',
      title: 'Scientific Calculator',
      price: 76,
      oldPrice: 120,
      badge: 'Campus must-have',
      image: 'url("https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=700&q=80")'
    },
    {
      id: 'lamp-1',
      title: 'Student Desk Lamp',
      price: 65,
      oldPrice: 95,
      badge: 'Study time',
      image: 'url("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80")'
    },
    {
      id: 'paper-1',
      title: 'A4 Printing Paper Bundle',
      price: 32,
      oldPrice: 52,
      badge: 'Office pack',
      image: 'url("https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80")'
    },
    {
      id: 'earbuds-1',
      title: 'Wireless Bluetooth Earbuds',
      price: 89,
      oldPrice: 150,
      badge: 'Tech essential',
      image: 'url("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80")'
    },
    {
      id: 'cable-1',
      title: 'USB-C Fast Charging Cable',
      price: 24,
      oldPrice: 45,
      badge: 'Quick delivery',
      image: 'url("https://images.unsplash.com/photo-1621540577063-f0b83a5b7e6d?auto=format&fit=crop&w=700&q=80")'
    },
    {
      id: 'shirt-1',
      title: 'Campus T-Shirt Bundle',
      price: 55,
      oldPrice: 85,
      badge: 'Trending',
      image: 'url("https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80")'
    },
    {
      id: 'bottle-1',
      title: 'Water Bottle 1L Stainless Steel',
      price: 35,
      oldPrice: 60,
      badge: 'Eco-friendly',
      image: 'url("https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=700&q=80")'
    },
    {
      id: 'charger-1',
      title: 'Portable Phone Charger',
      price: 42,
      oldPrice: 70,
      badge: 'Power bank',
      image: 'url("https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=700&q=80")'
    }
  ];

  getDiscount(item: Product): number {
    return Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100);
  }
}
