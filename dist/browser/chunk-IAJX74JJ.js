import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VV65OK7X.js";
import {
  ProductService
} from "./chunk-SY7TS6UZ.js";
import {
  AuthService
} from "./chunk-ZCD6RBUE.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RLCOLIVI.js";

// src/app/components/customer-dashboard/customer-dashboard.component.ts
function CustomerDashboardComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function CustomerDashboardComponent_button_23_Template_button_click_0_listener() {
      const cat_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.selectedCategory = cat_r3;
      return \u0275\u0275resetView(ctx_r3.onSearch());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.selectedCategory === cat_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r3, " ");
  }
}
function CustomerDashboardComponent_div_65_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 30)(1, "div", 31);
    \u0275\u0275element(2, "img", 32);
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34)(6, "button", 35);
    \u0275\u0275listener("click", function CustomerDashboardComponent_div_65_article_1_Template_button_click_6_listener() {
      const product_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.addToCart(product_r6.id));
    });
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "\u{1F6D2} Add to cart");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 36)(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 37);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 38)(15, "div", 39)(16, "span", 40);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 41);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 42);
    \u0275\u0275text(21, "\u2764\uFE0F");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", product_r6.imageUrl || ctx_r3.defaultImage, \u0275\u0275sanitizeUrl)("alt", product_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r6.category);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(product_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r6.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("GH\u20B5 ", product_r6.price.toFixed(2), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("by ", ctx_r3.getVendorName(product_r6.vendorEmail), "");
  }
}
function CustomerDashboardComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, CustomerDashboardComponent_div_65_article_1_Template, 22, 7, "article", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.filteredProducts);
  }
}
function CustomerDashboardComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "h3");
    \u0275\u0275text(2, "No products found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Try adjusting your search or filters to find what you're looking for.");
    \u0275\u0275elementEnd()();
  }
}
var CustomerDashboardComponent = class _CustomerDashboardComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.productService = inject(ProductService);
    this.router = inject(Router);
    this.currentUser = this.authService.getCurrentUser();
    this.allProducts = [];
    this.filteredProducts = [];
    this.searchQuery = "";
    this.selectedCategory = "";
    this.categoryOptions = ["Books & Study", "Tech & Gadgets", "Fashion", "Food & Snacks", "Campus Essentials", "Accessories"];
    this.defaultImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80";
  }
  get cartCount() {
    return this.productService.getCartItems().length;
  }
  get cartTotal() {
    const cartItems = this.productService.getCartItems();
    return cartItems.reduce((sum, item) => {
      const product = this.productService.getProductById(item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
  }
  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.allProducts = this.productService.getAllProducts().filter((p) => p.available);
    this.filteredProducts = this.allProducts;
  }
  onSearch() {
    let results = this.allProducts;
    if (this.searchQuery.trim()) {
      results = this.productService.searchProducts(this.searchQuery).filter((p) => p.available);
    }
    if (this.selectedCategory) {
      results = results.filter((p) => p.category === this.selectedCategory);
    }
    this.filteredProducts = results;
  }
  addToCart(productId) {
    this.productService.addToCart(productId);
  }
  getVendorName(vendorEmail) {
    const allUsers = this.authService.getAllUsers();
    const vendor = allUsers.find((u) => u.email.toLowerCase() === vendorEmail.toLowerCase());
    return vendor?.name || "Unknown vendor";
  }
  viewProfile() {
    alert("Profile management coming soon!");
  }
  logout() {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(["/login"]),
      error: () => this.router.navigate(["/login"])
    });
  }
  static {
    this.\u0275fac = function CustomerDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerDashboardComponent, selectors: [["app-customer-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 68, vars: 13, consts: [["noProducts", ""], [1, "customer-shell"], [1, "customer-topbar"], [1, "eyebrow"], [1, "lead"], [1, "topbar-actions"], ["routerLink", "/cart", 1, "btn", "btn-primary"], [1, "btn", "btn-secondary", 3, "click"], [1, "search-bar-section"], [1, "search-container"], ["type", "text", "placeholder", "Search products by name, category...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "search-icon"], [1, "filter-chips"], [1, "chip", 3, "click"], ["class", "chip", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "dashboard-content"], [1, "sidebar-left"], [1, "panel", "glass-panel"], [1, "panel-header"], [1, "text-muted"], [1, "panel-block"], [1, "block-title"], [1, "stat-mini"], [1, "btn", "btn-outline", "w-100", "mt-2", 3, "click"], [1, "products-main"], [1, "section-header"], [1, "sort-label"], ["class", "products-grid", 4, "ngIf", "ngIfElse"], [1, "products-grid"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], [1, "product-image-wrapper"], [1, "product-image", 3, "src", "alt"], [1, "product-category"], [1, "product-overlay"], [1, "btn-add-to-cart", 3, "click"], [1, "product-info"], [1, "product-description"], [1, "product-footer"], [1, "price-vendor"], [1, "price"], [1, "vendor"], ["type", "button", 1, "btn-favorite"], [1, "empty-state"]], template: function CustomerDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div")(3, "p", 3);
        \u0275\u0275text(4, "Shopping hub");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Discover products from campus vendors and shop with ease.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "a", 6)(11, "span");
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 7);
        \u0275\u0275listener("click", function CustomerDashboardComponent_Template_button_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.logout());
        });
        \u0275\u0275text(14, "Logout");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "section", 8)(16, "div", 9)(17, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function CustomerDashboardComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("input", function CustomerDashboardComponent_Template_input_input_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSearch());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 11);
        \u0275\u0275text(19, "\u{1F50E}");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 12)(21, "button", 13);
        \u0275\u0275listener("click", function CustomerDashboardComponent_Template_button_click_21_listener() {
          \u0275\u0275restoreView(_r1);
          ctx.selectedCategory = "";
          return \u0275\u0275resetView(ctx.onSearch());
        });
        \u0275\u0275text(22, " All Products ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, CustomerDashboardComponent_button_23_Template, 2, 3, "button", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "section", 15)(25, "aside", 16)(26, "div", 17)(27, "div", 18)(28, "p", 3);
        \u0275\u0275text(29, "Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "h3");
        \u0275\u0275text(31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p", 19);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 20)(35, "p", 21);
        \u0275\u0275text(36, "Quick stats");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 22)(38, "span");
        \u0275\u0275text(39, "Items in cart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "strong");
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 22)(43, "span");
        \u0275\u0275text(44, "Total cart value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "strong");
        \u0275\u0275text(46);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 20)(48, "p", 21);
        \u0275\u0275text(49, "Your wishlist");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "p", 19);
        \u0275\u0275text(51, "Coming soon - save favorite items");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "button", 23);
        \u0275\u0275listener("click", function CustomerDashboardComponent_Template_button_click_52_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.viewProfile());
        });
        \u0275\u0275text(53, "View profile");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "main", 24)(55, "div", 25)(56, "div")(57, "p", 3);
        \u0275\u0275text(58, "Explore");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "h2");
        \u0275\u0275text(60, "Available Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p", 19);
        \u0275\u0275text(62);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "span", 26);
        \u0275\u0275text(64, "Sort by: Latest");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(65, CustomerDashboardComponent_div_65_Template, 2, 1, "div", 27)(66, CustomerDashboardComponent_ng_template_66_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const noProducts_r7 = \u0275\u0275reference(67);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("Welcome, ", (ctx.currentUser == null ? null : ctx.currentUser.name) || "Shopper", "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("\u{1F6D2} Cart (", ctx.cartCount, ")");
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.selectedCategory === "");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.categoryOptions);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate((ctx.currentUser == null ? null : ctx.currentUser.name) || "Your Account");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.email);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.cartCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("GH\u20B5 ", ctx.cartTotal.toFixed(2), "");
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate1("", ctx.filteredProducts.length, " items found");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.filteredProducts.length > 0)("ngIfElse", noProducts_r7);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(59, 130, 246, 0.12),\n      transparent 25%),\n    linear-gradient(\n      180deg,\n      #020617 0%,\n      #0f1729 100%);\n  color: #e2e8f0;\n}\n.customer-shell[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 2.5rem 1.5rem;\n}\n.customer-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 1.5rem;\n  align-items: center;\n  padding: 2rem;\n  border-radius: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.88),\n      rgba(17, 24, 39, 0.92));\n  border: 1px solid rgba(148, 163, 184, 0.12);\n  box-shadow: 0 40px 120px rgba(15, 23, 42, 0.35);\n}\n.customer-topbar[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.24em;\n  color: #93c5fd;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.customer-topbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 2.5vw, 2.8rem);\n  margin: 0 0 0.5rem 0;\n  line-height: 1.2;\n}\n.lead[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  max-width: 720px;\n  margin: 0;\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.9rem;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  color: white;\n  padding: 0.9rem 1.6rem;\n  box-shadow: 0 12px 22px rgba(37, 99, 235, 0.25);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #e2e8f0;\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  padding: 0.9rem 1.6rem;\n}\n.search-bar-section[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.search-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1.5rem;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1.2rem 1rem 2.8rem;\n  border-radius: 999px;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(15, 23, 42, 0.92);\n  color: #e2e8f0;\n  font-size: 1rem;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #64748b;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background: rgba(15, 23, 42, 0.96);\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 1.1rem;\n}\n.filter-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.8rem;\n  flex-wrap: wrap;\n  overflow-x: auto;\n  padding-bottom: 0.5rem;\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 0.7rem 1.2rem;\n  border-radius: 999px;\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  background: rgba(255, 255, 255, 0.04);\n  color: #cbd5e1;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n}\n.chip[_ngcontent-%COMP%]:hover {\n  background: rgba(59, 130, 246, 0.12);\n  border-color: rgba(96, 165, 250, 0.4);\n}\n.chip.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  border-color: transparent;\n  color: white;\n}\n.dashboard-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 300px minmax(0, 1fr);\n  gap: 1.5rem;\n}\n.sidebar-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.glass-panel[_ngcontent-%COMP%] {\n  border-radius: 1.6rem;\n  padding: 1.5rem;\n  background: rgba(15, 23, 42, 0.85);\n  border: 1px solid rgba(148, 163, 184, 0.12);\n  backdrop-filter: blur(8px);\n}\n.panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.panel-header[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  font-size: 0.68rem;\n  color: #7dd3fc;\n  margin-bottom: 0.35rem;\n}\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.3rem;\n  font-size: 1.1rem;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.panel-block[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  border-top: 1px solid rgba(148, 163, 184, 0.08);\n}\n.panel-block[_ngcontent-%COMP%]:first-of-type {\n  border-top: none;\n}\n.block-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0 0 0.75rem;\n  color: #e2e8f0;\n}\n.stat-mini[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.6rem;\n}\n.stat-mini[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #94a3b8;\n}\n.stat-mini[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #bfdbfe;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: #e2e8f0;\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  padding: 0.8rem 1rem;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.products-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.section-header[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  font-size: 0.68rem;\n  color: #7dd3fc;\n  margin-bottom: 0.35rem;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0;\n}\n.sort-label[_ngcontent-%COMP%] {\n  padding: 0.6rem 1rem;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.05);\n  font-size: 0.9rem;\n  color: #cbd5e1;\n  border: 1px solid rgba(148, 163, 184, 0.12);\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.5rem;\n}\n.product-card[_ngcontent-%COMP%] {\n  border-radius: 1.5rem;\n  background: rgba(15, 23, 42, 0.88);\n  border: 1px solid rgba(148, 163, 184, 0.1);\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: rgba(148, 163, 184, 0.3);\n  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.3);\n}\n.product-image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 3/3;\n  overflow: hidden;\n  background: #0f172a;\n}\n.product-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.product-category[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.8rem;\n  left: 0.8rem;\n  display: inline-flex;\n  align-items: center;\n  padding: 0.4rem 0.8rem;\n  border-radius: 999px;\n  background: rgba(15, 23, 42, 0.88);\n  color: #bfdbfe;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  backdrop-filter: blur(4px);\n}\n.product-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 0%,\n      rgba(2, 6, 23, 0.8) 60%);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.product-card[_ngcontent-%COMP%]:hover   .product-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.btn-add-to-cart[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem 1rem;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  color: white;\n  border: none;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.3);\n}\n.btn-add-to-cart[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.4);\n}\n.product-info[_ngcontent-%COMP%] {\n  padding: 1.2rem;\n}\n.product-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.05rem;\n  line-height: 1.3;\n}\n.product-description[_ngcontent-%COMP%] {\n  margin: 0 0 0.8rem;\n  color: #cbd5e1;\n  font-size: 0.9rem;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.product-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.8rem;\n}\n.price-vendor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.price[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #bae6fd;\n}\n.vendor[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n}\n.btn-favorite[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.4rem;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.btn-favorite[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  padding: 4rem 2rem;\n  text-align: center;\n  border-radius: 1.6rem;\n  border: 1px dashed rgba(148, 163, 184, 0.18);\n  background: rgba(255, 255, 255, 0.03);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n@media (max-width: 991.98px) {\n  .dashboard-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  }\n}\n@media (max-width: 640px) {\n  .customer-shell[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem;\n  }\n  .customer-topbar[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .customer-topbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .topbar-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n  }\n  .btn-primary[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .sort-label[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n}\n/*# sourceMappingURL=customer-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerDashboardComponent, { className: "CustomerDashboardComponent", filePath: "src\\app\\components\\customer-dashboard\\customer-dashboard.component.ts", lineNumber: 624 });
})();
export {
  CustomerDashboardComponent
};
//# sourceMappingURL=chunk-IAJX74JJ.js.map
