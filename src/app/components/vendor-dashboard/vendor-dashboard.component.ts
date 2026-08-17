import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProductService, Product, NewProduct } from '../../services/product.service';

@Component({
  selector: 'app-vendor-dashboard',
  template: `
    <div class="vendor-shell">
      <header class="vendor-topbar">
        <div>
          <p class="eyebrow">Vendor hub</p>
          <h1>Welcome back, {{ currentUser?.name || 'Vendor' }}</h1>
          <p class="lead">Launch products faster, manage inventory, and keep your store in full control.</p>
        </div>

        <div class="topbar-actions">
          <a class="btn btn-ghost" routerLink="/">Marketplace</a>
          <button class="btn btn-secondary" (click)="logout()">Logout</button>
        </div>
      </header>

      <section class="stats-grid">
        <article class="stat-card blue">
          <p class="stat-label">Live Products</p>
          <h2>{{ totalProducts }}</h2>
          <span>{{ availableProducts }} visible items</span>
        </article>
        <article class="stat-card purple">
          <p class="stat-label">Inactive</p>
          <h2>{{ totalProducts - availableProducts }}</h2>
          <span>Hidden or unavailable</span>
        </article>
        <article class="stat-card green">
          <p class="stat-label">Inventory value</p>
          <h2>GH₵ {{ inventoryValue.toFixed(2) }}</h2>
          <span>Estimated total price</span>
        </article>
      </section>

      <section class="dashboard-grid">
        <aside class="panel panel-left">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Account</p>
              <h2>{{ currentUser?.name || 'Your name' }}</h2>
              <p class="text-muted">{{ currentUser?.email }}</p>
            </div>
          </div>

          <div class="panel-block card glass-card">
            <p class="block-title">Update store owner name</p>
            <input class="form-control" [(ngModel)]="accountName" placeholder="Enter your name" />
            <button class="btn btn-primary mt-3 w-100" (click)="saveAccount()">Save profile</button>
          </div>

          <div class="panel-block card glass-card">
            <p class="block-title">Quick add product</p>
            <div class="form-grid">
              <label>
                Title
                <input class="form-control" [(ngModel)]="newProduct.title" placeholder="Product title" />
              </label>
              <label>
                Category
                <select class="form-control" [(ngModel)]="newProduct.category">
                  <option value="" disabled selected>Select category</option>
                  <option *ngFor="let option of categoryOptions" [value]="option">{{ option }}</option>
                </select>
              </label>
              <label>
                Price
                <input type="number" class="form-control" [(ngModel)]="newProduct.price" placeholder="GH₵" />
              </label>
              <label class="full-width">
                Image URL
                <input class="form-control" [(ngModel)]="newProduct.imageUrl" placeholder="https://" />
              </label>
              <label class="full-width">
                Description
                <textarea class="form-control" rows="3" [(ngModel)]="newProduct.description" placeholder="Short product description"></textarea>
              </label>
            </div>
            <button class="btn btn-gradient mt-3 w-100" (click)="addProduct()">Publish new product</button>
          </div>
        </aside>

        <main class="panel panel-right">
          <div class="panel-header panel-header-alt">
            <div>
              <p class="eyebrow">Listings</p>
              <h2>Products you’ve published</h2>
            </div>
            <span class="badge badge-pill">{{ vendorProducts.length }} total</span>
          </div>

          <div *ngIf="vendorProducts.length > 0; else emptyVendorProducts" class="products-list">
            <article *ngFor="let product of vendorProducts" class="product-card">
              <div class="product-card-main">
                <div class="product-preview">
                  <img [src]="product.imageUrl || defaultImage" [alt]="product.title" />
                </div>
                <div class="product-copy">
                  <div class="product-topline">
                    <span class="badge badge-pill badge-surface">{{ product.category }}</span>
                    <span class="product-price">GH₵ {{ product.price }}</span>
                  </div>
                  <h3>{{ product.title }}</h3>
                  <p>{{ product.description }}</p>
                </div>
              </div>

              <div class="product-actions">
                <button class="btn btn-sm btn-outline-secondary" (click)="startEdit(product)">Edit</button>
                <button class="btn btn-sm btn-outline-danger" (click)="deleteProduct(product.id)">Delete</button>
                <button class="btn btn-sm btn-surface" (click)="toggleAvailability(product.id)">
                  {{ product.available ? 'Hide item' : 'Show item' }}
                </button>
              </div>

              <div *ngIf="editingProduct?.id === product.id" class="edit-panel">
                <ng-container *ngIf="editingProduct as editingProductRef">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label">Title</label>
                      <input class="form-control" [(ngModel)]="editingProductRef.title" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Category</label>
                      <select class="form-control" [(ngModel)]="editingProductRef.category">
                        <option *ngFor="let option of categoryOptions" [value]="option">{{ option }}</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Price</label>
                      <input type="number" class="form-control" [(ngModel)]="editingProductRef.price" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Image URL</label>
                      <input class="form-control" [(ngModel)]="editingProductRef.imageUrl" />
                    </div>
                    <div class="col-12">
                      <label class="form-label">Description</label>
                      <textarea class="form-control" rows="3" [(ngModel)]="editingProductRef.description"></textarea>
                    </div>
                  </div>
                  <div class="mt-3 d-flex flex-wrap gap-2">
                    <button class="btn btn-primary btn-sm" (click)="saveEdit()">Save changes</button>
                    <button class="btn btn-outline-secondary btn-sm" (click)="cancelEdit()">Cancel</button>
                  </div>
                </ng-container>
              </div>
            </article>
          </div>

          <ng-template #emptyVendorProducts>
            <div class="empty-state">
              <h3>No products yet</h3>
              <p class="text-muted">Add your first product from the left panel to start selling.</p>
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
        background: radial-gradient(circle at top left, rgba(59, 130, 246, 0.18), transparent 20%),
          linear-gradient(180deg, #0a152c 0%, #151f3f 100%);
        color: #eef2ff;
      }
      .vendor-shell {
        max-width: 1280px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
      }
      .vendor-topbar {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1.5rem;
        align-items: center;
        padding: 2rem;
        border-radius: 2rem;
        background: rgba(15, 23, 42, 0.86);
        border: 1px solid rgba(148, 163, 184, 0.12);
        box-shadow: 0 40px 120px rgba(15, 23, 42, 0.35);
      }
      .vendor-topbar .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.24em;
        color: #93c5fd;
        font-weight: 700;
        margin-bottom: 0.75rem;
      }
      .vendor-topbar h1 {
        font-size: clamp(2.3rem, 3vw, 3.5rem);
        margin-bottom: 0.75rem;
      }
      .lead {
        color: #cbd5e1;
        max-width: 720px;
      }
      .topbar-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
      .btn {
        border-radius: 999px;
        font-weight: 700;
      }
      .btn-ghost {
        background: rgba(255, 255, 255, 0.08);
        color: #f8fafc;
        border: 1px solid rgba(255, 255, 255, 0.12);
        padding: 0.9rem 1.75rem;
      }
      .btn-secondary {
        background: #2563eb;
        color: #fff;
        padding: 0.9rem 1.75rem;
        border: none;
      }
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.8rem;
        margin: 2rem 0;
      }
      .stat-card {
        padding: 1.2rem;
        border-radius: 1.5rem;
        background: rgba(15, 23, 42, 0.95);
        border: 1px solid rgba(148, 163, 184, 0.1);
        text-align: center;
      }
      .stat-card.blue {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.18), rgba(30, 64, 175, 0.18));
      }
      .stat-card.purple {
        background: linear-gradient(135deg, rgba(167, 139, 250, 0.18), rgba(109, 40, 217, 0.18));
      }
      .stat-card.green {
        background: linear-gradient(135deg, rgba(52, 211, 153, 0.18), rgba(16, 185, 129, 0.18));
      }
      .stat-label {
        text-transform: uppercase;
        letter-spacing: 0.18em;
        color: #a5b4fc;
        font-size: 0.68rem;
        margin-bottom: 0.5rem;
      }
      .stat-card h2 {
        font-size: 1.85rem;
        margin: 0 0 0.4rem 0;
      }
      .stat-card span {
        display: block;
        font-size: 0.8rem;
        color: #cbd5e1;
      }
      .dashboard-grid {
        display: grid;
        grid-template-columns: 360px minmax(0, 1fr);
        gap: 1.5rem;
      }
      .panel {
        border-radius: 2rem;
        padding: 1.5rem;
        background: rgba(15, 23, 42, 0.92);
        border: 1px solid rgba(148, 163, 184, 0.1);
      }
      .panel-left {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .panel-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
      }
      .panel-header-alt {
        align-items: center;
      }
      .badge-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.8rem 1rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.08);
        color: #e2e8f0;
      }
      .glass-card {
        padding: 1.5rem;
        border-radius: 1.75rem;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(148, 163, 184, 0.12);
        backdrop-filter: blur(18px);
      }
      .block-title {
        font-size: 0.95rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
      }
      .form-grid {
        display: grid;
        gap: 1rem;
      }
      .form-grid label {
        display: grid;
        gap: 0.5rem;
        font-size: 0.92rem;
        color: #cbd5e1;
      }
      .form-control {
        width: 100%;
        border-radius: 1rem;
        border: 1px solid rgba(148, 163, 184, 0.2);
        background: rgba(15, 23, 42, 0.9);
        color: #e2e8f0;
        padding: 0.95rem 1rem;
      }
      .form-control::placeholder {
        color: #94a3b8;
      }
      .btn-gradient {
        background: linear-gradient(135deg, #38bdf8, #818cf8);
        border: none;
        color: #fff;
      }
      .panel-right {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .products-list {
        display: grid;
        gap: 1.25rem;
      }
      .product-card {
        padding: 1.5rem;
        border-radius: 1.75rem;
        border: 1px solid rgba(148, 163, 184, 0.12);
        background: rgba(255, 255, 255, 0.04);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
      }
      .product-card-main {
        display: flex;
        gap: 1.25rem;
        align-items: center;
        flex-wrap: wrap;
      }
      .product-preview {
        min-width: 170px;
        min-height: 140px;
        border-radius: 1.5rem;
        overflow: hidden;
        flex-shrink: 0;
        background: #0f172a;
      }
      .product-preview img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .product-copy h3 {
        margin: 0.5rem 0 0.75rem;
        font-size: 1.25rem;
      }
      .product-copy p {
        margin: 0;
        color: #cbd5e1;
      }
      .product-topline {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
        align-items: center;
      }
      .product-price {
        font-weight: 900;
        color: #bae6fd;
      }
      .badge-surface {
        background: rgba(255, 255, 255, 0.08);
        color: #e2e8f0;
      }
      .product-actions {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
        margin-top: 1rem;
      }
      .btn-sm {
        padding: 0.75rem 1rem;
        border-radius: 999px;
      }
      .btn-outline-secondary {
        background: rgba(255, 255, 255, 0.06);
        color: #e2e8f0;
        border: 1px solid rgba(148, 163, 184, 0.18);
      }
      .btn-surface {
        background: rgba(255, 255, 255, 0.08);
        color: #e2e8f0;
        border: none;
      }
      .edit-panel {
        margin-top: 1rem;
        padding: 1.25rem;
        border-radius: 1.5rem;
        background: rgba(15, 23, 42, 0.92);
        border: 1px solid rgba(148, 163, 184, 0.12);
      }
      .empty-state {
        padding: 2rem;
        border-radius: 1.75rem;
        text-align: center;
        background: rgba(255, 255, 255, 0.05);
        border: 1px dashed rgba(148, 163, 184, 0.24);
      }
      .empty-state h3 {
        margin-bottom: 0.75rem;
      }
      @media (max-width: 991.98px) {
        .dashboard-grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink]
})
export class VendorDashboardComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly productService = inject(ProductService);
  private readonly router = inject(Router);

  currentUser = this.authService.getCurrentUser();
  accountName = this.currentUser?.name || '';
  vendorProducts: Product[] = [];
  defaultImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80';
  categoryOptions = ['Books & Study', 'Tech & Gadgets', 'Fashion', 'Food & Snacks', 'Campus Essentials', 'Accessories'];

  newProduct: NewProduct = {
    title: '',
    description: '',
    price: 0,
    imageUrl: '',
    category: this.categoryOptions[0],
    vendorEmail: this.currentUser?.email || ''
  };

  editingProduct: Product | null = null;

  ngOnInit(): void {
    this.loadProducts();
  }

  get totalProducts(): number {
    return this.vendorProducts.length;
  }

  get availableProducts(): number {
    return this.vendorProducts.filter((product) => product.available).length;
  }

  get inventoryValue(): number {
    return this.vendorProducts.reduce((sum, product) => sum + product.price, 0);
  }

  private loadProducts(): void {
    this.vendorProducts = this.currentUser?.email ? this.productService.getProductsByVendor(this.currentUser.email) : [];
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => this.router.navigate(['/login'])
    });
  }

  saveAccount(): void {
    if (!this.currentUser?.email) {
      return;
    }
    this.currentUser.name = this.accountName;
    this.authService.updateUserName(this.currentUser.email, this.accountName);
  }

  addProduct(): void {
    if (!this.currentUser?.email || !this.newProduct.title || this.newProduct.price <= 0) {
      return;
    }
    this.newProduct.vendorEmail = this.currentUser.email;
    this.productService.addProduct(this.newProduct);
    this.newProduct = {
      title: '',
      description: '',
      price: 0,
      imageUrl: '',
      category: '',
      vendorEmail: this.currentUser.email
    };
    this.loadProducts();
  }

  startEdit(product: Product): void {
    this.editingProduct = { ...product };
  }

  saveEdit(): void {
    if (!this.editingProduct) {
      return;
    }
    this.productService.updateProduct(this.editingProduct.id, {
      title: this.editingProduct.title,
      description: this.editingProduct.description,
      price: this.editingProduct.price,
      imageUrl: this.editingProduct.imageUrl,
      category: this.editingProduct.category,
      vendorEmail: this.editingProduct.vendorEmail
    });
    this.editingProduct = null;
    this.loadProducts();
  }

  cancelEdit(): void {
    this.editingProduct = null;
  }

  deleteProduct(productId: string): void {
    this.productService.removeProduct(productId);
    this.loadProducts();
  }

  toggleAvailability(productId: string): void {
    this.productService.toggleProductAvailability(productId);
    this.loadProducts();
  }
}
