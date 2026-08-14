import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartItem, Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  template: `
    <div class="cart-shell container py-5">
      <div class="d-flex flex-column flex-md-row align-items-start justify-content-between gap-3 mb-4">
        <div>
          <p class="text-primary fw-semibold text-uppercase small mb-2">Your cart</p>
          <h1 class="fw-bold mb-1">Review your order</h1>
          <p class="text-muted mb-0">Confirm products, update quantities, and complete the checkout.</p>
        </div>
        <a routerLink="/" class="btn btn-outline-secondary rounded-pill">Continue shopping</a>
      </div>

      <ng-container *ngIf="cartProducts.length > 0; else emptyCart">
        <div class="row g-4">
          <div class="col-lg-8">
            <div class="card p-3">
              <div *ngFor="let item of cartProducts" class="cart-item d-flex flex-column flex-md-row gap-3 align-items-start align-items-md-center p-3 border-bottom">
                <img class="cart-thumb rounded-4" [src]="item.product?.imageUrl || placeholderImage" [alt]="item.product?.title || 'Product'" />
                <div class="flex-grow-1">
                  <div class="d-flex flex-column flex-sm-row justify-content-between gap-3 align-items-start align-items-sm-center">
                    <div>
                      <h5 class="mb-1">{{ item.product?.title || 'Product removed' }}</h5>
                      <p class="text-muted small mb-1">{{ item.product?.category || 'Unknown category' }}</p>
                      <p class="text-muted small mb-0">GH₵ {{ item.product?.price?.toFixed(2) || '0.00' }}</p>
                    </div>
                    <button class="btn btn-sm btn-outline-danger" (click)="removeItem(item.productId)">Remove</button>
                  </div>

                  <p class="text-muted small mt-2 mb-3">{{ item.product?.description || 'This product is no longer available.' }}</p>
                  <div class="d-flex align-items-center gap-2 flex-wrap">
                    <button class="btn btn-sm btn-outline-secondary" (click)="updateQuantity(item.productId, -1)">-</button>
                    <span class="fw-bold px-3">{{ item.quantity }}</span>
                    <button class="btn btn-sm btn-outline-secondary" (click)="updateQuantity(item.productId, 1)">+</button>
                    <span class="text-muted">Subtotal: GH₵ {{ (item.product?.price || 0) * item.quantity | number:'1.2-2' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card p-4 h-100">
              <p class="text-primary fw-semibold text-uppercase small mb-2">Order summary</p>
              <h2 class="fw-bold mb-3">GH₵ {{ cartTotal.toFixed(2) }}</h2>
              <div class="d-flex justify-content-between mb-2">
                <span>Items</span>
                <span>{{ totalItems }}</span>
              </div>
              <div class="d-flex justify-content-between mb-4">
                <span>Customer</span>
                <span>{{ currentUser?.name || 'Guest shopper' }}</span>
              </div>
              <button class="btn btn-primary w-100 rounded-pill py-3" (click)="checkout()">{{ currentUser ? 'Place order' : 'Login to purchase' }}</button>
              <p class="text-success small mt-3" *ngIf="successMessage">{{ successMessage }}</p>
              <p class="text-danger small mt-3" *ngIf="errorMessage">{{ errorMessage }}</p>
            </div>
          </div>
        </div>
      </ng-container>

      <ng-template #emptyCart>
        <div class="alert alert-info">Your cart is empty. Add products from the marketplace to start checkout.</div>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .cart-shell {
        max-width: 1200px;
        margin: 0 auto;
      }
      .cart-item {
        border-radius: 20px;
        background: #fff;
      }
      .cart-thumb {
        width: 140px;
        height: 140px;
        object-fit: cover;
        border-radius: 20px;
        flex-shrink: 0;
      }
      .card {
        border-radius: 26px;
      }
      @media (max-width: 767.98px) {
        .cart-item {
          padding: 1rem;
        }
        .cart-thumb {
          width: 100%;
          height: 220px;
        }
      }
    `
  ],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartProducts: Array<CartItem & { product: Product | null }> = [];
  currentUser = this.authService.getCurrentUser();
  errorMessage = '';
  successMessage = '';
  placeholderImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80';

  constructor(private readonly productService: ProductService, private readonly authService: AuthService, private readonly router: Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  private loadCart(): void {
    this.cartItems = this.productService.getCartItems();
    this.cartProducts = this.cartItems.map((item) => ({
      ...item,
      product: this.productService.getProductById(item.productId)
    }));
    this.currentUser = this.authService.getCurrentUser();
  }

  get cartTotal(): number {
    return this.cartProducts.reduce((sum, item) => sum + ((item.product?.price || 0) * item.quantity), 0);
  }

  get totalItems(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  updateQuantity(productId: string, delta: number): void {
    this.errorMessage = '';
    this.successMessage = '';
    this.cartItems = this.productService.updateCartItem(productId, delta);
    this.loadCart();
  }

  removeItem(productId: string): void {
    this.errorMessage = '';
    this.successMessage = '';
    this.cartItems = this.productService.removeFromCart(productId);
    this.loadCart();
  }

  checkout(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.currentUser) {
      this.router.navigate(['/login']);
      return;
    }

    if (this.currentUser.role !== 'customer') {
      this.errorMessage = 'Only customer accounts can place orders. Please login with a customer account.';
      return;
    }

    if (this.cartItems.length === 0) {
      this.errorMessage = 'Your cart is empty. Add items before checkout.';
      return;
    }

    this.productService.clearCart();
    this.loadCart();
    this.successMessage = 'Order placed successfully! Thank you for shopping with UniMart.';
  }
}
