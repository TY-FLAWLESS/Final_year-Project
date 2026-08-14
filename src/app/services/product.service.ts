import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  vendorEmail: string;
  available: boolean;
  createdAt: string;
}

export interface NewProduct {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  vendorEmail: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  addedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly storageKey = 'unimart_products';
  private readonly cartStorageKey = 'unimart_cart';

  private getProductsFromStorage(): Product[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  private saveProductsToStorage(products: Product[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }

  private getCartFromStorage(): CartItem[] {
    const stored = localStorage.getItem(this.cartStorageKey);
    return stored ? JSON.parse(stored) : [];
  }

  private saveCartToStorage(cart: CartItem[]): void {
    localStorage.setItem(this.cartStorageKey, JSON.stringify(cart));
  }

  private resolveId(): string {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }

  getCartItems(): CartItem[] {
    return this.getCartFromStorage();
  }

  addToCart(productId: string): CartItem[] {
    const cart = this.getCartFromStorage();
    const index = cart.findIndex((item) => item.productId === productId);

    if (index >= 0) {
      cart[index].quantity += 1;
    } else {
      cart.push({
        productId,
        quantity: 1,
        addedAt: new Date().toISOString()
      });
    }

    this.saveCartToStorage(cart);
    return cart;
  }

  removeFromCart(productId: string): CartItem[] {
    const cart = this.getCartFromStorage().filter((item) => item.productId !== productId);
    this.saveCartToStorage(cart);
    return cart;
  }

  updateCartItem(productId: string, quantityDelta: number): CartItem[] {
    const cart = this.getCartFromStorage();
    const index = cart.findIndex((item) => item.productId === productId);

    if (index === -1) {
      return cart;
    }

    const updatedQuantity = cart[index].quantity + quantityDelta;
    if (updatedQuantity <= 0) {
      return this.removeFromCart(productId);
    }

    cart[index].quantity = updatedQuantity;
    this.saveCartToStorage(cart);
    return cart;
  }

  clearCart(): void {
    this.saveCartToStorage([]);
  }

  getAllProducts(): Product[] {
    return this.getProductsFromStorage();
  }

  getProductById(productId: string): Product | null {
    const products = this.getProductsFromStorage();
    return products.find((product) => product.id === productId) || null;
  }

  getProductsByVendor(vendorEmail: string): Product[] {
    return this.getProductsFromStorage().filter(
      (product) => product.vendorEmail.toLowerCase() === vendorEmail.toLowerCase()
    );
  }

  searchProducts(query: string): Product[] {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return this.getAllProducts();
    }

    return this.getAllProducts().filter((product) => {
      return (
        product.title.toLowerCase().includes(normalized) ||
        product.description.toLowerCase().includes(normalized) ||
        product.category.toLowerCase().includes(normalized)
      );
    });
  }

  addProduct(payload: NewProduct): Product {
    const products = this.getProductsFromStorage();
    const newProduct: Product = {
      id: this.resolveId(),
      title: payload.title,
      description: payload.description,
      price: Number(payload.price),
      imageUrl: payload.imageUrl,
      category: payload.category,
      vendorEmail: payload.vendorEmail,
      available: true,
      createdAt: new Date().toISOString()
    };

    products.unshift(newProduct);
    this.saveProductsToStorage(products);
    return newProduct;
  }

  updateProduct(productId: string, updates: Partial<NewProduct> & { available?: boolean }): Product | null {
    const products = this.getProductsFromStorage();
    const index = products.findIndex((product) => product.id === productId);
    if (index === -1) {
      return null;
    }

    const existing = products[index];
    const updated: Product = {
      ...existing,
      ...updates,
      price: updates.price !== undefined ? Number(updates.price) : existing.price,
      title: updates.title ?? existing.title,
      description: updates.description ?? existing.description,
      category: updates.category ?? existing.category,
      imageUrl: updates.imageUrl ?? existing.imageUrl,
      available: updates.available !== undefined ? updates.available : existing.available
    };

    products[index] = updated;
    this.saveProductsToStorage(products);
    return updated;
  }

  removeProduct(productId: string): boolean {
    const products = this.getProductsFromStorage();
    const filtered = products.filter((product) => product.id !== productId);
    const removed = filtered.length !== products.length;
    if (removed) {
      this.saveProductsToStorage(filtered);
    }
    return removed;
  }

  toggleProductAvailability(productId: string): Product | null {
    const products = this.getProductsFromStorage();
    const index = products.findIndex((product) => product.id === productId);
    if (index === -1) {
      return null;
    }

    products[index].available = !products[index].available;
    this.saveProductsToStorage(products);
    return products[index];
  }
}
