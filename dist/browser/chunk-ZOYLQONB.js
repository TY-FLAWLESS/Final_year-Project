import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-V3POIQIW.js";
import {
  ProductService
} from "./chunk-NXEELXBY.js";
import {
  AuthService,
  CommonModule,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
} from "./chunk-ZKHNJUVZ.js";

// src/app/components/home/home.component.ts
function HomeComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cartItems.length);
  }
}
function HomeComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 87);
    \u0275\u0275text(2, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 88);
    \u0275\u0275text(4, "Join now");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function HomeComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function HomeComponent_ng_template_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(1, "Logout");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_185_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "button", 91);
    \u0275\u0275listener("click", function HomeComponent_div_185_Template_button_click_1_listener() {
      const category_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCategory(category_r5));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r1.selectedCategory === category_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r5, " ");
  }
}
function HomeComponent_div_195_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 95)(2, "div", 96);
    \u0275\u0275element(3, "img", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 98)(5, "div", 99)(6, "span", 100);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 101);
    \u0275\u0275text(9, "\u2605\u2605\u2605\u2605\u2605");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h6", 78);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 102);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 103)(15, "strong", 104);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 105);
    \u0275\u0275listener("click", function HomeComponent_div_195_div_1_Template_button_click_17_listener() {
      const product_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToCart(product_r7.id));
    });
    \u0275\u0275text(18, "Add to cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 106);
    \u0275\u0275text(20, "Checkout");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", product_r7.imageUrl || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", \u0275\u0275sanitizeUrl)("alt", product_r7.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r7.category);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r7.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("GH\u20B5 ", product_r7.price, "");
  }
}
function HomeComponent_div_195_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275template(1, HomeComponent_div_195_div_1_Template, 21, 6, "div", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.displayedProducts);
  }
}
function HomeComponent_ng_template_196_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1, "No vendor products are available yet. Vendors can post items from their dashboard.");
    \u0275\u0275elementEnd();
  }
}
var HomeComponent = class _HomeComponent {
  constructor(productService, authService, router) {
    this.productService = productService;
    this.authService = authService;
    this.router = router;
    this.isMenuOpen = false;
    this.searchQuery = "";
    this.selectedCategory = "";
    this.categoryChips = ["Books & Study", "Tech & Gadgets", "Fashion", "Food & Snacks"];
    this.displayedProducts = [];
    this.cartItems = [];
  }
  ngOnInit() {
    this.refreshProducts();
    this.cartItems = this.productService.getCartItems();
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  searchProducts() {
    this.refreshProducts();
  }
  selectCategory(category) {
    this.selectedCategory = category;
    this.refreshProducts();
  }
  refreshProducts() {
    let products = this.productService.searchProducts(this.searchQuery);
    if (this.selectedCategory) {
      products = products.filter((product) => product.category === this.selectedCategory);
    }
    this.displayedProducts = products.filter((product) => product.available);
  }
  addToCart(productId) {
    this.cartItems = this.productService.addToCart(productId);
  }
  get isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 227, vars: 22, consts: [["loggedInActions", ""], ["noProducts", ""], [1, "topbar"], [1, "container"], [1, "topbar-inner"], ["routerLink", "/", 1, "brand-mark"], [1, "brand-icon"], [1, "topbar-actions"], ["routerLink", "/cart", 1, "top-link", "top-cart"], ["class", "cart-count", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["type", "button", "aria-label", "Toggle menu", 1, "menu-toggle", 3, "click"], [1, "mobile-backdrop", 3, "click"], [1, "mobile-menu"], [1, "mobile-menu-header"], [1, "drawer-label"], [1, "drawer-subtitle"], ["type", "button", "aria-label", "Close menu", 1, "close-menu", 3, "click"], ["routerLink", "/", 3, "click"], ["routerLink", "/register", 3, "click"], ["routerLink", "/login", 3, "click"], [1, "store-hero", "text-white"], [1, "container", "py-5"], [1, "row", "align-items-center", "g-4"], [1, "col-lg-7"], [1, "hero-badge", "mb-3"], [1, "fw-bold", "mb-3", "hero-title"], [1, "mb-4", "text-white-50", "hero-copy"], [1, "row", "g-2", "mb-4"], [1, "col-md-8"], [1, "search-pill", "d-flex", "align-items-center", "gap-2"], ["type", "text", "placeholder", "Search for books, gadgets, fashion, food...", 1, "form-control", "form-control-lg", "border-0", "shadow-none", 3, "ngModelChange", "input", "ngModel"], [1, "col-md-4"], ["routerLink", "/register", 1, "btn", "btn-light", "btn-lg", "w-100", "rounded-pill", "fw-bold"], [1, "hero-stats", "d-flex", "flex-wrap", "gap-3"], [1, "stat-pill"], [1, "hero-chip-row", "mt-3"], [1, "hero-chip"], [1, "hero-actions", "mt-4", "d-flex", "flex-wrap", "gap-3", "align-items-center"], ["routerLink", "/register", 1, "btn", "btn-light", "btn-lg", "rounded-pill", "fw-bold"], ["routerLink", "/login", 1, "btn", "btn-outline-light", "btn-lg", "rounded-pill", "fw-bold"], ["routerLink", "/cart", 1, "btn", "btn-link", "text-white-75"], [1, "platform-grid", "mt-5"], [1, "platform-card", "p-4", "bg-white", "bg-opacity-10", "border"], [1, "platform-icon"], [1, "mb-2"], [1, "mb-0", "text-white-75"], [1, "col-lg-5"], [1, "shop-panel", "shadow-lg", "border-0"], [1, "card-body", "p-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "mb-1", "text-uppercase", "small", "fw-bold", "text-primary"], [1, "fw-bold", "mb-0"], [1, "badge", "rounded-pill", "bg-danger", "px-3"], [1, "deal-track"], [1, "deal-track-inner"], [1, "deal-card"], [1, "deal-visual"], ["src", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80", "alt", "Backpack bundle"], [1, "deal-title"], [1, "deal-price"], [1, "deal-note"], ["src", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80", "alt", "Student tech saver"], ["src", "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80", "alt", "Weekend fashion drop"], [1, "section-heading", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-4"], [1, "mb-1", "text-primary", "fw-bold", "text-uppercase", "small"], [1, "d-flex", "gap-2", "flex-wrap", "align-items-center"], [1, "btn", "btn-outline-secondary", "rounded-pill", 3, "click"], [1, "row", "g-3"], ["class", "col-6 col-md-3", 4, "ngFor", "ngForOf"], [1, "container", "pb-5"], ["routerLink", "/register", 1, "btn", "btn-outline-primary", "rounded-pill", "px-4"], ["class", "row g-4", 4, "ngIf", "ngIfElse"], [1, "row", "g-4", "align-items-stretch"], [1, "col-lg-8"], [1, "promo-banner"], [1, "row", "align-items-center", "g-3"], [1, "mb-2", "text-uppercase", "fw-bold", "small"], [1, "fw-bold", "mb-2"], [1, "mb-0", "text-white-50"], [1, "col-md-4", "text-md-end"], ["routerLink", "/register", 1, "btn", "btn-light", "rounded-pill", "px-4", "fw-bold"], [1, "col-lg-4"], [1, "trust-panel", "h-100"], [1, "fw-bold", "mb-3"], [1, "mb-0", "ps-3"], [1, "cart-count"], ["routerLink", "/login", 1, "top-link"], ["routerLink", "/register", 1, "top-cta"], [1, "top-logout", 3, "click"], [1, "col-6", "col-md-3"], [1, "category-card", "btn", "btn-outline-light", "w-100", "text-start", 3, "click"], [1, "row", "g-4"], ["class", "col-md-6 col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-3"], [1, "product-card", "h-100"], [1, "product-image"], [3, "src", "alt"], [1, "p-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "badge", "bg-light", "text-dark"], [1, "text-warning"], [1, "text-muted", "small", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "gap-2", "flex-wrap"], [1, "text-primary"], [1, "btn", "btn-sm", "btn-outline-primary", "rounded-pill", 3, "click"], ["routerLink", "/cart", 1, "btn", "btn-sm", "btn-primary", "rounded-pill"], [1, "alert", "alert-info"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "a", 5)(4, "span", 6);
        \u0275\u0275text(5, "U");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7, "UniMart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 7)(9, "a", 8)(10, "span");
        \u0275\u0275text(11, "\u{1F6D2}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Cart ");
        \u0275\u0275template(13, HomeComponent_span_13_Template, 2, 1, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, HomeComponent_ng_container_14_Template, 5, 0, "ng-container", 10)(15, HomeComponent_ng_template_15_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 11);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleMenu());
        });
        \u0275\u0275text(18, " \u2630 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 12);
        \u0275\u0275listener("click", function HomeComponent_Template_div_click_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeMenu());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 13)(21, "div", 14)(22, "div")(23, "div", 15);
        \u0275\u0275text(24, "UniMart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 16);
        \u0275\u0275text(26, "Student marketplace");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "button", 17);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_27_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeMenu());
        });
        \u0275\u0275text(28, "\u2715");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "a", 18);
        \u0275\u0275listener("click", function HomeComponent_Template_a_click_29_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeMenu());
        });
        \u0275\u0275text(30, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "a", 19);
        \u0275\u0275listener("click", function HomeComponent_Template_a_click_31_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeMenu());
        });
        \u0275\u0275text(32, "Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "a", 20);
        \u0275\u0275listener("click", function HomeComponent_Template_a_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeMenu());
        });
        \u0275\u0275text(34, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "a", 19);
        \u0275\u0275listener("click", function HomeComponent_Template_a_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeMenu());
        });
        \u0275\u0275text(36, "Create account");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 21)(38, "section", 22)(39, "div", 23)(40, "div", 24)(41, "div", 25);
        \u0275\u0275text(42, "Campus Commerce. Trusted. Smart. Fast.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "h1", 26);
        \u0275\u0275text(44, "Shop the student marketplace.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "p", 27);
        \u0275\u0275text(46, " Discover daily essentials, fashion, tech accessories, and campus-ready products from verified vendors in one beautiful digital storefront. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 28)(48, "div", 29)(49, "div", 30)(50, "span");
        \u0275\u0275text(51, "\u{1F50E}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "input", 31);
        \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Template_input_ngModelChange_52_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("input", function HomeComponent_Template_input_input_52_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.searchProducts());
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "div", 32)(54, "a", 33);
        \u0275\u0275text(55, "Start Shopping");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 34)(57, "div", 35);
        \u0275\u0275text(58, "\u26A1 Fast checkout experience");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 35);
        \u0275\u0275text(60, "\u{1F6E1}\uFE0F Verified vendors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 35);
        \u0275\u0275text(62, "\u{1F916} AI smart discovery");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 36)(64, "span", 37);
        \u0275\u0275text(65, "Student savings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "span", 37);
        \u0275\u0275text(67, "Campus essentials");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "span", 37);
        \u0275\u0275text(69, "Tech drop");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 38)(71, "a", 39);
        \u0275\u0275text(72, "Start Shopping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "a", 40);
        \u0275\u0275text(74, "Login to shop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "a", 41);
        \u0275\u0275text(76);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 42)(78, "div", 43)(79, "div", 44);
        \u0275\u0275text(80, "\u26A1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "h4", 45);
        \u0275\u0275text(82, "Fast campus checkout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "p", 46);
        \u0275\u0275text(84, "One-click cart, saved orders, and student-friendly payment flow for faster purchasing.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "div", 43)(86, "div", 44);
        \u0275\u0275text(87, "\u{1F6D2}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "h4", 45);
        \u0275\u0275text(89, "Cart-first shopping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "p", 46);
        \u0275\u0275text(91, "Keep items in your cart while you browse, then checkout securely from any device.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "div", 43)(93, "div", 44);
        \u0275\u0275text(94, "\u2728");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "h4", 45);
        \u0275\u0275text(96, "Smart vendor deals");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "p", 46);
        \u0275\u0275text(98, "Explore curated collections from verified campus sellers and trending product drops.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(99, "div", 47)(100, "div", 48)(101, "div", 49)(102, "div", 50)(103, "div")(104, "p", 51);
        \u0275\u0275text(105, "Hot today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "h3", 52);
        \u0275\u0275text(107, "UniMart Deals");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "span", 53);
        \u0275\u0275text(109, "-35%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "div", 54)(111, "div", 55)(112, "div", 56)(113, "div", 57);
        \u0275\u0275element(114, "img", 58);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "div", 59);
        \u0275\u0275text(116, "Campus Essentials Bundle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 60);
        \u0275\u0275text(118, "GH\u20B5 189");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "div", 61);
        \u0275\u0275text(120, "Backpack + notebook + stationery starter pack");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(121, "div", 56)(122, "div", 57);
        \u0275\u0275element(123, "img", 62);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "div", 59);
        \u0275\u0275text(125, "Student Tech Saver");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div", 60);
        \u0275\u0275text(127, "GH\u20B5 299");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "div", 61);
        \u0275\u0275text(129, "Wireless earbuds and charging accessories");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(130, "div", 56)(131, "div", 57);
        \u0275\u0275element(132, "img", 63);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "div", 59);
        \u0275\u0275text(134, "Weekend Fashion Drop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "div", 60);
        \u0275\u0275text(136, "GH\u20B5 119");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "div", 61);
        \u0275\u0275text(138, "Trend-ready outfits for campus life");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(139, "div", 56)(140, "div", 57);
        \u0275\u0275element(141, "img", 58);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "div", 59);
        \u0275\u0275text(143, "Campus Essentials Bundle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "div", 60);
        \u0275\u0275text(145, "GH\u20B5 189");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div", 61);
        \u0275\u0275text(147, "Backpack + notebook + stationery starter pack");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(148, "div", 56)(149, "div", 57);
        \u0275\u0275element(150, "img", 62);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "div", 59);
        \u0275\u0275text(152, "Student Tech Saver");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "div", 60);
        \u0275\u0275text(154, "GH\u20B5 299");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "div", 61);
        \u0275\u0275text(156, "Wireless earbuds and charging accessories");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(157, "div", 56)(158, "div", 57);
        \u0275\u0275element(159, "img", 63);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "div", 59);
        \u0275\u0275text(161, "Weekend Fashion Drop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "div", 60);
        \u0275\u0275text(163, "GH\u20B5 119");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "div", 61);
        \u0275\u0275text(165, "Trend-ready outfits for campus life");
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(166, "section", 22)(167, "div", 64)(168, "div")(169, "p", 65);
        \u0275\u0275text(170, "Browse categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "h2", 52);
        \u0275\u0275text(172, "Popular collections");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(173, "div", 66)(174, "button", 67);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_174_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectCategory(""));
        });
        \u0275\u0275text(175, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "button", 67);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_176_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectCategory("Books & Study"));
        });
        \u0275\u0275text(177, "Books");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "button", 67);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_178_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectCategory("Tech & Gadgets"));
        });
        \u0275\u0275text(179, "Tech");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "button", 67);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_180_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectCategory("Fashion"));
        });
        \u0275\u0275text(181, "Fashion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "button", 67);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_182_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectCategory("Food & Snacks"));
        });
        \u0275\u0275text(183, "Food");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(184, "div", 68);
        \u0275\u0275template(185, HomeComponent_div_185_Template, 3, 3, "div", 69);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(186, "section", 70)(187, "div", 64)(188, "div")(189, "p", 65);
        \u0275\u0275text(190, "Featured products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "h2", 52);
        \u0275\u0275text(192, "Best sellers this week");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(193, "a", 71);
        \u0275\u0275text(194, "Explore more");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(195, HomeComponent_div_195_Template, 2, 1, "div", 72)(196, HomeComponent_ng_template_196_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "section", 70)(199, "div", 73)(200, "div", 74)(201, "div", 75)(202, "div", 76)(203, "div", 29)(204, "p", 77);
        \u0275\u0275text(205, "Exclusive student offer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "h2", 78);
        \u0275\u0275text(207, "Get 20% off your first campus order");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "p", 79);
        \u0275\u0275text(209, "Use UniMart starter offer for your next purchase and discover local vendors faster.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(210, "div", 80)(211, "a", 81);
        \u0275\u0275text(212, "Claim offer");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(213, "div", 82)(214, "div", 83)(215, "div", 49)(216, "h3", 84);
        \u0275\u0275text(217, "Why customers trust UniMart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(218, "ul", 85)(219, "li");
        \u0275\u0275text(220, "Secure and simple login with role-based accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(221, "li");
        \u0275\u0275text(222, "Vendor marketplace with modern storefront management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(223, "li");
        \u0275\u0275text(224, "Smart search and product discovery");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(225, "li");
        \u0275\u0275text(226, "Focused on real campus commerce needs");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        const loggedInActions_r8 = \u0275\u0275reference(16);
        const noProducts_r9 = \u0275\u0275reference(197);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngIf", ctx.cartItems.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isAuthenticated)("ngIfElse", loggedInActions_r8);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("show", ctx.isMenuOpen);
        \u0275\u0275advance();
        \u0275\u0275classProp("show", ctx.isMenuOpen);
        \u0275\u0275advance(32);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(24);
        \u0275\u0275textInterpolate1("View cart (", ctx.cartItems.length, ")");
        \u0275\u0275advance(98);
        \u0275\u0275classProp("active", ctx.selectedCategory === "");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedCategory === "Books & Study");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedCategory === "Tech & Gadgets");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedCategory === "Fashion");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedCategory === "Food & Snacks");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.categoryChips);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.displayedProducts.length > 0)("ngIfElse", noProducts_r9);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ['\n\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(6, 14, 30, 0.98),\n      rgba(22, 60, 145, 0.94));\n  backdrop-filter: blur(18px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.topbar-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 0;\n  min-height: 72px;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  color: #ffffff;\n  text-decoration: none;\n  font-size: 1.25rem;\n  font-weight: 900;\n  letter-spacing: 0.04em;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  display: inline-grid;\n  place-items: center;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #cfe0ff);\n  color: #0b5ed7;\n  font-weight: 900;\n  font-size: 0.95rem;\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.top-link.top-cart[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n.top-link.top-cart[_ngcontent-%COMP%]   .cart-count[_ngcontent-%COMP%] {\n  min-width: 20px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  background: #fee2e2;\n  color: #b91c1c;\n  font-size: 0.75rem;\n  font-weight: 800;\n  padding: 0 6px;\n}\n.hero-actions[_ngcontent-%COMP%]   a.btn-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.82);\n}\n.hero-actions[_ngcontent-%COMP%]   a.btn-link[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  text-decoration: none;\n}\n.top-link[_ngcontent-%COMP%], \n.top-cta[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 0.9rem;\n}\n.top-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.88);\n}\n.top-cta[_ngcontent-%COMP%] {\n  padding: 9px 16px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #dbeafe);\n  color: #1d4ed8;\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  border: 0;\n  background: rgba(255, 255, 255, 0.14);\n  color: #fff;\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  font-size: 1.15rem;\n  box-shadow: 0 10px 20px rgba(5, 10, 25, 0.2);\n}\n.mobile-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(3, 7, 18, 0.45);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.25s ease;\n  z-index: 25;\n}\n.mobile-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: min(320px, 85vw);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(7, 16, 31, 0.98),\n      rgba(8, 76, 178, 0.98));\n  box-shadow: -16px 0 40px rgba(0, 0, 0, 0.35);\n  transform: translateX(110%);\n  transition: transform 0.28s ease;\n  z-index: 30;\n  visibility: hidden;\n  backdrop-filter: blur(18px);\n}\n.mobile-menu-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  padding: 6px 4px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n.drawer-label[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 900;\n  font-size: 1rem;\n}\n.drawer-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 0.78rem;\n}\n.close-menu[_ngcontent-%COMP%] {\n  border: 0;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n}\n.mobile-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.10);\n  font-weight: 700;\n}\n.mobile-menu.show[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  visibility: visible;\n}\n.store-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(255, 255, 255, 0.24),\n      transparent 28%),\n    radial-gradient(\n      circle at left center,\n      rgba(20, 184, 166, 0.20),\n      transparent 32%),\n    linear-gradient(\n      135deg,\n      #071120,\n      #133d8e 45%,\n      #3b4bd6 74%,\n      #7c3aed 100%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n.store-hero[_ngcontent-%COMP%]::before, \n.store-hero[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(8px);\n  opacity: 0.55;\n  animation: _ngcontent-%COMP%_floatGlow 9s ease-in-out infinite;\n}\n.store-hero[_ngcontent-%COMP%]::before {\n  width: 260px;\n  height: 260px;\n  top: -30px;\n  right: -30px;\n  background: rgba(255, 255, 255, 0.16);\n}\n.store-hero[_ngcontent-%COMP%]::after {\n  width: 220px;\n  height: 220px;\n  left: -40px;\n  bottom: -30px;\n  background: rgba(20, 184, 166, 0.28);\n  animation-delay: 1.5s;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 3.8vw, 3.6rem);\n  line-height: 1.05;\n  letter-spacing: -0.04em;\n  text-shadow: 0 16px 30px rgba(0, 0, 0, 0.18);\n}\n.hero-copy[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  max-width: 650px;\n  line-height: 1.7;\n}\n.hero-chip-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.hero-chip[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #f8fbff;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.03em;\n}\n.hero-actions[_ngcontent-%COMP%]   a.btn-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.82);\n}\n.hero-actions[_ngcontent-%COMP%]   a.btn-link[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  text-decoration: none;\n}\n.platform-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n.platform-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n  transition: transform 0.25s ease, background 0.25s ease;\n}\n.platform-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  background: rgba(255, 255, 255, 0.18);\n}\n.platform-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: grid;\n  place-items: center;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.18);\n  font-size: 1.25rem;\n  margin-bottom: 12px;\n}\n.platform-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 0.5rem;\n}\n.platform-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.78);\n  line-height: 1.7;\n}\n.hero-badge[_ngcontent-%COMP%], \n.stat-pill[_ngcontent-%COMP%], \n.search-pill[_ngcontent-%COMP%], \n.category-card[_ngcontent-%COMP%], \n.product-card[_ngcontent-%COMP%], \n.shop-panel[_ngcontent-%COMP%], \n.promo-banner[_ngcontent-%COMP%], \n.trust-panel[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.30),\n      rgba(255, 255, 255, 0.14));\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  font-size: 0.8rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  box-shadow: 0 14px 32px rgba(6, 16, 31, 0.24);\n}\n.search-pill[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.16);\n  border: 1px solid rgba(255, 255, 255, 0.28);\n  padding: 8px 10px;\n  backdrop-filter: blur(16px);\n  box-shadow: 0 18px 40px rgba(6, 16, 31, 0.24);\n}\n.search-pill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n}\n.search-pill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.72);\n}\n.stat-pill[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  padding: 10px 14px;\n  font-weight: 700;\n}\n.shop-panel[_ngcontent-%COMP%], \n.trust-panel[_ngcontent-%COMP%], \n.product-card[_ngcontent-%COMP%], \n.category-card.selected[_ngcontent-%COMP%], \n.category-card.btn.selected[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  background: rgba(59, 130, 246, 0.12);\n}\n.category-card[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 120px;\n  padding: 1.25rem;\n  color: #0f172a;\n  font-weight: 700;\n  border: 1px solid rgba(15, 23, 42, 0.12);\n  background: rgba(255, 255, 255, 0.9);\n  transition:\n    transform 0.18s ease,\n    border-color 0.18s ease,\n    background 0.18s ease;\n}\n.category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.category-card.btn[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.category-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #f8fbff);\n  color: #0f172a;\n  box-shadow: 0 28px 70px rgba(6, 23, 58, 0.16);\n  border: 1px solid rgba(37, 99, 235, 0.14);\n}\n.deal-track[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.deal-track-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  gap: 12px;\n  width: max-content;\n  animation: _ngcontent-%COMP%_slideDeals 18s linear infinite;\n  will-change: transform;\n}\n.deal-card[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fbff,\n      #eef5ff);\n  border-radius: 18px;\n  padding: 16px;\n  border: 1px solid rgba(13, 110, 253, 0.12);\n  min-height: 240px;\n  min-width: min(100%, 290px);\n  width: min(100%, 290px);\n  opacity: 0.92;\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow: hidden;\n}\n.deal-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: auto -30px -40px auto;\n  width: 120px;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(13, 110, 253, 0.14),\n      transparent 70%);\n}\n.deal-visual[_ngcontent-%COMP%] {\n  height: 120px;\n  overflow: hidden;\n  border-radius: 14px;\n  background: #eaf2ff;\n}\n.deal-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.deal-title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  color: #0b5ed7;\n}\n.deal-price[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  font-weight: 900;\n  color: #0f172a;\n  margin: 4px 0;\n}\n.deal-note[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #4b5563;\n}\n.section-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0b5ed7;\n  font-weight: 800;\n}\n.category-card[_ngcontent-%COMP%] {\n  padding: 18px 16px;\n  font-weight: 800;\n  text-align: center;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #eff6ff);\n}\n.category-card[_ngcontent-%COMP%]:hover, \n.product-card[_ngcontent-%COMP%]:hover, \n.shop-panel[_ngcontent-%COMP%]:hover, \n.trust-panel[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 28px 70px rgba(12, 54, 139, 0.18);\n}\n.product-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 24px;\n  transition: transform 0.28s ease, box-shadow 0.28s ease;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #f9fbff);\n  border: 1px solid rgba(13, 110, 253, 0.08);\n}\n.product-image[_ngcontent-%COMP%] {\n  height: 220px;\n  overflow: hidden;\n  background: #eef4ff;\n}\n.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.45s ease;\n}\n.product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.product-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.product-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.product-card[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], \n.product-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n}\n.promo-banner[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #071120,\n      #0f4ad7 58%,\n      #7c3aed 100%);\n  color: #fff;\n  padding: 28px;\n  min-height: 100%;\n  box-shadow: 0 28px 70px rgba(7, 26, 58, 0.24);\n  animation: _ngcontent-%COMP%_shimmerBanner 6s ease-in-out infinite;\n  border-radius: 24px;\n}\n.promo-banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      120deg,\n      transparent,\n      rgba(255, 255, 255, 0.16),\n      transparent);\n  transform: translateX(-100%);\n  animation: _ngcontent-%COMP%_sweep 4s linear infinite;\n}\n.trust-panel[_ngcontent-%COMP%] {\n  border: 1px solid rgba(15, 23, 42, 0.08);\n}\n@media (min-width: 768px) {\n  .mobile-backdrop[_ngcontent-%COMP%], \n   .mobile-menu[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .topbar-actions[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: inline-grid;\n    place-items: center;\n  }\n  .brand-mark[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 1.9rem;\n  }\n  .hero-copy[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_floatGlow {\n  0%, 100% {\n    transform: translateY(0px) scale(1);\n  }\n  50% {\n    transform: translateY(-14px) scale(1.05);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmerBanner {\n  0%, 100% {\n    filter: saturate(1);\n  }\n  50% {\n    filter: saturate(1.25);\n  }\n}\n@keyframes _ngcontent-%COMP%_sweep {\n  0% {\n    transform: translateX(-120%);\n  }\n  100% {\n    transform: translateX(120%);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDeals {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\components\\home\\home.component.ts", lineNumber: 881 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-ZOYLQONB.js.map
