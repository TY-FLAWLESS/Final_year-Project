import {
  AuthService,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-YHRFUBYC.js";
import {
  Router,
  RouterLink
} from "./chunk-74IGBRBX.js";
import {
  CommonModule,
  NgIf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JHEYSTBZ.js";

// src/app/components/login/login.component.ts
function LoginComponent_p_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function LoginComponent_p_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.email = "";
    this.password = "";
    this.submitting = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.isMenuOpen = false;
    this.authService = inject(AuthService);
    this.router = inject(Router);
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  login() {
    this.errorMessage = "";
    this.successMessage = "";
    if (!this.email || !this.password) {
      this.errorMessage = "Please enter both email and password.";
      return;
    }
    this.submitting = true;
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (response) => {
        this.submitting = false;
        localStorage.setItem("unimart_token", response.token);
        localStorage.setItem("unimart_user", JSON.stringify(response.user));
        this.successMessage = response.message || "Login successful";
        if (response.user?.role === "admin") {
          this.router.navigateByUrl("/admin");
        } else if (response.user?.role === "vendor") {
          this.router.navigateByUrl("/vendor");
        } else {
          this.router.navigateByUrl("/");
        }
      },
      error: (error) => {
        this.submitting = false;
        this.errorMessage = error?.error?.message || "Unable to login right now.";
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 78, vars: 10, consts: [[1, "topbar"], [1, "container"], [1, "topbar-inner"], ["routerLink", "/", 1, "brand-mark"], [1, "brand-icon"], [1, "topbar-actions"], ["routerLink", "/login", 1, "top-link"], ["routerLink", "/register", 1, "top-cta"], ["type", "button", "aria-label", "Toggle menu", 1, "menu-toggle", 3, "click"], [1, "mobile-backdrop", 3, "click"], [1, "mobile-menu"], [1, "mobile-menu-header"], [1, "drawer-label"], [1, "drawer-subtitle"], ["type", "button", "aria-label", "Close menu", 1, "close-menu", 3, "click"], ["routerLink", "/", 3, "click"], ["routerLink", "/register", 3, "click"], ["routerLink", "/login", 3, "click"], [1, "auth-shell"], [1, "row", "auth-grid", "align-items-stretch", "g-4"], [1, "col-lg-5", "d-none", "d-lg-block"], [1, "feature-panel", "h-100"], [1, "feature-badge"], [1, "fw-bold", "mb-3"], [1, "feature-copy"], [1, "feature-list"], [1, "feature-chip"], [1, "col-lg-4", "col-md-6", "mx-auto"], [1, "glass-card", "p-4", "p-lg-4", "h-100"], [1, "text-center", "mb-4"], [1, "brand-badge"], [1, "mt-3", "fw-bold", "mb-2"], [1, "text-muted", "mb-0"], [3, "ngSubmit"], [1, "mb-3"], [1, "form-label", "fw-semibold"], ["type", "email", "name", "email", "placeholder", "you@unimart.com", "required", "", 1, "form-control", "form-control-lg", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "placeholder", "Enter your password", "required", "", 1, "form-control", "form-control-lg", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "w-100", "rounded-pill", "fw-bold", 3, "disabled"], ["class", "text-danger mt-3 mb-0", 4, "ngIf"], ["class", "text-success mt-3 mb-0", 4, "ngIf"], [1, "text-center", "mt-4"], [1, "text-muted"], ["routerLink", "/register", 1, "fw-semibold", "ms-1"], [1, "text-danger", "mt-3", "mb-0"], [1, "text-success", "mt-3", "mb-0"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
        \u0275\u0275text(5, "U");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7, "UniMart");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "a", 6);
        \u0275\u0275text(10, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a", 7);
        \u0275\u0275text(12, "Join now");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 8);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_13_listener() {
          return ctx.toggleMenu();
        });
        \u0275\u0275text(14, " \u2630 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9);
        \u0275\u0275listener("click", function LoginComponent_Template_div_click_15_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "div")(19, "div", 12);
        \u0275\u0275text(20, "UniMart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 13);
        \u0275\u0275text(22, "Student marketplace");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "button", 14);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_23_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(24, "\u2715");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "a", 15);
        \u0275\u0275listener("click", function LoginComponent_Template_a_click_25_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(26, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "a", 16);
        \u0275\u0275listener("click", function LoginComponent_Template_a_click_27_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(28, "Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "a", 17);
        \u0275\u0275listener("click", function LoginComponent_Template_a_click_29_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(30, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "a", 16);
        \u0275\u0275listener("click", function LoginComponent_Template_a_click_31_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(32, "Create account");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "div", 18)(34, "div", 1)(35, "div", 19)(36, "div", 20)(37, "div", 21)(38, "div", 22);
        \u0275\u0275text(39, "Trusted campus commerce");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "h2", 23);
        \u0275\u0275text(41, "Shop faster. Sell smarter.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p", 24);
        \u0275\u0275text(43, "Access student deals, verified vendors, and a premium marketplace experience built for campus life.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 25)(45, "span", 26);
        \u0275\u0275text(46, "Fast checkout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span", 26);
        \u0275\u0275text(48, "Secure sign in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span", 26);
        \u0275\u0275text(50, "Vendor-ready roles");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "div", 27)(52, "div", 28)(53, "div", 29)(54, "div", 30);
        \u0275\u0275text(55, "UniMart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "h2", 31);
        \u0275\u0275text(57, "Welcome back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "p", 32);
        \u0275\u0275text(59, "Sign in to continue shopping and managing your store.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "form", 33);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_60_listener() {
          return ctx.login();
        });
        \u0275\u0275elementStart(61, "div", 34)(62, "label", 35);
        \u0275\u0275text(63, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "input", 36);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_64_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 34)(66, "label", 35);
        \u0275\u0275text(67, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "input", 37);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_68_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "button", 38);
        \u0275\u0275text(70);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(71, LoginComponent_p_71_Template, 2, 1, "p", 39)(72, LoginComponent_p_72_Template, 2, 1, "p", 40);
        \u0275\u0275elementStart(73, "div", 41)(74, "span", 42);
        \u0275\u0275text(75, "New to UniMart?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "a", 43);
        \u0275\u0275text(77, "Create account");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275classProp("show", ctx.isMenuOpen);
        \u0275\u0275advance();
        \u0275\u0275classProp("show", ctx.isMenuOpen);
        \u0275\u0275advance(48);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.submitting);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.submitting ? "Signing in..." : "Login", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.successMessage);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(6, 14, 30, 0.98),\n      rgba(22, 60, 145, 0.94));\n  backdrop-filter: blur(18px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.topbar-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 0;\n  min-height: 72px;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  color: #ffffff;\n  text-decoration: none;\n  font-size: 1.25rem;\n  font-weight: 900;\n  letter-spacing: 0.04em;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  display: inline-grid;\n  place-items: center;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #cfe0ff);\n  color: #0b5ed7;\n  font-weight: 900;\n  font-size: 0.95rem;\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.top-link[_ngcontent-%COMP%], \n.top-cta[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 0.9rem;\n}\n.top-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.88);\n}\n.top-cta[_ngcontent-%COMP%] {\n  padding: 9px 16px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #dbeafe);\n  color: #1d4ed8;\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  border: 0;\n  background: rgba(255, 255, 255, 0.14);\n  color: #fff;\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  font-size: 1.15rem;\n  box-shadow: 0 10px 20px rgba(5, 10, 25, 0.2);\n}\n.mobile-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(3, 7, 18, 0.45);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.25s ease;\n  z-index: 25;\n}\n.mobile-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: min(320px, 85vw);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(7, 16, 31, 0.98),\n      rgba(8, 76, 178, 0.98));\n  box-shadow: -16px 0 40px rgba(0, 0, 0, 0.35);\n  transform: translateX(110%);\n  transition: transform 0.28s ease;\n  z-index: 30;\n  visibility: hidden;\n  backdrop-filter: blur(18px);\n}\n.mobile-menu-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  padding: 6px 4px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n.drawer-label[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 900;\n  font-size: 1rem;\n}\n.drawer-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 0.78rem;\n}\n.close-menu[_ngcontent-%COMP%] {\n  border: 0;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n}\n.mobile-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.10);\n  font-weight: 700;\n}\n.mobile-menu.show[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  visibility: visible;\n}\n.auth-shell[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 70px);\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(13, 110, 253, 0.22),\n      transparent 35%),\n    linear-gradient(\n      135deg,\n      #f4f8ff,\n      #eef4ff 45%,\n      #ffffff 100%);\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.auth-grid[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 130px);\n}\n.feature-panel[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      160deg,\n      #071120,\n      #1847b3 58%,\n      #5b2fd8);\n  color: #fff;\n  box-shadow: 0 28px 70px rgba(7, 26, 58, 0.20);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.feature-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-self: flex-start;\n  padding: 6px 12px;\n  background: rgba(255, 255, 255, 0.16);\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.feature-copy[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.82);\n  max-width: 420px;\n  line-height: 1.7;\n}\n.feature-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.feature-chip[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n.glass-card[_ngcontent-%COMP%] {\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.96);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  box-shadow: 0 22px 58px rgba(7, 26, 58, 0.14);\n}\n.brand-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px 12px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #7c3aed);\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid #1d4ed8;\n  padding: 0.7rem 0.85rem;\n  font-size: 0.95rem;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #0d6efd;\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.14);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #7c3aed);\n  border: none;\n  box-shadow: 0 14px 30px rgba(37, 99, 235, 0.28);\n}\n@media (min-width: 768px) {\n  .mobile-backdrop[_ngcontent-%COMP%], \n   .mobile-menu[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .topbar-actions[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: inline-grid;\n    place-items: center;\n  }\n  .auth-grid[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\components\\login\\login.component.ts", lineNumber: 376 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-M44GB67E.js.map
