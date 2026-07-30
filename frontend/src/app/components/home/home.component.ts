import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
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

    <div class="store-hero text-white">
      <section class="container py-5">
        <div class="row align-items-center g-4">
          <div class="col-lg-7">
            <div class="hero-badge mb-3">Campus Commerce. Trusted. Smart. Fast.</div>
            <h1 class="fw-bold mb-3 hero-title">Shop the student marketplace.</h1>
            <p class="mb-4 text-white-50 hero-copy">
              Discover daily essentials, fashion, tech accessories, and campus-ready products from verified vendors in one beautiful digital storefront.
            </p>

            <div class="row g-2 mb-4">
              <div class="col-md-8">
                <div class="search-pill d-flex align-items-center gap-2">
                  <span>🔎</span>
                  <input type="text" class="form-control form-control-lg border-0 shadow-none" placeholder="Search for books, gadgets, fashion, food..." />
                </div>
              </div>
              <div class="col-md-4">
                <a class="btn btn-light btn-lg w-100 rounded-pill fw-bold" routerLink="/register">Start Shopping</a>
              </div>
            </div>

            <div class="hero-stats d-flex flex-wrap gap-3">
              <div class="stat-pill">⚡ Fast checkout experience</div>
              <div class="stat-pill">🛡️ Verified vendors</div>
              <div class="stat-pill">🤖 AI smart discovery</div>
            </div>

            <div class="hero-chip-row mt-3">
              <span class="hero-chip">Student savings</span>
              <span class="hero-chip">Campus essentials</span>
              <span class="hero-chip">Tech drop</span>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="shop-panel shadow-lg border-0">
              <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <p class="mb-1 text-uppercase small fw-bold text-primary">Hot today</p>
                    <h3 class="fw-bold mb-0">UniMart Deals</h3>
                  </div>
                  <span class="badge rounded-pill bg-danger px-3">-35%</span>
                </div>

                <div class="deal-track">
                  <div class="deal-track-inner">
                    <div class="deal-card">
                      <div class="deal-visual">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80" alt="Backpack bundle" />
                      </div>
                      <div class="deal-title">Campus Essentials Bundle</div>
                      <div class="deal-price">GH₵ 189</div>
                      <div class="deal-note">Backpack + notebook + stationery starter pack</div>
                    </div>

                    <div class="deal-card">
                      <div class="deal-visual">
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80" alt="Student tech saver" />
                      </div>
                      <div class="deal-title">Student Tech Saver</div>
                      <div class="deal-price">GH₵ 299</div>
                      <div class="deal-note">Wireless earbuds and charging accessories</div>
                    </div>

                    <div class="deal-card">
                      <div class="deal-visual">
                        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80" alt="Weekend fashion drop" />
                      </div>
                      <div class="deal-title">Weekend Fashion Drop</div>
                      <div class="deal-price">GH₵ 119</div>
                      <div class="deal-note">Trend-ready outfits for campus life</div>
                    </div>

                    <div class="deal-card">
                      <div class="deal-visual">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80" alt="Backpack bundle" />
                      </div>
                      <div class="deal-title">Campus Essentials Bundle</div>
                      <div class="deal-price">GH₵ 189</div>
                      <div class="deal-note">Backpack + notebook + stationery starter pack</div>
                    </div>

                    <div class="deal-card">
                      <div class="deal-visual">
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80" alt="Student tech saver" />
                      </div>
                      <div class="deal-title">Student Tech Saver</div>
                      <div class="deal-price">GH₵ 299</div>
                      <div class="deal-note">Wireless earbuds and charging accessories</div>
                    </div>

                    <div class="deal-card">
                      <div class="deal-visual">
                        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80" alt="Weekend fashion drop" />
                      </div>
                      <div class="deal-title">Weekend Fashion Drop</div>
                      <div class="deal-price">GH₵ 119</div>
                      <div class="deal-note">Trend-ready outfits for campus life</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="container py-5">
      <div class="section-heading d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <p class="mb-1 text-primary fw-bold text-uppercase small">Browse categories</p>
          <h2 class="fw-bold mb-0">Popular collections</h2>
        </div>
        <a class="text-decoration-none fw-semibold" routerLink="/register">View all categories</a>
      </div>

      <div class="row g-3">
        <div class="col-6 col-md-3">
          <div class="category-card">📚 Books & Study</div>
        </div>
        <div class="col-6 col-md-3">
          <div class="category-card">🎧 Tech & Gadgets</div>
        </div>
        <div class="col-6 col-md-3">
          <div class="category-card">🧥 Fashion</div>
        </div>
        <div class="col-6 col-md-3">
          <div class="category-card">🍽️ Food & Snacks</div>
        </div>
      </div>
    </section>

    <section class="container pb-5">
      <div class="section-heading d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <p class="mb-1 text-primary fw-bold text-uppercase small">Featured products</p>
          <h2 class="fw-bold mb-0">Best sellers this week</h2>
        </div>
        <a class="btn btn-outline-primary rounded-pill px-4" routerLink="/register">Explore more</a>
      </div>

      <div class="row g-4">
        <div class="col-md-6 col-lg-3">
          <div class="product-card h-100">
            <div class="product-image">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="AI Study Companion" />
            </div>
            <div class="p-3">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge bg-light text-dark">Smart series</span>
                <span class="text-warning">★★★★★</span>
              </div>
              <h6 class="fw-bold mb-2">AI Study Companion</h6>
              <p class="text-muted small mb-3">Perfect for students needing productivity and planning tools.</p>
              <div class="d-flex justify-content-between align-items-center">
                <strong class="text-primary">GH₵ 89</strong>
                <a class="btn btn-sm btn-primary rounded-pill" routerLink="/login">Buy now</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="product-card h-100">
            <div class="product-image">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" alt="Urban Backpack Pro" />
            </div>
            <div class="p-3">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge bg-light text-dark">Campus favorite</span>
                <span class="text-warning">★★★★★</span>
              </div>
              <h6 class="fw-bold mb-2">Urban Backpack Pro</h6>
              <p class="text-muted small mb-3">Durable, sleek, and designed for everyday campus movement.</p>
              <div class="d-flex justify-content-between align-items-center">
                <strong class="text-primary">GH₵ 145</strong>
                <a class="btn btn-sm btn-primary rounded-pill" routerLink="/login">Buy now</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="product-card h-100">
            <div class="product-image">
              <img src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80" alt="Fast Charge Kit" />
            </div>
            <div class="p-3">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge bg-light text-dark">Tech drop</span>
                <span class="text-warning">★★★★★</span>
              </div>
              <h6 class="fw-bold mb-2">Fast Charge Kit</h6>
              <p class="text-muted small mb-3">Portable charger, cable set, and sleek organizer case.</p>
              <div class="d-flex justify-content-between align-items-center">
                <strong class="text-primary">GH₵ 72</strong>
                <a class="btn btn-sm btn-primary rounded-pill" routerLink="/login">Buy now</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="product-card h-100">
            <div class="product-image">
              <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80" alt="Campus Essentials Tee" />
            </div>
            <div class="p-3">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge bg-light text-dark">Street style</span>
                <span class="text-warning">★★★★★</span>
              </div>
              <h6 class="fw-bold mb-2">Campus Essentials Tee</h6>
              <p class="text-muted small mb-3">Modern comfort wear with everyday style and hoodie appeal.</p>
              <div class="d-flex justify-content-between align-items-center">
                <strong class="text-primary">GH₵ 99</strong>
                <a class="btn btn-sm btn-primary rounded-pill" routerLink="/login">Buy now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container pb-5">
      <div class="row g-4 align-items-stretch">
        <div class="col-lg-8">
          <div class="promo-banner">
            <div class="row align-items-center g-3">
              <div class="col-md-8">
                <p class="mb-2 text-uppercase fw-bold small">Exclusive student offer</p>
                <h2 class="fw-bold mb-2">Get 20% off your first campus order</h2>
                <p class="mb-0 text-white-50">Use UniMart starter offer for your next purchase and discover local vendors faster.</p>
              </div>
              <div class="col-md-4 text-md-end">
                <a class="btn btn-light rounded-pill px-4 fw-bold" routerLink="/register">Claim offer</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="trust-panel h-100">
            <div class="card-body p-4">
              <h3 class="fw-bold mb-3">Why customers trust UniMart</h3>
              <ul class="mb-0 ps-3">
                <li>Secure and simple login with role-based accounts</li>
                <li>Vendor marketplace with modern storefront management</li>
                <li>Smart search and product discovery</li>
                <li>Focused on real campus commerce needs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
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

      .store-hero {
        position: relative;
        overflow: hidden;
        background:
          radial-gradient(circle at top right, rgba(255, 255, 255, 0.24), transparent 28%),
          radial-gradient(circle at left center, rgba(20, 184, 166, 0.20), transparent 32%),
          linear-gradient(135deg, #071120, #133d8e 45%, #3b4bd6 74%, #7c3aed 100%);
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      }

      .store-hero::before,
      .store-hero::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        filter: blur(8px);
        opacity: 0.55;
        animation: floatGlow 9s ease-in-out infinite;
      }

      .store-hero::before {
        width: 260px;
        height: 260px;
        top: -30px;
        right: -30px;
        background: rgba(255, 255, 255, 0.16);
      }

      .store-hero::after {
        width: 220px;
        height: 220px;
        left: -40px;
        bottom: -30px;
        background: rgba(20, 184, 166, 0.28);
        animation-delay: 1.5s;
      }

      .hero-title {
        font-size: clamp(2rem, 3.8vw, 3.6rem);
        line-height: 1.05;
        letter-spacing: -0.04em;
        text-shadow: 0 16px 30px rgba(0, 0, 0, 0.18);
      }

      .hero-copy {
        font-size: 1rem;
        max-width: 650px;
        line-height: 1.7;
      }

      .hero-chip-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .hero-chip {
        padding: 7px 12px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.14);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: #f8fbff;
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.03em;
      }

      .hero-badge,
      .stat-pill,
      .search-pill,
      .category-card,
      .product-card,
      .shop-panel,
      .promo-banner,
      .trust-panel {
        border-radius: 20px;
      }

      .hero-badge {
        display: inline-block;
        padding: 8px 14px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.30), rgba(255, 255, 255, 0.14));
        border: 1px solid rgba(255, 255, 255, 0.24);
        font-size: 0.8rem;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        box-shadow: 0 14px 32px rgba(6, 16, 31, 0.24);
      }

      .search-pill {
        background: rgba(255, 255, 255, 0.16);
        border: 1px solid rgba(255, 255, 255, 0.28);
        padding: 8px 10px;
        backdrop-filter: blur(16px);
        box-shadow: 0 18px 40px rgba(6, 16, 31, 0.24);
      }

      .search-pill input {
        background: transparent;
        color: #fff;
      }

      .search-pill input::placeholder {
        color: rgba(255, 255, 255, 0.72);
      }

      .stat-pill {
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(255, 255, 255, 0.16);
        padding: 10px 14px;
        font-weight: 700;
      }

      .shop-panel,
      .trust-panel,
      .product-card,
      .category-card {
        background: linear-gradient(180deg, #ffffff, #f8fbff);
        color: #0f172a;
        box-shadow: 0 28px 70px rgba(6, 23, 58, 0.16);
        border: 1px solid rgba(37, 99, 235, 0.14);
      }

      .deal-track {
        overflow: hidden;
        position: relative;
      }

      .deal-track-inner {
        display: flex;
        align-items: stretch;
        gap: 12px;
        width: max-content;
        animation: slideDeals 18s linear infinite;
        will-change: transform;
      }

      .deal-card {
        position: relative;
        background: linear-gradient(180deg, #f8fbff, #eef5ff);
        border-radius: 18px;
        padding: 16px;
        border: 1px solid rgba(13, 110, 253, 0.12);
        min-height: 240px;
        min-width: min(100%, 290px);
        width: min(100%, 290px);
        opacity: 0.92;
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow: hidden;
      }

      .deal-card::after {
        content: "";
        position: absolute;
        inset: auto -30px -40px auto;
        width: 120px;
        height: 120px;
        background: radial-gradient(circle, rgba(13, 110, 253, 0.14), transparent 70%);
      }

      .deal-visual {
        height: 120px;
        overflow: hidden;
        border-radius: 14px;
        background: #eaf2ff;
      }

      .deal-visual img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .deal-title {
        font-size: 0.82rem;
        font-weight: 800;
        text-transform: uppercase;
        color: #0b5ed7;
      }

      .deal-price {
        font-size: 1.45rem;
        font-weight: 900;
        color: #0f172a;
        margin: 4px 0;
      }

      .deal-note {
        font-size: 0.88rem;
        color: #4b5563;
      }

      .section-heading a {
        color: #0b5ed7;
        font-weight: 800;
      }

      .category-card {
        padding: 18px 16px;
        font-weight: 800;
        text-align: center;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
        background: linear-gradient(180deg, #ffffff, #eff6ff);
      }

      .category-card:hover,
      .product-card:hover,
      .shop-panel:hover,
      .trust-panel:hover {
        transform: translateY(-6px);
        box-shadow: 0 28px 70px rgba(12, 54, 139, 0.18);
      }

      .product-card {
        overflow: hidden;
        border-radius: 24px;
        transition: transform 0.28s ease, box-shadow 0.28s ease;
        background: linear-gradient(180deg, #ffffff, #f9fbff);
        border: 1px solid rgba(13, 110, 253, 0.08);
      }

      .product-image {
        height: 220px;
        overflow: hidden;
        background: #eef4ff;
      }

      .product-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.45s ease;
      }

      .product-card:hover .product-image img {
        transform: scale(1.08);
      }

      .product-card h6 {
        font-size: 1rem;
      }

      .product-card p,
      .product-card .badge,
      .product-card strong {
        font-size: 0.86rem;
      }

      .promo-banner {
        position: relative;
        overflow: hidden;
        background: linear-gradient(135deg, #071120, #0f4ad7 58%, #7c3aed 100%);
        color: #fff;
        padding: 28px;
        min-height: 100%;
        box-shadow: 0 28px 70px rgba(7, 26, 58, 0.24);
        animation: shimmerBanner 6s ease-in-out infinite;
        border-radius: 24px;
      }

      .promo-banner::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.16), transparent);
        transform: translateX(-100%);
        animation: sweep 4s linear infinite;
      }

      .trust-panel {
        border: 1px solid rgba(15, 23, 42, 0.08);
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

        .brand-mark {
          font-size: 1.1rem;
        }

        .hero-title {
          font-size: 1.9rem;
        }

        .hero-copy {
          font-size: 0.95rem;
        }
      }

      @keyframes floatGlow {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-14px) scale(1.05); }
      }

      @keyframes shimmerBanner {
        0%, 100% { filter: saturate(1); }
        50% { filter: saturate(1.25); }
      }

      @keyframes sweep {
        0% { transform: translateX(-120%); }
        100% { transform: translateX(120%); }
      }

      @keyframes slideDeals {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
    `
  ],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class HomeComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
