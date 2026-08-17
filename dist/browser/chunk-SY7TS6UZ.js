import {
  __spreadProps,
  __spreadValues,
  ɵɵdefineInjectable
} from "./chunk-RLCOLIVI.js";

// src/app/services/product.service.ts
var ProductService = class _ProductService {
  constructor() {
    this.storageKey = "unimart_products";
    this.cartStorageKey = "unimart_cart";
  }
  getProductsFromStorage() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }
  saveProductsToStorage(products) {
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }
  getCartFromStorage() {
    const stored = localStorage.getItem(this.cartStorageKey);
    return stored ? JSON.parse(stored) : [];
  }
  saveCartToStorage(cart) {
    localStorage.setItem(this.cartStorageKey, JSON.stringify(cart));
  }
  resolveId() {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }
  getCartItems() {
    return this.getCartFromStorage();
  }
  addToCart(productId) {
    const cart = this.getCartFromStorage();
    const index = cart.findIndex((item) => item.productId === productId);
    if (index >= 0) {
      cart[index].quantity += 1;
    } else {
      cart.push({
        productId,
        quantity: 1,
        addedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    this.saveCartToStorage(cart);
    return cart;
  }
  removeFromCart(productId) {
    const cart = this.getCartFromStorage().filter((item) => item.productId !== productId);
    this.saveCartToStorage(cart);
    return cart;
  }
  updateCartItem(productId, quantityDelta) {
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
  clearCart() {
    this.saveCartToStorage([]);
  }
  getAllProducts() {
    return this.getProductsFromStorage();
  }
  getProductById(productId) {
    const products = this.getProductsFromStorage();
    return products.find((product) => product.id === productId) || null;
  }
  getProductsByVendor(vendorEmail) {
    return this.getProductsFromStorage().filter((product) => product.vendorEmail.toLowerCase() === vendorEmail.toLowerCase());
  }
  searchProducts(query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return this.getAllProducts();
    }
    return this.getAllProducts().filter((product) => {
      return product.title.toLowerCase().includes(normalized) || product.description.toLowerCase().includes(normalized) || product.category.toLowerCase().includes(normalized);
    });
  }
  addProduct(payload) {
    const products = this.getProductsFromStorage();
    const newProduct = {
      id: this.resolveId(),
      title: payload.title,
      description: payload.description,
      price: Number(payload.price),
      imageUrl: payload.imageUrl,
      category: payload.category,
      vendorEmail: payload.vendorEmail,
      available: true,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    products.unshift(newProduct);
    this.saveProductsToStorage(products);
    return newProduct;
  }
  updateProduct(productId, updates) {
    const products = this.getProductsFromStorage();
    const index = products.findIndex((product) => product.id === productId);
    if (index === -1) {
      return null;
    }
    const existing = products[index];
    const updated = __spreadProps(__spreadValues(__spreadValues({}, existing), updates), {
      price: updates.price !== void 0 ? Number(updates.price) : existing.price,
      title: updates.title ?? existing.title,
      description: updates.description ?? existing.description,
      category: updates.category ?? existing.category,
      imageUrl: updates.imageUrl ?? existing.imageUrl,
      available: updates.available !== void 0 ? updates.available : existing.available
    });
    products[index] = updated;
    this.saveProductsToStorage(products);
    return updated;
  }
  removeProduct(productId) {
    const products = this.getProductsFromStorage();
    const filtered = products.filter((product) => product.id !== productId);
    const removed = filtered.length !== products.length;
    if (removed) {
      this.saveProductsToStorage(filtered);
    }
    return removed;
  }
  toggleProductAvailability(productId) {
    const products = this.getProductsFromStorage();
    const index = products.findIndex((product) => product.id === productId);
    if (index === -1) {
      return null;
    }
    products[index].available = !products[index].available;
    this.saveProductsToStorage(products);
    return products[index];
  }
  static {
    this.\u0275fac = function ProductService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProductService
};
//# sourceMappingURL=chunk-SY7TS6UZ.js.map
