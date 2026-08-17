import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-customer-dashboard',
  template: `
    <div class="customer-shell">
      <header class="customer-topbar">
        <div class="topbar-left">
          <a href="/" class="help-link">❓ Help Center</a>
          <span class="divider">|</span>
          <span class="welcome-text">Welcome {{ currentUser?.name || 'Shopper' }}</span>
        </div>

        <div class="topbar-right">
          <div class="account-dropdown">
            <button class="dropdown-btn" (click)="toggleAccountMenu()">
              <span>👤 My Account</span>
              <span class="dropdown-arrow">{{ showAccountMenu ? '▼' : '▶' }}</span>
            </button>
            <div class="dropdown-menu" *ngIf="showAccountMenu">
              <a href="#profile">My Profile</a>
              <a href="#orders">My Orders</a>
              <a href="#addresses">Saved Addresses</a>
              <hr />
              <a href="#settings">Settings</a>
              <a (click)="logout()" class="logout-link">Logout</a>
            </div>
          </div>

          <a routerLink="/wishlist" class="topbar-action wishlist-link">
            <span>❤️ Wishlist</span>
            <span class="badge">{{ wishlistCount }}</span>
          </a>

          <a routerLink="/cart" class="topbar-action cart-link">
            <span>🛒 Basket</span>
            <span class="badge">{{ cartCount }}</span>
          </a>
        </div>
      </header>

      <div class="hero-section">
        <div class="hero-content">

        </div>
      </div>

      <section class="search-bar-section">
        <div class="search-container">
          <input 
            type="text" 
            class="search-input" 
            placeholder="Search products by name, category..." 
            [(ngModel)]="searchQuery"
            (input)="onSearch()"
          />
          <span class="search-icon">🔎</span>
        </div>

        <div class="filter-chips">
          <button 
            class="chip" 
            [class.active]="selectedCategory === ''"
            (click)="selectedCategory = ''; onSearch()"
          >
            All Products
          </button>
          <button 
            *ngFor="let cat of categoryOptions"
            class="chip" 
            [class.active]="selectedCategory === cat"
            (click)="selectedCategory = cat; onSearch()"
          >
            {{ cat }}
          </button>
        </div>
      </section>

      <section class="dashboard-content">
        <aside class="sidebar-left">
          <div class="panel glass-panel">
            <div class="panel-header">
              <p class="eyebrow">Account</p>
              <h3>{{ currentUser?.name || 'Your Account' }}</h3>
              <p class="text-muted">{{ currentUser?.email }}</p>
            </div>

            <div class="panel-block">
              <p class="block-title">Quick stats</p>
              <div class="stat-mini">
                <span>Items in cart</span>
                <strong>{{ cartCount }}</strong>
              </div>
              <div class="stat-mini">
                <span>Total cart value</span>
                <strong>GH₵ {{ cartTotal.toFixed(2) }}</strong>
              </div>
            </div>

            <div class="panel-block">
              <p class="block-title">Your wishlist</p>
              <p class="text-muted">Coming soon - save favorite items</p>
            </div>

            <button class="btn btn-outline w-100 mt-2" (click)="viewProfile()">View profile</button>
          </div>
        </aside>

        <main class="products-main">
          <div class="section-header">
            <div>
              <p class="eyebrow">Explore</p>
              <h2>Available Products</h2>
              <p class="text-muted">{{ filteredProducts.length }} items found</p>
            </div>
            <span class="sort-label">Sort by: Latest</span>
          </div>

          <div *ngIf="filteredProducts.length > 0; else noProducts" class="products-grid">
            <article *ngFor="let product of filteredProducts" class="product-card">
              <div class="product-image-wrapper">
                <img [src]="product.imageUrl || defaultImage" [alt]="product.title" class="product-image" />
                <span class="product-category">{{ product.category }}</span>
                <div class="product-overlay">
                  <button class="btn-add-to-cart" (click)="addToCart(product.id)">
                    <span>🛒 Add to cart</span>
                  </button>
                </div>
              </div>

              <div class="product-info">
                <h3>{{ product.title }}</h3>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-footer">
                  <div class="price-vendor">
                    <span class="price">GH₵ {{ product.price.toFixed(2) }}</span>
                    <span class="vendor">by {{ getVendorName(product.vendorEmail) }}</span>
                  </div>
                  <button class="btn-favorite" type="button">❤️</button>
                </div>
              </div>
            </article>
          </div>

          <ng-template #noProducts>
            <div class="empty-state">
              <h3>No products found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          </ng-template>
        </main>
      </section>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.12), transparent 25%),
          linear-gradient(180deg, #020617 0%, #0f1729 100%);
        color: #e2e8f0;
      }

      .customer-shell {
        max-width: 1400px;
        margin: 0 auto;
      }

      .customer-topbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        padding: 1rem 1.5rem;
        background: linear-gradient(90deg, #c41e3a 0%, #d32f47 50%, #c41e3a 100%);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        flex-wrap: wrap;
      }

      .topbar-left {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: white;
        font-weight: 600;
        flex: 1;
      }

      .help-link {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.3rem;
        font-weight: 600;
        font-size: 0.95rem;
      }

      .help-link:hover {
        opacity: 0.85;
      }

      .divider {
        color: rgba(255, 255, 255, 0.5);
      }

      .welcome-text {
        color: white;
        font-weight: 700;
        font-size: 1rem;
      }

      .topbar-right {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        flex-wrap: wrap;
      }

      .account-dropdown {
        position: relative;
      }

      .dropdown-btn {
        background: rgba(255, 255, 255, 0.15);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 0.6rem 1rem;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.2s ease;
      }

      .dropdown-btn:hover {
        background: rgba(255, 255, 255, 0.25);
      }

      .dropdown-arrow {
        font-size: 0.8rem;
      }

      .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        min-width: 180px;
        margin-top: 0.5rem;
      }

      .dropdown-menu a {
        display: block;
        padding: 0.75rem 1rem;
        color: #333;
        text-decoration: none;
        cursor: pointer;
        font-size: 0.95rem;
        transition: background 0.2s ease;
      }

      .dropdown-menu a:hover {
        background: #f0f0f0;
      }

      .dropdown-menu a:first-child {
        border-radius: 8px 8px 0 0;
      }

      .dropdown-menu hr {
        margin: 0.5rem 0;
        border: none;
        border-top: 1px solid #eee;
      }

      .logout-link {
        color: #c41e3a !important;
        font-weight: 600;
        border-radius: 0 0 8px 8px;
      }

      .topbar-action {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
        padding: 0.6rem 1rem;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 6px;
        transition: all 0.2s ease;
        position: relative;
      }

      .topbar-action:hover {
        background: rgba(255, 255, 255, 0.25);
      }

      .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #ffd700;
        color: #c41e3a;
        font-size: 0.7rem;
        font-weight: 800;
        margin-left: 0.3rem;
      }

      .hero-section {
        padding: 2rem 1.5rem;
        background: linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(10, 17, 44, 0.92));
        border-bottom: 1px solid rgba(148, 163, 184, 0.12);
      }

      .hero-content .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.24em;
        color: #93c5fd;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }

      .hero-content h1 {
        font-size: clamp(2rem, 2.5vw, 2.8rem);
        margin: 0 0 0.5rem 0;
        line-height: 1.2;
      }

      .hero-content .lead {
        color: #cbd5e1;
        max-width: 720px;
        margin: 0;
      }

      .page-content {
        padding: 2.5rem 1.5rem;
        max-width: 1400px;
        margin: 0 auto;
      }

      .search-bar-section {
        margin: 2rem 0;
      }

      .search-container {
        position: relative;
        margin-bottom: 1.5rem;
      }

      .search-input {
        width: 100%;
        padding: 1rem 1.2rem 1rem 2.8rem;
        border-radius: 999px;
        border: 1px solid rgba(148, 163, 184, 0.2);
        background: rgba(15, 23, 42, 0.92);
        color: #e2e8f0;
        font-size: 1rem;
      }

      .search-input::placeholder {
        color: #64748b;
      }

      .search-input:focus {
        outline: none;
        border-color: #3b82f6;
        background: rgba(15, 23, 42, 0.96);
      }

      .search-icon {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.1rem;
      }

      .filter-chips {
        display: flex;
        gap: 0.8rem;
        flex-wrap: wrap;
        overflow-x: auto;
        padding-bottom: 0.5rem;
      }

      .chip {
        padding: 0.7rem 1.2rem;
        border-radius: 999px;
        border: 1px solid rgba(148, 163, 184, 0.18);
        background: rgba(255, 255, 255, 0.04);
        color: #cbd5e1;
        font-weight: 600;
        cursor: pointer;
        white-space: nowrap;
        transition: all 0.2s ease;
      }

      .chip:hover {
        background: rgba(59, 130, 246, 0.12);
        border-color: rgba(96, 165, 250, 0.4);
      }

      .chip.active {
        background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        border-color: transparent;
        color: white;
      }

      .dashboard-content {
        display: grid;
        grid-template-columns: 300px minmax(0, 1fr);
        gap: 1.5rem;
      }

      .sidebar-left {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .glass-panel {
        border-radius: 1.6rem;
        padding: 1.5rem;
        background: rgba(15, 23, 42, 0.85);
        border: 1px solid rgba(148, 163, 184, 0.12);
        backdrop-filter: blur(8px);
      }

      .panel-header {
        margin-bottom: 1rem;
      }

      .panel-header .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.12em;
        font-size: 0.68rem;
        color: #7dd3fc;
        margin-bottom: 0.35rem;
      }

      .panel-header h3 {
        margin: 0 0 0.3rem;
        font-size: 1.1rem;
      }

      .text-muted {
        color: #94a3b8;
        font-size: 0.9rem;
        margin: 0;
      }

      .panel-block {
        padding: 1rem 0;
        border-top: 1px solid rgba(148, 163, 184, 0.08);
      }

      .panel-block:first-of-type {
        border-top: none;
      }

      .block-title {
        font-size: 0.9rem;
        font-weight: 700;
        margin: 0 0 0.75rem;
        color: #e2e8f0;
      }

      .stat-mini {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.6rem;
      }

      .stat-mini span {
        font-size: 0.85rem;
        color: #94a3b8;
      }

      .stat-mini strong {
        font-size: 1.1rem;
        color: #bfdbfe;
      }

      .btn-outline {
        background: rgba(255, 255, 255, 0.06);
        color: #e2e8f0;
        border: 1px solid rgba(148, 163, 184, 0.18);
        padding: 0.8rem 1rem;
      }

      .w-100 {
        width: 100%;
      }

      .mt-2 {
        margin-top: 1rem;
      }

      .products-main {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
      }

      .section-header .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.12em;
        font-size: 0.68rem;
        color: #7dd3fc;
        margin-bottom: 0.35rem;
      }

      .section-header h2 {
        font-size: 2rem;
        margin: 0;
      }

      .sort-label {
        padding: 0.6rem 1rem;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
        font-size: 0.9rem;
        color: #cbd5e1;
        border: 1px solid rgba(148, 163, 184, 0.12);
      }

      .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 1.5rem;
      }

      .product-card {
        border-radius: 1.5rem;
        background: rgba(15, 23, 42, 0.88);
        border: 1px solid rgba(148, 163, 184, 0.1);
        overflow: hidden;
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .product-card:hover {
        transform: translateY(-4px);
        border-color: rgba(148, 163, 184, 0.3);
        box-shadow: 0 24px 48px rgba(15, 23, 42, 0.3);
      }

      .product-image-wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 3/3;
        overflow: hidden;
        background: #0f172a;
      }

      .product-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      .product-card:hover .product-image {
        transform: scale(1.08);
      }

      .product-category {
        position: absolute;
        top: 0.8rem;
        left: 0.8rem;
        display: inline-flex;
        align-items: center;
        padding: 0.4rem 0.8rem;
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.88);
        color: #bfdbfe;
        font-size: 0.72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        backdrop-filter: blur(4px);
      }

      .product-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding: 1rem;
        background: linear-gradient(180deg, transparent 0%, rgba(2, 6, 23, 0.8) 60%);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .product-card:hover .product-overlay {
        opacity: 1;
      }

      .btn-add-to-cart {
        width: 100%;
        padding: 0.8rem 1rem;
        border-radius: 12px;
        background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        color: white;
        border: none;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 8px 16px rgba(37, 99, 235, 0.3);
      }

      .btn-add-to-cart:hover {
        box-shadow: 0 12px 24px rgba(37, 99, 235, 0.4);
      }

      .product-info {
        padding: 1.2rem;
      }

      .product-info h3 {
        margin: 0 0 0.5rem;
        font-size: 1.05rem;
        line-height: 1.3;
      }

      .product-description {
        margin: 0 0 0.8rem;
        color: #cbd5e1;
        font-size: 0.9rem;
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .product-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.8rem;
      }

      .price-vendor {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }

      .price {
        font-size: 1.2rem;
        font-weight: 800;
        color: #bae6fd;
      }

      .vendor {
        font-size: 0.8rem;
        color: #94a3b8;
      }

      .btn-favorite {
        background: none;
        border: none;
        font-size: 1.4rem;
        cursor: pointer;
        transition: transform 0.2s ease;
      }

      .btn-favorite:hover {
        transform: scale(1.2);
      }

      .empty-state {
        grid-column: 1 / -1;
        padding: 4rem 2rem;
        text-align: center;
        border-radius: 1.6rem;
        border: 1px dashed rgba(148, 163, 184, 0.18);
        background: rgba(255, 255, 255, 0.03);
      }

      .empty-state h3 {
        margin-bottom: 0.5rem;
      }

      .empty-state p {
        color: #94a3b8;
      }

      @media (max-width: 991.98px) {
        .dashboard-content {
          grid-template-columns: 1fr;
        }

        .products-grid {
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        }
      }

      @media (max-width: 640px) {
        .customer-shell {
          padding: 1.5rem 1rem;
        }

        .customer-topbar {
          padding: 1.5rem;
          flex-direction: column;
          align-items: flex-start;
        }

        .customer-topbar h1 {
          font-size: 1.8rem;
        }

        .topbar-actions {
          width: 100%;
          flex-direction: column;
        }

        .btn-primary,
        .btn-secondary {
          width: 100%;
        }

        .products-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .section-header {
          flex-direction: column;
        }

        .sort-label {
          align-self: flex-start;
        }
      }
    `
  ],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink]
})
export class CustomerDashboardComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly productService = inject(ProductService);
  private readonly router = inject(Router);

  currentUser = this.authService.getCurrentUser();
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery = '';
  selectedCategory = '';
  showAccountMenu = false;
  wishlist: string[] = this.getWishlistFromStorage();
  categoryOptions = ['Books & Study', 'Tech & Gadgets', 'Fashion', 'Food & Snacks', 'Campus Essentials', 'Accessories'];
  defaultImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80';

  get cartCount(): number {
    return this.productService.getCartItems().length;
  }

  get cartTotal(): number {
    const cartItems = this.productService.getCartItems();
    return cartItems.reduce((sum, item) => {
      const product = this.productService.getProductById(item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
  }

  get wishlistCount(): number {
    return this.wishlist.length;
  }

  private getWishlistFromStorage(): string[] {
    const stored = localStorage.getItem('unimart_wishlist');
    return stored ? JSON.parse(stored) : [];
  }

  private saveWishlistToStorage(): void {
    localStorage.setItem('unimart_wishlist', JSON.stringify(this.wishlist));
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.allProducts = this.productService.getAllProducts().filter(p => p.available);
    this.filteredProducts = this.allProducts;
  }

  onSearch(): void {
    let results = this.allProducts;

    if (this.searchQuery.trim()) {
      results = this.productService.searchProducts(this.searchQuery).filter(p => p.available);
    }

    if (this.selectedCategory) {
      results = results.filter(p => p.category === this.selectedCategory);
    }

    this.filteredProducts = results;
  }

  addToCart(productId: string): void {
    this.productService.addToCart(productId);
  }

  getVendorName(vendorEmail: string): string {
    const allUsers = this.authService.getAllUsers();
    const vendor = allUsers.find(u => u.email.toLowerCase() === vendorEmail.toLowerCase());
    return vendor?.name || 'Unknown vendor';
  }

  toggleAccountMenu(): void {
    this.showAccountMenu = !this.showAccountMenu;
  }

  toggleWishlist(productId: string): void {
    const index = this.wishlist.indexOf(productId);
    if (index >= 0) {
      this.wishlist.splice(index, 1);
    } else {
      this.wishlist.push(productId);
    }
    this.saveWishlistToStorage();
  }

  isInWishlist(productId: string): boolean {
    return this.wishlist.includes(productId);
  }

  viewProfile(): void {
    alert('Profile management coming soon!');
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => this.router.navigate(['/login'])
    });
  }

}

