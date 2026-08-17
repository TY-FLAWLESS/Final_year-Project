import {
  ProductService
} from "./chunk-SY7TS6UZ.js";
import {
  CommonModule,
  NgForOf,
  Router,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RLCOLIVI.js";

// src/app/components/home/home.component.ts
function HomeComponent_article_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 49)(1, "div", 50);
    \u0275\u0275element(2, "div", 51);
    \u0275\u0275elementStart(3, "div", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 53);
    \u0275\u0275text(6, "\u2661");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 54)(8, "h3", 55);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 56)(11, "span", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 58);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 59);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 60)(18, "span", 61);
    \u0275\u0275text(19, "\u{1F4E6} Express");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 62);
    \u0275\u0275listener("click", function HomeComponent_article_107_Template_button_click_20_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addToCart(item_r2));
    });
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "Get Now");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 63);
    \u0275\u0275text(24, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", item_r2.image);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.badge);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("GH\u20B5 ", item_r2.price, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("GH\u20B5 ", item_r2.oldPrice, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("-", ctx_r2.getDiscount(item_r2), "%");
  }
}
var HomeComponent = class _HomeComponent {
  constructor(productService, router) {
    this.productService = productService;
    this.router = router;
    this.mobileMenuOpen = false;
    this.cartCount = 0;
    this.products = [
      {
        id: "backpack-1",
        title: "School Backpack with Laptop Sleeve",
        price: 139,
        oldPrice: 210,
        badge: "Back to school",
        image: 'url("https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80")'
      },
      {
        id: "notebook-1",
        title: "Premium Notebooks Set",
        price: 48,
        oldPrice: 76,
        badge: "Study pack",
        image: 'url("https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80")'
      },
      {
        id: "calculator-1",
        title: "Scientific Calculator",
        price: 76,
        oldPrice: 120,
        badge: "Campus must-have",
        image: 'url("https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=700&q=80")'
      },
      {
        id: "lamp-1",
        title: "Student Desk Lamp",
        price: 65,
        oldPrice: 95,
        badge: "Study time",
        image: 'url("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80")'
      },
      {
        id: "paper-1",
        title: "A4 Printing Paper Bundle",
        price: 32,
        oldPrice: 52,
        badge: "Office pack",
        image: 'url("https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80")'
      },
      {
        id: "earbuds-1",
        title: "Wireless Bluetooth Earbuds",
        price: 89,
        oldPrice: 150,
        badge: "Tech essential",
        image: 'url("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80")'
      },
      {
        id: "cable-1",
        title: "USB-C Fast Charging Cable",
        price: 24,
        oldPrice: 45,
        badge: "Quick delivery",
        image: 'url("https://images.unsplash.com/photo-1621540577063-f0b83a5b7e6d?auto=format&fit=crop&w=700&q=80")'
      },
      {
        id: "shirt-1",
        title: "Campus T-Shirt Bundle",
        price: 55,
        oldPrice: 85,
        badge: "Trending",
        image: 'url("https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80")'
      },
      {
        id: "bottle-1",
        title: "Water Bottle 1L Stainless Steel",
        price: 35,
        oldPrice: 60,
        badge: "Eco-friendly",
        image: 'url("https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=700&q=80")'
      },
      {
        id: "charger-1",
        title: "Portable Phone Charger",
        price: 42,
        oldPrice: 70,
        badge: "Power bank",
        image: 'url("https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=700&q=80")'
      }
    ];
  }
  ngOnInit() {
    this.updateCartCount();
  }
  addToCart(product) {
    this.productService.addToCart(product.id);
    this.updateCartCount();
    this.router.navigate(["/cart"]);
  }
  updateCartCount() {
    this.cartCount = this.productService.getCartItems().reduce((sum, item) => sum + item.quantity, 0);
  }
  getDiscount(item) {
    return Math.round((item.oldPrice - item.price) / item.oldPrice * 100);
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 112, vars: 6, consts: [[1, "home-page"], [1, "navbar"], [1, "navbar-container"], ["type", "button", "aria-label", "Open menu", 1, "mobile-menu-toggle", 3, "click"], [1, "navbar-brand"], [1, "brand-icon"], [1, "brand-info"], [1, "brand-title"], [1, "brand-subtitle"], [1, "search-container"], ["type", "text", "placeholder", "Search items, shops, services...", 1, "search-input"], ["type", "button", 1, "search-btn"], [1, "search-icon"], [1, "navbar-actions"], ["type", "button", "aria-label", "Help", "routerLink", "/help", 1, "action-btn"], [1, "btn-label"], ["type", "button", "routerLink", "/login", 1, "action-btn"], ["type", "button", "routerLink", "/cart", 1, "action-btn", "cart-btn"], [1, "cart-icon"], [1, "cart-badge"], [1, "mobile-overlay", 3, "click"], ["aria-label", "Mobile navigation", 1, "slide-menu"], [1, "slide-menu-header"], [1, "slide-brand"], [1, "slide-brand-icon"], ["type", "button", 1, "close-menu", 3, "click"], [1, "slide-nav"], ["routerLink", "/", 3, "click"], ["routerLink", "/login", 3, "click"], ["routerLink", "/cart", 3, "click"], [1, "hero"], [1, "hero-content"], [1, "hero-pill"], [1, "hero-title"], [1, "title-line"], [1, "title-accent"], [1, "hero-subtitle"], [1, "hero-features"], [1, "feature-card", "admin-card"], [1, "feature-icon"], ["href", "/login", 1, "feature-link"], [1, "feature-card", "vendor-card"], [1, "feature-card", "student-card"], [1, "products-section"], [1, "section-header"], [1, "products-grid"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "footer"], [1, "footer-content"], [1, "product-card"], [1, "product-image-wrap"], [1, "product-image"], [1, "product-badge"], ["type", "button", "aria-label", "Add to wishlist", 1, "wishlist-btn"], [1, "product-details"], [1, "product-title"], [1, "product-pricing"], [1, "current-price"], [1, "old-price"], [1, "discount-percent"], [1, "product-meta"], [1, "express-badge"], ["type", "button", 1, "buy-btn", 3, "click"], [1, "btn-arrow"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "button", 3);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_3_listener() {
          return ctx.mobileMenuOpen = !ctx.mobileMenuOpen;
        });
        \u0275\u0275text(4, " \u2630 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
        \u0275\u0275text(7, "\u{1F393}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "h1", 7);
        \u0275\u0275text(10, "KTU");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 8);
        \u0275\u0275text(12, "Marketplace");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275element(14, "input", 10);
        \u0275\u0275elementStart(15, "button", 11)(16, "span", 12);
        \u0275\u0275text(17, "\u{1F50D}");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 13)(19, "button", 14)(20, "span");
        \u0275\u0275text(21, "\u2753");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 15);
        \u0275\u0275text(23, "Help");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "button", 16)(25, "span");
        \u0275\u0275text(26, "\u{1F464}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 15);
        \u0275\u0275text(28, "Login");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "button", 17)(30, "span", 18);
        \u0275\u0275text(31, "\u{1F6D2}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 19);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(34, "div", 20);
        \u0275\u0275listener("click", function HomeComponent_Template_div_click_34_listener() {
          return ctx.mobileMenuOpen = false;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "aside", 21)(36, "div", 22)(37, "div", 23)(38, "span", 24);
        \u0275\u0275text(39, "\u{1F393}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "span");
        \u0275\u0275text(41, "KTU Marketplace");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "button", 25);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_42_listener() {
          return ctx.mobileMenuOpen = false;
        });
        \u0275\u0275text(43, "\u2715");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "nav", 26)(45, "a", 27);
        \u0275\u0275listener("click", function HomeComponent_Template_a_click_45_listener() {
          return ctx.mobileMenuOpen = false;
        });
        \u0275\u0275text(46, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "a", 28);
        \u0275\u0275listener("click", function HomeComponent_Template_a_click_47_listener() {
          return ctx.mobileMenuOpen = false;
        });
        \u0275\u0275text(48, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "a", 29);
        \u0275\u0275listener("click", function HomeComponent_Template_a_click_49_listener() {
          return ctx.mobileMenuOpen = false;
        });
        \u0275\u0275text(50, "Cart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "a", 28);
        \u0275\u0275listener("click", function HomeComponent_Template_a_click_51_listener() {
          return ctx.mobileMenuOpen = false;
        });
        \u0275\u0275text(52, "Vendor Portal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "a", 28);
        \u0275\u0275listener("click", function HomeComponent_Template_a_click_53_listener() {
          return ctx.mobileMenuOpen = false;
        });
        \u0275\u0275text(54, "Student Shop");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "section", 30)(56, "div", 31)(57, "div", 32);
        \u0275\u0275text(58, "OFFICIAL CAMPUS E-COMMERCE PLATFORM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "h2", 33)(60, "span", 34);
        \u0275\u0275text(61, "Everything You Need,");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "span", 35);
        \u0275\u0275text(63, "Right on Campus");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "p", 36);
        \u0275\u0275text(65, " Shop goods, book services, pay with Mobile Money or card \u2014 all managed by KTU. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 37)(67, "article", 38)(68, "div", 39);
        \u0275\u0275text(69, "\u{1F6E1}\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "h3");
        \u0275\u0275text(71, "Administration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "p");
        \u0275\u0275text(73, "Manage vendors, monitor orders, configure payments and platform settings.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "a", 40);
        \u0275\u0275text(75, "Enter Portal ");
        \u0275\u0275elementStart(76, "span");
        \u0275\u0275text(77, "\u2192");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "article", 41)(79, "div", 39);
        \u0275\u0275text(80, "\u{1F6CD}\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "h3");
        \u0275\u0275text(82, "Vendor Portal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "p");
        \u0275\u0275text(84, "List your products and services, track sales and manage your campus shop.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "a", 40);
        \u0275\u0275text(86, "Enter Portal ");
        \u0275\u0275elementStart(87, "span");
        \u0275\u0275text(88, "\u2192");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(89, "article", 42)(90, "div", 39);
        \u0275\u0275text(91, "\u{1F6D2}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "h3");
        \u0275\u0275text(93, "Student Shop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "p");
        \u0275\u0275text(95, "Browse goods and services, order with MoMo or card, track deliveries.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "a", 40);
        \u0275\u0275text(97, "Enter Portal ");
        \u0275\u0275elementStart(98, "span");
        \u0275\u0275text(99, "\u2192");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(100, "main", 43)(101, "div", 44)(102, "h2");
        \u0275\u0275text(103, "Trending Now");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "p");
        \u0275\u0275text(105, "Popular items on campus");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "div", 45);
        \u0275\u0275template(107, HomeComponent_article_107_Template, 25, 7, "article", 46);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "footer", 47)(109, "div", 48)(110, "p");
        \u0275\u0275text(111, "\xA9 2026 KTU Marketplace. All rights reserved.");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(33);
        \u0275\u0275textInterpolate(ctx.cartCount);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.mobileMenuOpen);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.mobileMenuOpen);
        \u0275\u0275advance(72);
        \u0275\u0275property("ngForOf", ctx.products);
      }
    }, dependencies: [CommonModule, NgForOf, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  background:\n    linear-gradient(\n      135deg,\n      #0f1419 0%,\n      #1a1f2e 100%);\n  color: #e0e0e0;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    sans-serif;\n  min-height: 100vh;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  font: inherit;\n}\n.home-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background: rgba(15, 20, 25, 0.8);\n  backdrop-filter: blur(12px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 12px 0;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n}\n.mobile-menu-toggle[_ngcontent-%COMP%], \n.mobile-overlay[_ngcontent-%COMP%], \n.slide-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 140px;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.navbar-brand[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.brand-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #00d4ff 0%,\n      #0066ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1;\n}\n.brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #888;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  line-height: 1;\n}\n.search-container[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 400px;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 10px 16px;\n  transition: all 0.3s ease;\n}\n.search-container[_ngcontent-%COMP%]:focus-within {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(0, 212, 255, 0.3);\n  box-shadow: 0 0 20px rgba(0, 212, 255, 0.1);\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #e0e0e0;\n  font-size: 14px;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #666;\n}\n.search-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00d4ff 0%,\n      #0066ff 100%);\n  border: none;\n  border-radius: 8px;\n  padding: 8px 12px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  color: white;\n}\n.search-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 4px 16px rgba(0, 212, 255, 0.3);\n}\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.navbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #e0e0e0;\n  padding: 10px 14px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.2);\n  transform: translateY(-2px);\n}\n.action-btn.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00d4ff 0%,\n      #0066ff 100%);\n  border: none;\n  color: white;\n  box-shadow: 0 4px 16px rgba(0, 212, 255, 0.2);\n}\n.action-btn.primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 24px rgba(0, 212, 255, 0.3);\n  transform: translateY(-3px);\n}\n.btn-label[_ngcontent-%COMP%] {\n  display: inline;\n}\n.cart-btn[_ngcontent-%COMP%] {\n  position: relative;\n}\n.cart-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.cart-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #ff0066 100%);\n  color: white;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 800;\n}\n.hero[_ngcontent-%COMP%] {\n  padding: 40px 20px 30px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 25, 53, 0.96) 0%,\n      rgba(9, 34, 63, 0.96) 100%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.hero-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hero-university[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 18px;\n  font-size: 14px;\n  line-height: 1.2;\n  letter-spacing: 1.4px;\n  font-weight: 700;\n  color: #e9f3ff;\n  text-transform: uppercase;\n  opacity: 0.9;\n}\n.hero-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 18px;\n  border: 1px solid rgba(243, 188, 71, 0.9);\n  border-radius: 999px;\n  color: #f5d38d;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  background: rgba(20, 40, 71, 0.5);\n  margin-bottom: 28px;\n}\n.hero-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  font-size: clamp(2.1rem, 4vw, 3.5rem);\n  font-weight: 700;\n  margin-bottom: 18px;\n  line-height: 1.08;\n  color: #f6f8fb;\n  letter-spacing: -0.04em;\n}\n.title-line[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  color: #f4f7fb;\n}\n.title-accent[_ngcontent-%COMP%] {\n  display: block;\n  background:\n    linear-gradient(\n      135deg,\n      #f4d47f 0%,\n      #d4a63d 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-weight: 700;\n  font-style: normal;\n  font-family: inherit;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto 42px;\n  font-size: clamp(0.95rem, 1.8vw, 1.28rem);\n  color: #dbe8ff;\n  line-height: 1.45;\n  font-weight: 400;\n  opacity: 0.92;\n}\n.hero-features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 22px;\n  max-width: 1200px;\n  margin: 0 auto;\n  text-align: left;\n}\n.feature-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 250px;\n  padding: 26px 20px 18px;\n  border-radius: 18px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(17, 51, 84, 0.8);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 16px;\n}\n.admin-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(17, 40, 77, 0.9),\n      rgba(12, 29, 56, 0.82));\n}\n.vendor-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(8, 42, 78, 0.9),\n      rgba(15, 35, 65, 0.82));\n}\n.student-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(11, 56, 60, 0.9),\n      rgba(10, 45, 52, 0.82));\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.08);\n  font-size: 28px;\n  margin-bottom: 4px;\n}\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.3rem, 1.8vw, 1.7rem);\n  line-height: 1.2;\n  font-weight: 600;\n  color: #edf5ff;\n}\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #dfeafc;\n  line-height: 1.6;\n  font-size: 0.96rem;\n  opacity: 0.96;\n}\n.feature-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: auto;\n  color: #f5d38d;\n  text-decoration: none;\n  font-size: 0.95rem;\n  font-weight: 600;\n}\n.feature-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  transition: transform 0.2s ease;\n}\n.feature-card[_ngcontent-%COMP%]:hover   .feature-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: translateX(2px);\n}\n.products-section[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 60px 20px;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  text-align: center;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 800;\n  margin-bottom: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #00d4ff 0%,\n      #0066ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n}\n.product-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  backdrop-filter: blur(10px);\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(0, 212, 255, 0.2);\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 212, 255, 0.1);\n}\n.product-image-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 160px;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.product-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: transform 0.3s ease;\n}\n.product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.product-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #ff0066 100%);\n  color: white;\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  backdrop-filter: blur(10px);\n}\n.wishlist-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: rgba(0, 0, 0, 0.4);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  backdrop-filter: blur(10px);\n  color: white;\n}\n.wishlist-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 0, 102, 0.3);\n  border-color: rgba(255, 0, 102, 0.5);\n  transform: scale(1.1);\n}\n.product-details[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  flex: 1;\n}\n.product-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #e0e0e0;\n  line-height: 1.4;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.product-pricing[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.current-price[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #00d4ff;\n}\n.old-price[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  text-decoration: line-through;\n}\n.discount-percent[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #ff6b6b;\n  font-weight: 700;\n  background: rgba(255, 107, 107, 0.1);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.product-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.express-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.1);\n  color: #00d4ff;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  width: fit-content;\n}\n.buy-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00d4ff 0%,\n      #0066ff 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: auto;\n  font-size: 13px;\n}\n.buy-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 24px rgba(0, 212, 255, 0.3);\n}\n.buy-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn-arrow[_ngcontent-%COMP%] {\n  font-size: 16px;\n  transition: transform 0.3s ease;\n}\n.buy-btn[_ngcontent-%COMP%]:hover   .btn-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.footer[_ngcontent-%COMP%] {\n  background: rgba(15, 20, 25, 0.8);\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 30px 20px;\n  text-align: center;\n}\n.footer-content[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  font-size: 12px;\n  color: #666;\n}\n@media (max-width: 768px) {\n  .mobile-menu-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 42px;\n    height: 42px;\n    border-radius: 12px;\n    border: 1px solid rgba(255, 255, 255, 0.12);\n    background: rgba(255, 255, 255, 0.04);\n    color: #eaf6ff;\n    font-size: 24px;\n    cursor: pointer;\n    flex-shrink: 0;\n  }\n  .navbar-container[_ngcontent-%COMP%] {\n    gap: 12px;\n    padding: 0 14px;\n  }\n  .navbar-brand[_ngcontent-%COMP%] {\n    min-width: auto;\n    flex: 1;\n  }\n  .search-container[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    max-width: none;\n    flex: 1 1 100%;\n  }\n  .navbar-actions[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .btn-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n  .hero-university[_ngcontent-%COMP%] {\n    font-size: 11px;\n    letter-spacing: 1px;\n  }\n  .hero-pill[_ngcontent-%COMP%] {\n    font-size: 9px;\n    padding: 9px 12px;\n    letter-spacing: 0.9px;\n    margin-bottom: 20px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n    gap: 4px;\n    margin-bottom: 14px;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.98rem;\n    margin-bottom: 26px;\n  }\n  .hero-features[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n  .feature-card[_ngcontent-%COMP%] {\n    min-height: 180px;\n    padding: 18px 16px;\n  }\n  .feature-icon[_ngcontent-%COMP%] {\n    width: 46px;\n    height: 46px;\n    font-size: 22px;\n  }\n  .feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n    gap: 12px;\n  }\n  .products-section[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .mobile-overlay[_ngcontent-%COMP%] {\n    position: fixed;\n    inset: 0;\n    background: rgba(8, 12, 18, 0.5);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.25s ease;\n    z-index: 1200;\n  }\n  .mobile-overlay.open[_ngcontent-%COMP%] {\n    display: block;\n    opacity: 1;\n    pointer-events: auto;\n  }\n  .slide-menu[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: min(82vw, 320px);\n    height: 100vh;\n    background:\n      linear-gradient(\n        180deg,\n        #0d1726 0%,\n        #101c2d 100%);\n    border-right: 1px solid rgba(255, 255, 255, 0.08);\n    box-shadow: 12px 0 32px rgba(0, 0, 0, 0.35);\n    z-index: 1300;\n    transform: translateX(-110%);\n    transition: transform 0.28s ease;\n    display: flex;\n    flex-direction: column;\n    padding: 18px 16px;\n  }\n  .slide-menu.open[_ngcontent-%COMP%] {\n    display: flex;\n    transform: translateX(0);\n  }\n  .slide-menu-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-bottom: 16px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n    margin-bottom: 18px;\n  }\n  .slide-brand[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    color: #edf5ff;\n    font-weight: 700;\n  }\n  .slide-brand-icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .close-menu[_ngcontent-%COMP%] {\n    background: transparent;\n    border: none;\n    color: #edf5ff;\n    font-size: 22px;\n    cursor: pointer;\n  }\n  .slide-nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .slide-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    padding: 12px 14px;\n    border-radius: 12px;\n    color: #edf5ff;\n    text-decoration: none;\n    background: rgba(255, 255, 255, 0.03);\n    border: 1px solid rgba(255, 255, 255, 0.06);\n    font-weight: 600;\n  }\n}\n@media (max-width: 480px) {\n  .navbar-container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .navbar-brand[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n    font-size: 12px;\n  }\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\components\\home\\home.component.ts", lineNumber: 993 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-7LZWPDP2.js.map
