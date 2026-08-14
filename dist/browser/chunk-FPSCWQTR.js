import {
  ProductService
} from "./chunk-NXEELXBY.js";
import {
  AuthService,
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZKHNJUVZ.js";

// src/app/components/cart/cart.component.ts
function CartComponent_ng_container_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275elementStart(2, "div", 22)(3, "div", 23)(4, "div")(5, "h5", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 27);
    \u0275\u0275listener("click", function CartComponent_ng_container_11_div_4_Template_button_click_11_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeItem(item_r3.productId));
    });
    \u0275\u0275text(12, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 28);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 29)(16, "button", 30);
    \u0275\u0275listener("click", function CartComponent_ng_container_11_div_4_Template_button_click_16_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateQuantity(item_r3.productId, -1));
    });
    \u0275\u0275text(17, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 31);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 30);
    \u0275\u0275listener("click", function CartComponent_ng_container_11_div_4_Template_button_click_20_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.updateQuantity(item_r3.productId, 1));
    });
    \u0275\u0275text(21, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 32);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", (item_r3.product == null ? null : item_r3.product.imageUrl) || ctx_r3.placeholderImage, \u0275\u0275sanitizeUrl)("alt", (item_r3.product == null ? null : item_r3.product.title) || "Product");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((item_r3.product == null ? null : item_r3.product.title) || "Product removed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((item_r3.product == null ? null : item_r3.product.category) || "Unknown category");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("GH\u20B5 ", (item_r3.product == null ? null : item_r3.product.price == null ? null : item_r3.product.price.toFixed(2)) || "0.00", "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((item_r3.product == null ? null : item_r3.product.description) || "This product is no longer available.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r3.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Subtotal: GH\u20B5 ", \u0275\u0275pipeBind2(24, 8, ((item_r3.product == null ? null : item_r3.product.price) || 0) * item_r3.quantity, "1.2-2"), "");
  }
}
function CartComponent_ng_container_11_p_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.successMessage);
  }
}
function CartComponent_ng_container_11_p_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.errorMessage);
  }
}
function CartComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8)(2, "div", 9)(3, "div", 10);
    \u0275\u0275template(4, CartComponent_ng_container_11_div_4_Template, 25, 11, "div", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 12)(6, "div", 13)(7, "p", 3);
    \u0275\u0275text(8, "Order summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h2", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15)(12, "span");
    \u0275\u0275text(13, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "span");
    \u0275\u0275text(18, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 17);
    \u0275\u0275listener("click", function CartComponent_ng_container_11_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.checkout());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, CartComponent_ng_container_11_p_23_Template, 2, 1, "p", 18)(24, CartComponent_ng_container_11_p_24_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.cartProducts);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("GH\u20B5 ", ctx_r3.cartTotal.toFixed(2), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.totalItems);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r3.currentUser == null ? null : ctx_r3.currentUser.name) || "Guest shopper");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.currentUser ? "Place order" : "Login to purchase");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.successMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.errorMessage);
  }
}
function CartComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "Your cart is empty. Add products from the marketplace to start checkout.");
    \u0275\u0275elementEnd();
  }
}
var CartComponent = class _CartComponent {
  constructor(productService, authService, router) {
    this.productService = productService;
    this.authService = authService;
    this.router = router;
    this.cartItems = [];
    this.cartProducts = [];
    this.currentUser = this.authService.getCurrentUser();
    this.errorMessage = "";
    this.successMessage = "";
    this.placeholderImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80";
  }
  ngOnInit() {
    this.loadCart();
  }
  loadCart() {
    this.cartItems = this.productService.getCartItems();
    this.cartProducts = this.cartItems.map((item) => __spreadProps(__spreadValues({}, item), {
      product: this.productService.getProductById(item.productId)
    }));
    this.currentUser = this.authService.getCurrentUser();
  }
  get cartTotal() {
    return this.cartProducts.reduce((sum, item) => sum + (item.product?.price || 0) * item.quantity, 0);
  }
  get totalItems() {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }
  updateQuantity(productId, delta) {
    this.errorMessage = "";
    this.successMessage = "";
    this.cartItems = this.productService.updateCartItem(productId, delta);
    this.loadCart();
  }
  removeItem(productId) {
    this.errorMessage = "";
    this.successMessage = "";
    this.cartItems = this.productService.removeFromCart(productId);
    this.loadCart();
  }
  checkout() {
    this.errorMessage = "";
    this.successMessage = "";
    if (!this.currentUser) {
      this.router.navigate(["/login"]);
      return;
    }
    if (this.currentUser.role !== "customer") {
      this.errorMessage = "Only customer accounts can place orders. Please login with a customer account.";
      return;
    }
    if (this.cartItems.length === 0) {
      this.errorMessage = "Your cart is empty. Add items before checkout.";
      return;
    }
    this.productService.clearCart();
    this.loadCart();
    this.successMessage = "Order placed successfully! Thank you for shopping with UniMart.";
  }
  static {
    this.\u0275fac = function CartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 2, consts: [["emptyCart", ""], [1, "cart-shell", "container", "py-5"], [1, "d-flex", "flex-column", "flex-md-row", "align-items-start", "justify-content-between", "gap-3", "mb-4"], [1, "text-primary", "fw-semibold", "text-uppercase", "small", "mb-2"], [1, "fw-bold", "mb-1"], [1, "text-muted", "mb-0"], ["routerLink", "/", 1, "btn", "btn-outline-secondary", "rounded-pill"], [4, "ngIf", "ngIfElse"], [1, "row", "g-4"], [1, "col-lg-8"], [1, "card", "p-3"], ["class", "cart-item d-flex flex-column flex-md-row gap-3 align-items-start align-items-md-center p-3 border-bottom", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "card", "p-4", "h-100"], [1, "fw-bold", "mb-3"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "d-flex", "justify-content-between", "mb-4"], [1, "btn", "btn-primary", "w-100", "rounded-pill", "py-3", 3, "click"], ["class", "text-success small mt-3", 4, "ngIf"], ["class", "text-danger small mt-3", 4, "ngIf"], [1, "cart-item", "d-flex", "flex-column", "flex-md-row", "gap-3", "align-items-start", "align-items-md-center", "p-3", "border-bottom"], [1, "cart-thumb", "rounded-4", 3, "src", "alt"], [1, "flex-grow-1"], [1, "d-flex", "flex-column", "flex-sm-row", "justify-content-between", "gap-3", "align-items-start", "align-items-sm-center"], [1, "mb-1"], [1, "text-muted", "small", "mb-1"], [1, "text-muted", "small", "mb-0"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "text-muted", "small", "mt-2", "mb-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "fw-bold", "px-3"], [1, "text-muted"], [1, "text-success", "small", "mt-3"], [1, "text-danger", "small", "mt-3"], [1, "alert", "alert-info"]], template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "p", 3);
        \u0275\u0275text(4, "Your cart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "Review your order");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Confirm products, update quantities, and complete the checkout.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "a", 6);
        \u0275\u0275text(10, "Continue shopping");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, CartComponent_ng_container_11_Template, 25, 7, "ng-container", 7)(12, CartComponent_ng_template_12_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const emptyCart_r5 = \u0275\u0275reference(13);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.cartProducts.length > 0)("ngIfElse", emptyCart_r5);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterLink], styles: ["\n\n.cart-shell[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.cart-item[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background: #fff;\n}\n.cart-thumb[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  object-fit: cover;\n  border-radius: 20px;\n  flex-shrink: 0;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 26px;\n}\n@media (max-width: 767.98px) {\n  .cart-item[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .cart-thumb[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 220px;\n  }\n}\n/*# sourceMappingURL=cart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src\\app\\components\\cart\\cart.component.ts", lineNumber: 107 });
})();
export {
  CartComponent
};
//# sourceMappingURL=chunk-FPSCWQTR.js.map
