import {
  AuthService,
  CommonModule,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ZKHNJUVZ.js";

// src/app/components/admin-dashboard/admin-dashboard.component.ts
function AdminDashboardComponent_div_86_article_1_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_86_article_1_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const user_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.promoteToVendor(user_r4));
    });
    \u0275\u0275text(1, "Promote to vendor");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_86_article_1_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_86_article_1_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const user_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.promoteToCustomer(user_r4));
    });
    \u0275\u0275text(1, "Demote to customer");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_86_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 28)(1, "div")(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275template(9, AdminDashboardComponent_div_86_article_1_button_9_Template, 2, 0, "button", 32)(10, AdminDashboardComponent_div_86_article_1_button_10_Template, 2, 0, "button", 32);
    \u0275\u0275elementStart(11, "button", 33);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_86_article_1_Template_button_click_11_listener() {
      const user_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.deleteUser(user_r4));
    });
    \u0275\u0275text(12, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.email);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("role-badge ", user_r4.role, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r4.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", user_r4.role === "customer");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r4.role === "vendor");
  }
}
function AdminDashboardComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, AdminDashboardComponent_div_86_article_1_Template, 13, 8, "article", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.selectedUsers);
  }
}
function AdminDashboardComponent_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "h3");
    \u0275\u0275text(2, "No accounts found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 36);
    \u0275\u0275text(4, "Switch tabs or add users through registration to populate the marketplace.");
    \u0275\u0275elementEnd()();
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.selectedTab = "vendors";
    this.allUsers = this.authService.getAllUsers();
    this.vendorList = this.allUsers.filter((user) => user.role === "vendor");
    this.customerList = this.allUsers.filter((user) => user.role === "customer");
  }
  get selectedUsers() {
    if (this.selectedTab === "vendors") {
      return this.vendorList;
    }
    if (this.selectedTab === "customers") {
      return this.customerList;
    }
    return this.allUsers;
  }
  setTab(tab) {
    this.selectedTab = tab;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  refreshUsers() {
    this.allUsers = this.authService.getAllUsers();
    this.vendorList = this.allUsers.filter((user) => user.role === "vendor");
    this.customerList = this.allUsers.filter((user) => user.role === "customer");
  }
  promoteToVendor(user) {
    this.authService.updateUserRole(user.email, "vendor");
    this.refreshUsers();
  }
  promoteToCustomer(user) {
    this.authService.updateUserRole(user.email, "customer");
    this.refreshUsers();
  }
  deleteUser(user) {
    this.authService.deleteUser(user.email);
    this.refreshUsers();
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 89, vars: 19, consts: [["emptyState", ""], [1, "admin-shell"], [1, "admin-topbar"], [1, "eyebrow"], [1, "lead"], [1, "topbar-actions"], ["routerLink", "/", 1, "btn", "btn-ghost"], [1, "btn", "btn-secondary", 3, "click"], [1, "summary-grid"], [1, "summary-card", "blue"], [1, "summary-label"], [1, "summary-card", "violet"], [1, "summary-card", "green"], [1, "admin-filter-bar"], [1, "tabs"], [1, "tab", 3, "click"], [1, "status-pill"], [1, "admin-grid"], [1, "admin-sidebar"], [1, "panel", "glass-panel"], [1, "metric-row"], [1, "admin-main"], [1, "panel", "glass-panel", "panel-main"], [1, "panel-header"], [1, "badge"], ["class", "user-list", 4, "ngIf", "ngIfElse"], [1, "user-list"], ["class", "user-card", 4, "ngFor", "ngForOf"], [1, "user-card"], [1, "user-title"], [1, "user-email"], [1, "user-actions"], ["class", "btn btn-sm btn-outline", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "btn", "btn-sm", "btn-outline", 3, "click"], [1, "empty-state"], [1, "text-muted"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div")(3, "p", 3);
        \u0275\u0275text(4, "Admin control center");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Manage users & marketplace health");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Oversee vendor and customer access, approve trusted sellers, and keep the UniMart ecosystem clean.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "a", 6);
        \u0275\u0275text(11, "Marketplace");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 7);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.logout());
        });
        \u0275\u0275text(13, "Logout");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "section", 8)(15, "article", 9)(16, "span", 10);
        \u0275\u0275text(17, "Total users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "h2");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p");
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "article", 11)(23, "span", 10);
        \u0275\u0275text(24, "Vendor pool");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h2");
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p");
        \u0275\u0275text(28, "Review active sellers and pending storefronts.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "article", 12)(30, "span", 10);
        \u0275\u0275text(31, "Customer base");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "h2");
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "p");
        \u0275\u0275text(35, "Monitor shopper growth and trust signals.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 13)(37, "div", 14)(38, "button", 15);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setTab("vendors"));
        });
        \u0275\u0275text(39, "Vendors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 15);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_40_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setTab("customers"));
        });
        \u0275\u0275text(41, "Customers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 15);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_42_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setTab("all"));
        });
        \u0275\u0275text(43, "All users");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 16);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "section", 17)(47, "aside", 18)(48, "div", 19)(49, "h3");
        \u0275\u0275text(50, "Quick actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "ul")(52, "li");
        \u0275\u0275text(53, "Remove inactive accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "li");
        \u0275\u0275text(55, "Promote trusted customers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "li");
        \u0275\u0275text(57, "Keep marketplace safe");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "div", 19)(59, "h3");
        \u0275\u0275text(60, "Marketplace stats");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 20)(62, "span");
        \u0275\u0275text(63, "Vendors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "strong");
        \u0275\u0275text(65);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 20)(67, "span");
        \u0275\u0275text(68, "Customers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "strong");
        \u0275\u0275text(70);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 20)(72, "span");
        \u0275\u0275text(73, "Accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "strong");
        \u0275\u0275text(75);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(76, "main", 21)(77, "div", 22)(78, "div", 23)(79, "div")(80, "p", 3);
        \u0275\u0275text(81, "Account management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "h2");
        \u0275\u0275text(83);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "span", 24);
        \u0275\u0275text(85);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(86, AdminDashboardComponent_div_86_Template, 2, 1, "div", 25)(87, AdminDashboardComponent_ng_template_87_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const emptyState_r7 = \u0275\u0275reference(88);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.allUsers.length);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.vendorList.length, " vendors \xB7 ", ctx.customerList.length, " customers");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.vendorList.length);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.customerList.length);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.selectedTab === "vendors");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedTab === "customers");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedTab === "all");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Showing ", ctx.selectedTab === "all" ? ctx.allUsers.length : ctx.selectedTab === "vendors" ? ctx.vendorList.length : ctx.customerList.length, " accounts");
        \u0275\u0275advance(20);
        \u0275\u0275textInterpolate(ctx.vendorList.length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.customerList.length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.allUsers.length);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.selectedTab === "vendors" ? "Vendor accounts" : ctx.selectedTab === "customers" ? "Customer accounts" : "All users");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.selectedTab === "all" ? ctx.allUsers.length : ctx.selectedTab === "vendors" ? ctx.vendorList.length : ctx.customerList.length, " accounts");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedUsers.length)("ngIfElse", emptyState_r7);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(59, 130, 246, 0.18),\n      transparent 18%),\n    linear-gradient(\n      180deg,\n      #020617 0%,\n      #111827 100%);\n  color: #e2e8f0;\n}\n.admin-shell[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 3rem 1.5rem;\n}\n.admin-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1.5rem;\n  padding: 2rem;\n  border-radius: 2rem;\n  background: rgba(15, 23, 42, 0.9);\n  border: 1px solid rgba(148, 163, 184, 0.12);\n  box-shadow: 0 30px 90px rgba(15, 23, 42, 0.35);\n}\n.eyebrow[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.22em;\n  color: #60a5fa;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n}\n.admin-topbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.4rem, 3vw, 3.4rem);\n  margin: 0 0 0.85rem;\n}\n.lead[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  max-width: 720px;\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: #e2e8f0;\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  padding: 0.95rem 1.75rem;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n  padding: 0.95rem 1.75rem;\n  border: none;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n  margin: 2rem 0;\n}\n.summary-card[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n  border-radius: 1.75rem;\n  background: rgba(15, 23, 42, 0.92);\n  border: 1px solid rgba(148, 163, 184, 0.12);\n}\n.summary-card.blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.2),\n      rgba(30, 64, 175, 0.15));\n}\n.summary-card.violet[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(196, 181, 253, 0.2),\n      rgba(109, 40, 217, 0.14));\n}\n.summary-card.green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(52, 211, 153, 0.2),\n      rgba(16, 185, 129, 0.14));\n}\n.summary-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  font-size: 0.8rem;\n  color: #93c5fd;\n  margin-bottom: 0.85rem;\n  display: inline-block;\n}\n.summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin: 0 0 0.5rem;\n}\n.admin-filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(255, 255, 255, 0.06);\n  color: #e2e8f0;\n  padding: 0.95rem 1.4rem;\n  border-radius: 999px;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.status-pill[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 0.85rem 1rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  color: #cbd5e1;\n}\n.admin-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 320px minmax(0, 1fr);\n  gap: 1.5rem;\n}\n.admin-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.panel[_ngcontent-%COMP%] {\n  border-radius: 1.8rem;\n  border: 1px solid rgba(148, 163, 184, 0.12);\n  background: rgba(15, 23, 42, 0.92);\n  padding: 1.5rem;\n  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.18);\n}\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n.panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.15rem;\n  color: #cbd5e1;\n}\n.panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.metric-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.85rem;\n  color: #cbd5e1;\n}\n.metric-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.admin-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.panel-main[_ngcontent-%COMP%] {\n  min-height: 420px;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.75rem 1rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  color: #e2e8f0;\n  font-size: 0.95rem;\n}\n.user-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.user-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  border-radius: 1.5rem;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(148, 163, 184, 0.08);\n}\n.user-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n}\n.user-email[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: #94a3b8;\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 0.9rem;\n  border-radius: 999px;\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  letter-spacing: 0.12em;\n  margin-top: 0.75rem;\n}\n.role-badge.vendor[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.18);\n  color: #bfdbfe;\n}\n.role-badge.customer[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.18);\n  color: #bbf7d0;\n}\n.role-badge.admin[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.18);\n  color: #e9d5ff;\n}\n.user-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.24);\n  background: rgba(255, 255, 255, 0.06);\n  color: #e2e8f0;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  border: none;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: #cbd5e1;\n  border-radius: 1.5rem;\n  border: 1px dashed rgba(148, 163, 184, 0.18);\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 991.98px) {\n  .summary-grid[_ngcontent-%COMP%], \n   .admin-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src\\app\\components\\admin-dashboard\\admin-dashboard.component.ts", lineNumber: 355 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-VXAFW4SE.js.map
