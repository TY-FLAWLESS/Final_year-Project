import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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
  __spreadValues,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
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
} from "./chunk-RLCOLIVI.js";

// src/app/components/vendor-dashboard/vendor-dashboard.component.ts
function VendorDashboardComponent_option_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275property("value", option_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r2);
  }
}
function VendorDashboardComponent_div_85_article_1_div_21_ng_container_1_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    \u0275\u0275property("value", option_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r8);
  }
}
function VendorDashboardComponent_div_85_article_1_div_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 53)(2, "div", 54)(3, "label", 55);
    \u0275\u0275text(4, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function VendorDashboardComponent_div_85_article_1_div_21_ng_container_1_Template_input_ngModelChange_5_listener($event) {
      const editingProductRef_r7 = \u0275\u0275restoreView(_r6).ngIf;
      \u0275\u0275twoWayBindingSet(editingProductRef_r7.title, $event) || (editingProductRef_r7.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 54)(7, "label", 55);
    \u0275\u0275text(8, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function VendorDashboardComponent_div_85_article_1_div_21_ng_container_1_Template_select_ngModelChange_9_listener($event) {
      const editingProductRef_r7 = \u0275\u0275restoreView(_r6).ngIf;
      \u0275\u0275twoWayBindingSet(editingProductRef_r7.category, $event) || (editingProductRef_r7.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(10, VendorDashboardComponent_div_85_article_1_div_21_ng_container_1_option_10_Template, 2, 2, "option", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 54)(12, "label", 55);
    \u0275\u0275text(13, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function VendorDashboardComponent_div_85_article_1_div_21_ng_container_1_Template_input_ngModelChange_14_listener($event) {
      const editingProductRef_r7 = \u0275\u0275restoreView(_r6).ngIf;
      \u0275\u0275twoWayBindingSet(editingProductRef_r7.price, $event) || (editingProductRef_r7.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 54)(16, "label", 55);
    \u0275\u0275text(17, "Image URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function VendorDashboardComponent_div_85_article_1_div_21_ng_container_1_Template_input_ngModelChange_18_listener($event) {
      const editingProductRef_r7 = \u0275\u0275restoreView(_r6).ngIf;
      \u0275\u0275twoWayBindingSet(editingProductRef_r7.imageUrl, $event) || (editingProductRef_r7.imageUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 57)(20, "label", 55);
    \u0275\u0275text(21, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "textarea", 58);
    \u0275\u0275twoWayListener("ngModelChange", function VendorDashboardComponent_div_85_article_1_div_21_ng_container_1_Template_textarea_ngModelChange_22_listener($event) {
      const editingProductRef_r7 = \u0275\u0275restoreView(_r6).ngIf;
      \u0275\u0275twoWayBindingSet(editingProductRef_r7.description, $event) || (editingProductRef_r7.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 59)(24, "button", 60);
    \u0275\u0275listener("click", function VendorDashboardComponent_div_85_article_1_div_21_ng_container_1_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.saveEdit());
    });
    \u0275\u0275text(25, "Save changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 61);
    \u0275\u0275listener("click", function VendorDashboardComponent_div_85_article_1_div_21_ng_container_1_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.cancelEdit());
    });
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const editingProductRef_r7 = ctx.ngIf;
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", editingProductRef_r7.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", editingProductRef_r7.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.categoryOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", editingProductRef_r7.price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", editingProductRef_r7.imageUrl);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", editingProductRef_r7.description);
  }
}
function VendorDashboardComponent_div_85_article_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, VendorDashboardComponent_div_85_article_1_div_21_ng_container_1_Template, 28, 6, "ng-container", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.editingProduct);
  }
}
function VendorDashboardComponent_div_85_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 38)(1, "div", 39)(2, "div", 40);
    \u0275\u0275element(3, "img", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42)(5, "div", 43)(6, "span", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 46)(15, "button", 47);
    \u0275\u0275listener("click", function VendorDashboardComponent_div_85_article_1_Template_button_click_15_listener() {
      const product_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.startEdit(product_r4));
    });
    \u0275\u0275text(16, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 48);
    \u0275\u0275listener("click", function VendorDashboardComponent_div_85_article_1_Template_button_click_17_listener() {
      const product_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.deleteProduct(product_r4.id));
    });
    \u0275\u0275text(18, "Delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 49);
    \u0275\u0275listener("click", function VendorDashboardComponent_div_85_article_1_Template_button_click_19_listener() {
      const product_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.toggleAvailability(product_r4.id));
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, VendorDashboardComponent_div_85_article_1_div_21_Template, 2, 1, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", product_r4.imageUrl || ctx_r4.defaultImage, \u0275\u0275sanitizeUrl)("alt", product_r4.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r4.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("GH\u20B5 ", product_r4.price, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r4.description);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", product_r4.available ? "Hide item" : "Show item", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r4.editingProduct == null ? null : ctx_r4.editingProduct.id) === product_r4.id);
  }
}
function VendorDashboardComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, VendorDashboardComponent_div_85_article_1_Template, 22, 8, "article", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.vendorProducts);
  }
}
function VendorDashboardComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "h3");
    \u0275\u0275text(2, "No products yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 16);
    \u0275\u0275text(4, "Add your first product from the left panel to start selling.");
    \u0275\u0275elementEnd()();
  }
}
var VendorDashboardComponent = class _VendorDashboardComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.productService = inject(ProductService);
    this.router = inject(Router);
    this.currentUser = this.authService.getCurrentUser();
    this.accountName = this.currentUser?.name || "";
    this.vendorProducts = [];
    this.defaultImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80";
    this.categoryOptions = ["Books & Study", "Tech & Gadgets", "Fashion", "Food & Snacks", "Campus Essentials", "Accessories"];
    this.newProduct = {
      title: "",
      description: "",
      price: 0,
      imageUrl: "",
      category: this.categoryOptions[0],
      vendorEmail: this.currentUser?.email || ""
    };
    this.editingProduct = null;
  }
  ngOnInit() {
    this.loadProducts();
  }
  get totalProducts() {
    return this.vendorProducts.length;
  }
  get availableProducts() {
    return this.vendorProducts.filter((product) => product.available).length;
  }
  get inventoryValue() {
    return this.vendorProducts.reduce((sum, product) => sum + product.price, 0);
  }
  loadProducts() {
    this.vendorProducts = this.currentUser?.email ? this.productService.getProductsByVendor(this.currentUser.email) : [];
  }
  logout() {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(["/login"]),
      error: () => this.router.navigate(["/login"])
    });
  }
  saveAccount() {
    if (!this.currentUser?.email) {
      return;
    }
    this.currentUser.name = this.accountName;
    this.authService.updateUserName(this.currentUser.email, this.accountName);
  }
  addProduct() {
    if (!this.currentUser?.email || !this.newProduct.title || this.newProduct.price <= 0) {
      return;
    }
    this.newProduct.vendorEmail = this.currentUser.email;
    this.productService.addProduct(this.newProduct);
    this.newProduct = {
      title: "",
      description: "",
      price: 0,
      imageUrl: "",
      category: "",
      vendorEmail: this.currentUser.email
    };
    this.loadProducts();
  }
  startEdit(product) {
    this.editingProduct = __spreadValues({}, product);
  }
  saveEdit() {
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
  cancelEdit() {
    this.editingProduct = null;
  }
  deleteProduct(productId) {
    this.productService.removeProduct(productId);
    this.loadProducts();
  }
  toggleAvailability(productId) {
    this.productService.toggleProductAvailability(productId);
    this.loadProducts();
  }
  static {
    this.\u0275fac = function VendorDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VendorDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorDashboardComponent, selectors: [["app-vendor-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 88, vars: 17, consts: [["emptyVendorProducts", ""], [1, "vendor-shell"], [1, "vendor-topbar"], [1, "eyebrow"], [1, "lead"], [1, "topbar-actions"], ["routerLink", "/", 1, "btn", "btn-ghost"], [1, "btn", "btn-secondary", 3, "click"], [1, "stats-grid"], [1, "stat-card", "blue"], [1, "stat-label"], [1, "stat-card", "purple"], [1, "stat-card", "green"], [1, "dashboard-grid"], [1, "panel", "panel-left"], [1, "panel-header"], [1, "text-muted"], [1, "panel-block", "card", "glass-card"], [1, "block-title"], ["placeholder", "Enter your name", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "mt-3", "w-100", 3, "click"], [1, "form-grid"], ["placeholder", "Product title", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "placeholder", "GH\u20B5", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "full-width"], ["placeholder", "https://", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Short product description", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-gradient", "mt-3", "w-100", 3, "click"], [1, "panel", "panel-right"], [1, "panel-header", "panel-header-alt"], [1, "badge", "badge-pill"], ["class", "products-list", 4, "ngIf", "ngIfElse"], [3, "value"], [1, "products-list"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], [1, "product-card-main"], [1, "product-preview"], [3, "src", "alt"], [1, "product-copy"], [1, "product-topline"], [1, "badge", "badge-pill", "badge-surface"], [1, "product-price"], [1, "product-actions"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "btn", "btn-sm", "btn-surface", 3, "click"], ["class", "edit-panel", 4, "ngIf"], [1, "edit-panel"], [4, "ngIf"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], ["type", "number", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-12"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mt-3", "d-flex", "flex-wrap", "gap-2"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "empty-state"]], template: function VendorDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div")(3, "p", 3);
        \u0275\u0275text(4, "Vendor hub");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Launch products faster, manage inventory, and keep your store in full control.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "a", 6);
        \u0275\u0275text(11, "Marketplace");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 7);
        \u0275\u0275listener("click", function VendorDashboardComponent_Template_button_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.logout());
        });
        \u0275\u0275text(13, "Logout");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "section", 8)(15, "article", 9)(16, "p", 10);
        \u0275\u0275text(17, "Live Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "h2");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "article", 11)(23, "p", 10);
        \u0275\u0275text(24, "Inactive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h2");
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span");
        \u0275\u0275text(28, "Hidden or unavailable");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "article", 12)(30, "p", 10);
        \u0275\u0275text(31, "Inventory value");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "h2");
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span");
        \u0275\u0275text(35, "Estimated total price");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "section", 13)(37, "aside", 14)(38, "div", 15)(39, "div")(40, "p", 3);
        \u0275\u0275text(41, "Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "h2");
        \u0275\u0275text(43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "p", 16);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 17)(47, "p", 18);
        \u0275\u0275text(48, "Update store owner name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function VendorDashboardComponent_Template_input_ngModelChange_49_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.accountName, $event) || (ctx.accountName = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 20);
        \u0275\u0275listener("click", function VendorDashboardComponent_Template_button_click_50_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.saveAccount());
        });
        \u0275\u0275text(51, "Save profile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 17)(53, "p", 18);
        \u0275\u0275text(54, "Quick add product");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 21)(56, "label");
        \u0275\u0275text(57, " Title ");
        \u0275\u0275elementStart(58, "input", 22);
        \u0275\u0275twoWayListener("ngModelChange", function VendorDashboardComponent_Template_input_ngModelChange_58_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.newProduct.title, $event) || (ctx.newProduct.title = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "label");
        \u0275\u0275text(60, " Category ");
        \u0275\u0275elementStart(61, "select", 23);
        \u0275\u0275twoWayListener("ngModelChange", function VendorDashboardComponent_Template_select_ngModelChange_61_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.newProduct.category, $event) || (ctx.newProduct.category = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(62, "option", 24);
        \u0275\u0275text(63, "Select category");
        \u0275\u0275elementEnd();
        \u0275\u0275template(64, VendorDashboardComponent_option_64_Template, 2, 2, "option", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "label");
        \u0275\u0275text(66, " Price ");
        \u0275\u0275elementStart(67, "input", 26);
        \u0275\u0275twoWayListener("ngModelChange", function VendorDashboardComponent_Template_input_ngModelChange_67_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.newProduct.price, $event) || (ctx.newProduct.price = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "label", 27);
        \u0275\u0275text(69, " Image URL ");
        \u0275\u0275elementStart(70, "input", 28);
        \u0275\u0275twoWayListener("ngModelChange", function VendorDashboardComponent_Template_input_ngModelChange_70_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.newProduct.imageUrl, $event) || (ctx.newProduct.imageUrl = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "label", 27);
        \u0275\u0275text(72, " Description ");
        \u0275\u0275elementStart(73, "textarea", 29);
        \u0275\u0275twoWayListener("ngModelChange", function VendorDashboardComponent_Template_textarea_ngModelChange_73_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.newProduct.description, $event) || (ctx.newProduct.description = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "button", 30);
        \u0275\u0275listener("click", function VendorDashboardComponent_Template_button_click_74_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addProduct());
        });
        \u0275\u0275text(75, "Publish new product");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "main", 31)(77, "div", 32)(78, "div")(79, "p", 3);
        \u0275\u0275text(80, "Listings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "h2");
        \u0275\u0275text(82, "Products you\u2019ve published");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "span", 33);
        \u0275\u0275text(84);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(85, VendorDashboardComponent_div_85_Template, 2, 1, "div", 34)(86, VendorDashboardComponent_ng_template_86_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const emptyVendorProducts_r9 = \u0275\u0275reference(87);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("Welcome back, ", (ctx.currentUser == null ? null : ctx.currentUser.name) || "Vendor", "");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.totalProducts);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.availableProducts, " visible items");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.totalProducts - ctx.availableProducts);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("GH\u20B5 ", ctx.inventoryValue.toFixed(2), "");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate((ctx.currentUser == null ? null : ctx.currentUser.name) || "Your name");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.accountName);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.newProduct.title);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.newProduct.category);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.categoryOptions);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.newProduct.price);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.newProduct.imageUrl);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.newProduct.description);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1("", ctx.vendorProducts.length, " total");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.vendorProducts.length > 0)("ngIfElse", emptyVendorProducts_r9);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(59, 130, 246, 0.18),\n      transparent 20%),\n    linear-gradient(\n      180deg,\n      #0a152c 0%,\n      #151f3f 100%);\n  color: #eef2ff;\n}\n.vendor-shell[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 3rem 1.5rem;\n}\n.vendor-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 1.5rem;\n  align-items: center;\n  padding: 2rem;\n  border-radius: 2rem;\n  background: rgba(15, 23, 42, 0.86);\n  border: 1px solid rgba(148, 163, 184, 0.12);\n  box-shadow: 0 40px 120px rgba(15, 23, 42, 0.35);\n}\n.vendor-topbar[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.24em;\n  color: #93c5fd;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n}\n.vendor-topbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.3rem, 3vw, 3.5rem);\n  margin-bottom: 0.75rem;\n}\n.lead[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  max-width: 720px;\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  font-weight: 700;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #f8fafc;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  padding: 0.9rem 1.75rem;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  padding: 0.9rem 1.75rem;\n  border: none;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.8rem;\n  margin: 2rem 0;\n}\n.stat-card[_ngcontent-%COMP%] {\n  padding: 1.2rem;\n  border-radius: 1.5rem;\n  background: rgba(15, 23, 42, 0.95);\n  border: 1px solid rgba(148, 163, 184, 0.1);\n  text-align: center;\n}\n.stat-card.blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.18),\n      rgba(30, 64, 175, 0.18));\n}\n.stat-card.purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(167, 139, 250, 0.18),\n      rgba(109, 40, 217, 0.18));\n}\n.stat-card.green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(52, 211, 153, 0.18),\n      rgba(16, 185, 129, 0.18));\n}\n.stat-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  color: #a5b4fc;\n  font-size: 0.68rem;\n  margin-bottom: 0.5rem;\n}\n.stat-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.85rem;\n  margin: 0 0 0.4rem 0;\n}\n.stat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: #cbd5e1;\n}\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 360px minmax(0, 1fr);\n  gap: 1.5rem;\n}\n.panel[_ngcontent-%COMP%] {\n  border-radius: 2rem;\n  padding: 1.5rem;\n  background: rgba(15, 23, 42, 0.92);\n  border: 1px solid rgba(148, 163, 184, 0.1);\n}\n.panel-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.panel-header-alt[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.badge-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.8rem 1rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  color: #e2e8f0;\n}\n.glass-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-radius: 1.75rem;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(148, 163, 184, 0.12);\n  backdrop-filter: blur(18px);\n}\n.block-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n  font-size: 0.92rem;\n  color: #cbd5e1;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 1rem;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(15, 23, 42, 0.9);\n  color: #e2e8f0;\n  padding: 0.95rem 1rem;\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.btn-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #38bdf8,\n      #818cf8);\n  border: none;\n  color: #fff;\n}\n.panel-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.products-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n}\n.product-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-radius: 1.75rem;\n  border: 1px solid rgba(148, 163, 184, 0.12);\n  background: rgba(255, 255, 255, 0.04);\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);\n}\n.product-card-main[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.product-preview[_ngcontent-%COMP%] {\n  min-width: 170px;\n  min-height: 140px;\n  border-radius: 1.5rem;\n  overflow: hidden;\n  flex-shrink: 0;\n  background: #0f172a;\n}\n.product-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.product-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0.75rem;\n  font-size: 1.25rem;\n}\n.product-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #cbd5e1;\n}\n.product-topline[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.product-price[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: #bae6fd;\n}\n.badge-surface[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #e2e8f0;\n}\n.product-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 999px;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: #e2e8f0;\n  border: 1px solid rgba(148, 163, 184, 0.18);\n}\n.btn-surface[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #e2e8f0;\n  border: none;\n}\n.edit-panel[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1.25rem;\n  border-radius: 1.5rem;\n  background: rgba(15, 23, 42, 0.92);\n  border: 1px solid rgba(148, 163, 184, 0.12);\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-radius: 1.75rem;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px dashed rgba(148, 163, 184, 0.24);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n@media (max-width: 991.98px) {\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=vendor-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorDashboardComponent, { className: "VendorDashboardComponent", filePath: "src\\app\\components\\vendor-dashboard\\vendor-dashboard.component.ts", lineNumber: 444 });
})();
export {
  VendorDashboardComponent
};
//# sourceMappingURL=chunk-H3ZDZ3MP.js.map
