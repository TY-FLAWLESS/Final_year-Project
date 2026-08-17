import {
  CheckboxControlValueAccessor,
  CheckboxRequiredValidator,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-VV65OK7X.js";
import {
  AuthService
} from "./chunk-ZCD6RBUE.js";
import {
  CommonModule,
  NgIf,
  Router,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RLCOLIVI.js";

// src/app/components/login/login.component.ts
function LoginComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 20);
    \u0275\u0275listener("click", function LoginComponent_div_31_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isLoginMode = true);
    });
    \u0275\u0275text(2, " Login ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 20);
    \u0275\u0275listener("click", function LoginComponent_div_31_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isLoginMode = false);
    });
    \u0275\u0275text(4, " Register ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.isLoginMode);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", !ctx_r1.isLoginMode);
  }
}
function LoginComponent_form_32_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r1.errorMessage, " ");
  }
}
function LoginComponent_form_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 21);
    \u0275\u0275listener("ngSubmit", function LoginComponent_form_32_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleLogin());
    });
    \u0275\u0275elementStart(1, "div", 22)(2, "h2");
    \u0275\u0275text(3, "Welcome Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Sign in to your account");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "label", 24);
    \u0275\u0275text(8, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 25)(10, "span", 26);
    \u0275\u0275text(11, "\u2709\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_form_32_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.loginForm.email, $event) || (ctx_r1.loginForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 23)(14, "label", 24);
    \u0275\u0275text(15, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 25)(17, "span", 26);
    \u0275\u0275text(18, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_form_32_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.loginForm.password, $event) || (ctx_r1.loginForm.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 29);
    \u0275\u0275listener("click", function LoginComponent_form_32_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPassword = !ctx_r1.showPassword);
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 30)(23, "a", 31);
    \u0275\u0275text(24, "Forgot password?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 32);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, LoginComponent_form_32_div_27_Template, 2, 1, "div", 33);
    \u0275\u0275elementStart(28, "div", 34)(29, "span");
    \u0275\u0275text(30, "Don't have an account?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 35);
    \u0275\u0275listener("click", function LoginComponent_form_32_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isLoginMode = false);
    });
    \u0275\u0275text(32, " Create one now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.loginForm.email);
    \u0275\u0275advance(7);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.loginForm.password);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showPassword ? "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F" : "\u{1F441}\uFE0F", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLoading ? "\u23F3 Signing in..." : "\u2713 Sign In", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
  }
}
function LoginComponent_form_33_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 23)(2, "label", 24);
    \u0275\u0275text(3, "Business Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "span", 26);
    \u0275\u0275text(6, "\u{1F3EA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_form_33_div_13_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.vendorForm.businessName, $event) || (ctx_r1.vendorForm.businessName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 23)(9, "label", 24);
    \u0275\u0275text(10, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 25)(12, "span", 26);
    \u0275\u0275text(13, "\u{1F4C1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_form_33_div_13_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.vendorForm.businessCategory, $event) || (ctx_r1.vendorForm.businessCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 46);
    \u0275\u0275text(16, "Select a category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 47);
    \u0275\u0275text(18, "Electronics & Gadgets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 48);
    \u0275\u0275text(20, "Fashion & Accessories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 49);
    \u0275\u0275text(22, "Books & Stationery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 50);
    \u0275\u0275text(24, "Food & Beverages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 51);
    \u0275\u0275text(26, "Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 52);
    \u0275\u0275text(28, "Other");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 23)(30, "label", 24);
    \u0275\u0275text(31, "Business Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 25)(33, "span", 26);
    \u0275\u0275text(34, "\u{1F4F1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_form_33_div_13_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.vendorForm.businessPhone, $event) || (ctx_r1.vendorForm.businessPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vendorForm.businessName);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vendorForm.businessCategory);
    \u0275\u0275advance(21);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vendorForm.businessPhone);
  }
}
function LoginComponent_form_33_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r1.errorMessage, " ");
  }
}
function LoginComponent_form_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 21);
    \u0275\u0275listener("ngSubmit", function LoginComponent_form_33_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleRegister());
    });
    \u0275\u0275elementStart(1, "div", 22)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "label", 24);
    \u0275\u0275text(8, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 25)(10, "span", 26);
    \u0275\u0275text(11, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_form_33_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.registerForm.name, $event) || (ctx_r1.registerForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, LoginComponent_form_33_div_13_Template, 36, 3, "div", 38);
    \u0275\u0275elementStart(14, "div", 23)(15, "label", 24);
    \u0275\u0275text(16, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 25)(18, "span", 26);
    \u0275\u0275text(19, "\u2709\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_form_33_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.registerForm.email, $event) || (ctx_r1.registerForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 23)(22, "label", 24);
    \u0275\u0275text(23, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 25)(25, "span", 26);
    \u0275\u0275text(26, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_form_33_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.registerForm.password, $event) || (ctx_r1.registerForm.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 29);
    \u0275\u0275listener("click", function LoginComponent_form_33_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPassword = !ctx_r1.showPassword);
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 23)(31, "label", 24);
    \u0275\u0275text(32, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 25)(34, "span", 26);
    \u0275\u0275text(35, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_form_33_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.registerForm.confirmPassword, $event) || (ctx_r1.registerForm.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "label", 41)(38, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_form_33_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.registerForm.terms, $event) || (ctx_r1.registerForm.terms = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "I agree to the ");
    \u0275\u0275elementStart(41, "strong");
    \u0275\u0275text(42, "Terms of Service");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " and ");
    \u0275\u0275elementStart(44, "strong");
    \u0275\u0275text(45, "Privacy Policy");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "button", 32);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, LoginComponent_form_33_div_48_Template, 2, 1, "div", 33);
    \u0275\u0275elementStart(49, "div", 34)(50, "span");
    \u0275\u0275text(51, "Already have an account?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 35);
    \u0275\u0275listener("click", function LoginComponent_form_33_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isLoginMode = true);
    });
    \u0275\u0275text(53, " Sign in here ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.currentRole === "vendor" ? "Start Your Shop" : "Join Us");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentRole === "vendor" ? "Set up your business account" : "Create your account");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerForm.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentRole === "vendor");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerForm.email);
    \u0275\u0275advance(7);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerForm.password);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showPassword ? "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F" : "\u{1F441}\uFE0F", " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerForm.confirmPassword);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.registerForm.terms);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLoading ? "\u23F3 Creating account..." : "\u2728 Create Account", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.currentRole = "customer";
    this.isLoginMode = true;
    this.isLoading = false;
    this.showPassword = false;
    this.errorMessage = "";
    this.loginForm = {
      email: "",
      password: ""
    };
    this.registerForm = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false
    };
    this.vendorForm = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
      businessName: "",
      businessCategory: "",
      businessPhone: ""
    };
  }
  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      const user = this.authService.getCurrentUser();
      if (user?.role === "admin") {
        this.router.navigateByUrl("/admin");
      } else if (user?.role === "vendor") {
        this.router.navigateByUrl("/vendor");
      } else if (user?.role === "customer") {
        this.router.navigateByUrl("/customer");
      } else {
        this.router.navigateByUrl("/");
      }
    }
  }
  switchRole(role) {
    this.currentRole = role;
    this.isLoginMode = true;
    this.errorMessage = "";
    this.resetForms();
  }
  handleLogin() {
    this.errorMessage = "";
    if (!this.loginForm.email || !this.loginForm.password) {
      this.errorMessage = "Please enter your email and password.";
      return;
    }
    this.isLoading = true;
    this.authService.login({
      email: this.loginForm.email,
      password: this.loginForm.password,
      role: this.currentRole
    }).subscribe({
      next: (response) => {
        this.isLoading = false;
        localStorage.setItem("unimart_user_role", this.currentRole);
        if (this.currentRole === "admin") {
          this.router.navigateByUrl("/admin");
        } else if (this.currentRole === "vendor") {
          this.router.navigateByUrl("/vendor");
        } else if (this.currentRole === "customer") {
          this.router.navigateByUrl("/customer");
        } else {
          this.router.navigateByUrl("/");
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message || "Login failed. Please try again.";
      }
    });
  }
  handleRegister() {
    this.errorMessage = "";
    const commonForm = this.registerForm;
    const vendorForm = this.currentRole === "vendor" ? this.vendorForm : null;
    if (!commonForm.name || !commonForm.email || !commonForm.password) {
      this.errorMessage = "Please fill in all required fields.";
      return;
    }
    if (this.currentRole === "vendor" && vendorForm) {
      if (!vendorForm.businessName || !vendorForm.businessCategory || !vendorForm.businessPhone) {
        this.errorMessage = "Please fill in all required fields.";
        return;
      }
    }
    if (commonForm.password !== commonForm.confirmPassword) {
      this.errorMessage = "Passwords do not match.";
      return;
    }
    if (!commonForm.terms) {
      this.errorMessage = "You must agree to the Terms of Service.";
      return;
    }
    this.isLoading = true;
    this.authService.register({
      name: commonForm.name,
      email: commonForm.email,
      password: commonForm.password,
      role: this.currentRole,
      businessName: this.currentRole === "vendor" ? vendorForm?.businessName : void 0,
      businessCategory: this.currentRole === "vendor" ? vendorForm?.businessCategory : void 0,
      businessPhone: this.currentRole === "vendor" ? vendorForm?.businessPhone : void 0
    }).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.errorMessage = "";
        if (this.currentRole === "vendor") {
          alert("Vendor account created! Your shop is pending admin approval.");
        } else {
          alert("Account created successfully! Please log in.");
        }
        this.isLoginMode = true;
        this.resetForms();
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message || "Registration failed. Please try again.";
      }
    });
  }
  resetForms() {
    this.loginForm = { email: "", password: "" };
    this.registerForm = { name: "", email: "", password: "", confirmPassword: "", terms: false };
    this.vendorForm = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
      businessName: "",
      businessCategory: "",
      businessPhone: ""
    };
    this.showPassword = false;
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 9, consts: [[1, "auth-container"], [1, "background-animation"], [1, "blob", "blob-1"], [1, "blob", "blob-2"], [1, "blob", "blob-3"], [1, "auth-content"], [1, "auth-header"], [1, "logo"], [1, "auth-card"], [1, "role-selector"], ["type", "button", 1, "role-btn", 3, "click"], [1, "role-icon"], [1, "role-text"], [1, "form-container"], ["class", "mode-tabs", 4, "ngIf"], ["class", "auth-form", 3, "ngSubmit", 4, "ngIf"], [1, "auth-footer"], [1, "footer-links"], ["href", "#"], [1, "mode-tabs"], ["type", "button", 1, "mode-tab", 3, "click"], [1, "auth-form", 3, "ngSubmit"], [1, "form-header"], [1, "form-group"], [1, "form-label"], [1, "input-wrapper"], [1, "input-icon"], ["type", "email", "name", "email", "placeholder", "you@university.edu", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "password", "placeholder", "Enter your password", "required", "", 1, "form-input", 3, "ngModelChange", "type", "ngModel"], ["type", "button", "tabindex", "-1", 1, "toggle-password", 3, "click"], [1, "forgot-password"], ["href", "#", 1, "forgot-link"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["class", "error-message", 4, "ngIf"], [1, "form-footer"], ["type", "button", 1, "link-btn", 3, "click"], [1, "error-message"], ["type", "text", "name", "name", "placeholder", "Your full name", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "vendor-section", 4, "ngIf"], ["name", "password", "placeholder", "Create a strong password", "required", "", 1, "form-input", 3, "ngModelChange", "type", "ngModel"], ["name", "confirmPassword", "placeholder", "Confirm your password", "required", "", 1, "form-input", 3, "ngModelChange", "type", "ngModel"], [1, "checkbox-group"], ["type", "checkbox", "name", "terms", "required", "", 3, "ngModelChange", "ngModel"], [1, "vendor-section"], ["type", "text", "name", "businessName", "placeholder", "Your shop name", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "category", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "electronics"], ["value", "fashion"], ["value", "books"], ["value", "food"], ["value", "services"], ["value", "other"], ["type", "tel", "name", "businessPhone", "placeholder", "+233 XXX XXX XXX", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275text(8, "\u{1F393}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h1");
        \u0275\u0275text(10, "KTU Marketplace");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p");
        \u0275\u0275text(12, "Campus Commerce Simplified");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "button", 10);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_15_listener() {
          return ctx.switchRole("customer");
        });
        \u0275\u0275elementStart(16, "span", 11);
        \u0275\u0275text(17, "\u{1F464}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 12);
        \u0275\u0275text(19, "Student");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "button", 10);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_20_listener() {
          return ctx.switchRole("vendor");
        });
        \u0275\u0275elementStart(21, "span", 11);
        \u0275\u0275text(22, "\u{1F3EA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 12);
        \u0275\u0275text(24, "Seller");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "button", 10);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_25_listener() {
          return ctx.switchRole("admin");
        });
        \u0275\u0275elementStart(26, "span", 11);
        \u0275\u0275text(27, "\u2699\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 12);
        \u0275\u0275text(29, "Admin");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 13);
        \u0275\u0275template(31, LoginComponent_div_31_Template, 5, 4, "div", 14)(32, LoginComponent_form_32_Template, 33, 7, "form", 15)(33, LoginComponent_form_33_Template, 54, 14, "form", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 16)(35, "p");
        \u0275\u0275text(36, "\xA9 2026 KTU Marketplace");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 17)(38, "a", 18);
        \u0275\u0275text(39, "Privacy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "a", 18);
        \u0275\u0275text(41, "Terms");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "a", 18);
        \u0275\u0275text(43, "Contact");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275classProp("active", ctx.currentRole === "customer");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.currentRole === "vendor");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.currentRole === "admin");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.currentRole !== "admin");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoginMode);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoginMode);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, CheckboxRequiredValidator, NgModel, NgForm], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  background:\n    linear-gradient(\n      135deg,\n      #0f1419 0%,\n      #1a1f2e 100%);\n  min-height: 100vh;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    sans-serif;\n  color: #e0e0e0;\n  overflow: hidden;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.auth-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  overflow: hidden;\n}\n.background-animation[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  overflow: hidden;\n}\n.blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.3;\n  animation: _ngcontent-%COMP%_blobMove 8s infinite ease-in-out;\n}\n.blob-1[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background:\n    linear-gradient(\n      135deg,\n      #00d4ff 0%,\n      #0066ff 100%);\n  top: -50%;\n  left: -10%;\n  animation-duration: 8s;\n}\n.blob-2[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff00ff 0%,\n      #ff0066 100%);\n  bottom: -20%;\n  right: -5%;\n  animation-duration: 10s;\n  animation-delay: 2s;\n}\n.blob-3[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background:\n    linear-gradient(\n      135deg,\n      #00ff88 0%,\n      #00d4ff 100%);\n  bottom: 10%;\n  left: 10%;\n  animation-duration: 12s;\n  animation-delay: 4s;\n}\n@keyframes _ngcontent-%COMP%_blobMove {\n  0%, 100% {\n    transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(30px, -30px);\n  }\n  50% {\n    transform: translate(-30px, 30px);\n  }\n  75% {\n    transform: translate(30px, 30px);\n  }\n}\n.auth-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 480px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.logo[_ngcontent-%COMP%] {\n  font-size: 56px;\n  margin-bottom: 16px;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_floatUp 0.6s ease-out;\n}\n@keyframes _ngcontent-%COMP%_floatUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  margin: 0 0 8px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #00d4ff 0%,\n      #0066ff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: _ngcontent-%COMP%_floatUp 0.6s ease-out 0.1s backwards;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #888;\n  font-size: 14px;\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_floatUp 0.6s ease-out 0.2s backwards;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: rgba(20, 30, 48, 0.5);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  animation: _ngcontent-%COMP%_slideUp 0.6s ease-out 0.3s backwards;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.role-selector[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  padding: 16px;\n  background: rgba(0, 0, 0, 0.2);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.role-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 12px 10px;\n  background: transparent;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: #888;\n  font-size: 12px;\n  font-weight: 600;\n}\n.role-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(0, 212, 255, 0.3);\n  background: rgba(0, 212, 255, 0.05);\n  color: #00d4ff;\n}\n.role-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 212, 255, 0.15) 0%,\n      rgba(0, 102, 255, 0.15) 100%);\n  border-color: rgba(0, 212, 255, 0.5);\n  color: #00d4ff;\n  box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);\n}\n.role-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.form-container[_ngcontent-%COMP%] {\n  padding: 28px;\n}\n.mode-tabs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 24px;\n}\n.mode-tab[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  color: #888;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.mode-tab[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.2);\n  background: rgba(255, 255, 255, 0.08);\n}\n.mode-tab.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00d4ff 0%,\n      #0066ff 100%);\n  border-color: rgba(0, 212, 255, 0.5);\n  color: white;\n  box-shadow: 0 4px 16px rgba(0, 212, 255, 0.2);\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 8px;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 20px;\n  font-weight: 700;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #888;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  font-size: 16px;\n  pointer-events: none;\n}\n.form-input[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 12px 12px 40px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  color: #e0e0e0;\n  font-size: 14px;\n  transition: all 0.3s ease;\n  font-family: inherit;\n}\n.form-input[_ngcontent-%COMP%]:focus, \nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(0, 212, 255, 0.3);\n  box-shadow: 0 0 20px rgba(0, 212, 255, 0.1), inset 0 0 10px rgba(0, 212, 255, 0.05);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #555;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #1a1f2e;\n  color: #e0e0e0;\n}\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  padding: 4px 8px;\n  color: #888;\n  transition: color 0.3s ease;\n}\n.toggle-password[_ngcontent-%COMP%]:hover {\n  color: #00d4ff;\n}\n.forgot-password[_ngcontent-%COMP%] {\n  text-align: right;\n  margin: -8px 0 4px 0;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  color: #00d4ff;\n}\n.checkbox-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 12px;\n  color: #aaa;\n  cursor: pointer;\n  margin: 8px 0 4px 0;\n}\n.checkbox-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #00d4ff;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #00d4ff 0%,\n      #0066ff 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-top: 8px;\n  box-shadow: 0 6px 24px rgba(0, 212, 255, 0.2);\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.3);\n}\n.submit-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.error-message[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  background: rgba(255, 107, 107, 0.1);\n  border: 1px solid rgba(255, 107, 107, 0.3);\n  border-radius: 8px;\n  color: #ff9898;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  color: #888;\n  margin-top: 8px;\n}\n.link-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #00d4ff;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  font-size: 12px;\n  margin-left: 4px;\n  transition: color 0.3s ease;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  color: #00ff88;\n  text-decoration: underline;\n}\n.vendor-section[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  margin: 8px 0;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 11px;\n  color: #666;\n}\n.footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 8px;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00d4ff;\n}\n@media (max-width: 480px) {\n  .auth-content[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .mode-tabs[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n  .auth-form[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\components\\login\\login.component.ts", lineNumber: 832 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-EQSICHVN.js.map
