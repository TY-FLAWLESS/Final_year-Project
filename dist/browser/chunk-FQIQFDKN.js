import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VV65OK7X.js";
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
  ɵɵclassMapInterpolate1,
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
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RLCOLIVI.js";

// src/app/components/admin-dashboard/admin-dashboard.component.ts
function AdminDashboardComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_86_div_9_article_10_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vendor_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Business: ", vendor_r4.businessName, "");
  }
}
function AdminDashboardComponent_div_86_div_9_article_10_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vendor_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Category: ", vendor_r4.businessCategory, "");
  }
}
function AdminDashboardComponent_div_86_div_9_article_10_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vendor_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Phone: ", vendor_r4.businessPhone, "");
  }
}
function AdminDashboardComponent_div_86_div_9_article_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 47)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminDashboardComponent_div_86_div_9_article_10_p_6_Template, 2, 1, "p", 34)(7, AdminDashboardComponent_div_86_div_9_article_10_p_7_Template, 2, 1, "p", 34)(8, AdminDashboardComponent_div_86_div_9_article_10_p_8_Template, 2, 1, "p", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 48)(10, "button", 49);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_86_div_9_article_10_Template_button_click_10_listener() {
      const vendor_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approveVendor(vendor_r4));
    });
    \u0275\u0275text(11, "Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 50);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_86_div_9_article_10_Template_button_click_12_listener() {
      const vendor_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.rejectVendor(vendor_r4));
    });
    \u0275\u0275text(13, "Reject");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vendor_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vendor_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vendor_r4.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vendor_r4.businessName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vendor_r4.businessCategory);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vendor_r4.businessPhone);
  }
}
function AdminDashboardComponent_div_86_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "div")(3, "p", 38);
    \u0275\u0275text(4, "Vendor requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Pending approvals");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 45);
    \u0275\u0275template(10, AdminDashboardComponent_div_86_div_9_article_10_Template, 14, 5, "article", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.pendingVendors.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pendingVendors);
  }
}
function AdminDashboardComponent_div_86_div_10_article_1_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_86_div_10_article_1_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const user_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.promoteToVendor(user_r6));
    });
    \u0275\u0275text(1, "Promote to vendor");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_86_div_10_article_1_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_86_div_10_article_1_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const user_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.promoteToCustomer(user_r6));
    });
    \u0275\u0275text(1, "Demote to customer");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_86_div_10_article_1_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_86_div_10_article_1_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const user_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.promoteToAdmin(user_r6));
    });
    \u0275\u0275text(1, "Promote to admin");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_86_div_10_article_1_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_86_div_10_article_1_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const user_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.demoteToCustomer(user_r6));
    });
    \u0275\u0275text(1, "Demote to customer");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_86_div_10_article_1_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_86_div_10_article_1_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const user_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.unbanUser(user_r6));
    });
    \u0275\u0275text(1, "Unban user");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_86_div_10_article_1_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_86_div_10_article_1_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const user_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.banUser(user_r6));
    });
    \u0275\u0275text(1, "Ban user");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_86_div_10_article_1_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_86_div_10_article_1_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const user_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteUser(user_r6));
    });
    \u0275\u0275text(1, "Remove user");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_86_div_10_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 53)(1, "div", 54)(2, "div", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56)(5, "div", 57)(6, "div", 58);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 59);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 60)(13, "span", 61);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 62);
    \u0275\u0275template(16, AdminDashboardComponent_div_86_div_10_article_1_button_16_Template, 2, 0, "button", 63)(17, AdminDashboardComponent_div_86_div_10_article_1_button_17_Template, 2, 0, "button", 63)(18, AdminDashboardComponent_div_86_div_10_article_1_button_18_Template, 2, 0, "button", 63)(19, AdminDashboardComponent_div_86_div_10_article_1_button_19_Template, 2, 0, "button", 63)(20, AdminDashboardComponent_div_86_div_10_article_1_button_20_Template, 2, 0, "button", 63)(21, AdminDashboardComponent_div_86_div_10_article_1_button_21_Template, 2, 0, "button", 63)(22, AdminDashboardComponent_div_86_div_10_article_1_button_22_Template, 2, 0, "button", 64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r6.name.charAt(0).toUpperCase());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r6.name);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("role-badge ", user_r6.role, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r6.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("banned", user_r6.isBanned)("pending", user_r6.role === "vendor" && !user_r6.isActive && !user_r6.isBanned)("active", !user_r6.isBanned && user_r6.isActive !== false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r6.isBanned ? "Banned" : user_r6.role === "vendor" && !user_r6.isActive ? "Pending approval" : "Active", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canManageUser(user_r6) && user_r6.role !== "admin" && user_r6.role !== "vendor");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canManageUser(user_r6) && user_r6.role === "vendor");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canManageUser(user_r6) && user_r6.role !== "admin");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canManageUser(user_r6) && user_r6.role === "admin");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canManageUser(user_r6) && user_r6.isBanned);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canManageUser(user_r6) && !user_r6.isBanned);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canManageUser(user_r6));
  }
}
function AdminDashboardComponent_div_86_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, AdminDashboardComponent_div_86_div_10_article_1_Template, 23, 21, "article", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredUsers);
  }
}
function AdminDashboardComponent_div_86_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "h3");
    \u0275\u0275text(2, "No accounts found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 68);
    \u0275\u0275text(4, "Switch tabs or add users through registration to populate the marketplace.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 37)(2, "div")(3, "p", 38);
    \u0275\u0275text(4, "Account management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, AdminDashboardComponent_div_86_div_9_Template, 11, 2, "div", 40)(10, AdminDashboardComponent_div_86_div_10_Template, 2, 1, "div", 41)(11, AdminDashboardComponent_div_86_ng_template_11_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emptyState_r13 = \u0275\u0275reference(12);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedTab === "vendors" ? "Vendor accounts" : ctx_r1.selectedTab === "customers" ? "Customer accounts" : ctx_r1.selectedTab === "admins" ? "Admin accounts" : "All users");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.filteredUsers.length, " accounts");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pendingVendors.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredUsers.length)("ngIfElse", emptyState_r13);
  }
}
function AdminDashboardComponent_div_87_div_7_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 53)(1, "div", 54)(2, "div", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 59);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 70);
    \u0275\u0275text(10, "vendor");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 62)(12, "button", 65);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_87_div_7_article_1_Template_button_click_12_listener() {
      const user_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.promoteToCustomer(user_r15));
    });
    \u0275\u0275text(13, "Demote to customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 66);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_87_div_7_article_1_Template_button_click_14_listener() {
      const user_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteUser(user_r15));
    });
    \u0275\u0275text(15, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r15 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r15.name.charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r15.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r15.email);
  }
}
function AdminDashboardComponent_div_87_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, AdminDashboardComponent_div_87_div_7_article_1_Template, 16, 3, "article", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.vendorList);
  }
}
function AdminDashboardComponent_div_87_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "h3");
    \u0275\u0275text(2, "No approved vendors yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 68);
    \u0275\u0275text(4, "Approve requests from the vendor list to populate this section.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 37)(2, "div")(3, "p", 38);
    \u0275\u0275text(4, "Trusted sellers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Approved vendors");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, AdminDashboardComponent_div_87_div_7_Template, 2, 1, "div", 41)(8, AdminDashboardComponent_div_87_ng_template_8_Template, 5, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noApprovedVendors_r16 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.vendorList.length)("ngIfElse", noApprovedVendors_r16);
  }
}
function AdminDashboardComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 37)(2, "div")(3, "p", 38);
    \u0275\u0275text(4, "Performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Marketplace analytics");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 71)(8, "div", 72)(9, "span");
    \u0275\u0275text(10, "Approved vendors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 72)(14, "span");
    \u0275\u0275text(15, "Customer accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 72)(19, "span");
    \u0275\u0275text(20, "Pending review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 72)(24, "span");
    \u0275\u0275text(25, "Security flags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 73);
    \u0275\u0275element(29, "div", 74)(30, "div", 75)(31, "div", 76)(32, "div", 77)(33, "div", 78);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.vendorList.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerList.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.pendingVendors.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.bannedUsers.length);
  }
}
function AdminDashboardComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 37)(2, "div")(3, "p", 38);
    \u0275\u0275text(4, "Protection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Security overview");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 79)(8, "div", 80)(9, "span");
    \u0275\u0275text(10, "Banned users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 80)(14, "span");
    \u0275\u0275text(15, "Vendor approvals pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 80)(19, "span");
    \u0275\u0275text(20, "Protected admin accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 80)(24, "span");
    \u0275\u0275text(25, "Marketplace status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27, "Secure");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.bannedUsers.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.pendingVendors.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.adminList.length);
  }
}
function AdminDashboardComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 37)(2, "div")(3, "p", 38);
    \u0275\u0275text(4, "Recent activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Audit log");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 81)(8, "div", 82)(9, "span", 83);
    \u0275\u0275text(10, "Today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 82)(14, "span", 83);
    \u0275\u0275text(15, "Today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 82)(19, "span", 83);
    \u0275\u0275text(20, "Today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate2("System review completed for ", ctx_r1.vendorList.length, " vendors and ", ctx_r1.customerList.length, " customers.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.pendingVendors.length, " vendor requests are awaiting admin action.");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.bannedUsers.length, " users are currently restricted from access.");
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.selectedTab = "vendors";
    this.selectedSection = "overview";
    this.isSidebarOpen = false;
    this.searchTerm = "";
    this.allUsers = this.authService.getAllUsers();
    this.vendorList = this.allUsers.filter((user) => user.role === "vendor");
    this.customerList = this.allUsers.filter((user) => user.role === "customer");
    this.adminList = this.allUsers.filter((user) => user.role === "admin");
    this.pendingVendors = this.authService.getPendingVendors();
    this.bannedUsers = this.allUsers.filter((user) => user.isBanned);
  }
  get filteredUsers() {
    const source = this.selectedTab === "vendors" ? this.vendorList : this.selectedTab === "customers" ? this.customerList : this.selectedTab === "admins" ? this.adminList : this.allUsers;
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return source;
    }
    return source.filter((user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term) || user.role.toLowerCase().includes(term));
  }
  get selectedUsers() {
    return this.filteredUsers;
  }
  setTab(tab) {
    this.selectedTab = tab;
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  closeSidebar() {
    this.isSidebarOpen = false;
  }
  selectSection(section) {
    this.selectedSection = section;
    this.closeSidebar();
  }
  setSection(section) {
    this.selectSection(section);
  }
  logout() {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(["/login"]),
      error: () => this.router.navigate(["/login"])
    });
  }
  refreshUsers() {
    this.allUsers = this.authService.getAllUsers();
    this.vendorList = this.allUsers.filter((user) => user.role === "vendor");
    this.customerList = this.allUsers.filter((user) => user.role === "customer");
    this.adminList = this.allUsers.filter((user) => user.role === "admin");
    this.pendingVendors = this.authService.getPendingVendors();
    this.bannedUsers = this.allUsers.filter((user) => user.isBanned);
  }
  canManageUser(user) {
    const currentUser = this.authService.getCurrentUser();
    return !!currentUser && currentUser.email.toLowerCase() !== user.email.toLowerCase();
  }
  promoteToVendor(user) {
    this.authService.updateUserRole(user.email, "vendor");
    this.refreshUsers();
  }
  promoteToCustomer(user) {
    this.authService.updateUserRole(user.email, "customer");
    this.refreshUsers();
  }
  promoteToAdmin(user) {
    this.authService.updateUserRole(user.email, "admin");
    this.refreshUsers();
  }
  demoteToCustomer(user) {
    this.authService.updateUserRole(user.email, "customer");
    this.refreshUsers();
  }
  banUser(user) {
    this.authService.banUser(user.email);
    this.refreshUsers();
  }
  unbanUser(user) {
    this.authService.unbanUser(user.email);
    this.refreshUsers();
  }
  approveVendor(user) {
    this.authService.approveVendor(user.email);
    this.refreshUsers();
  }
  rejectVendor(user) {
    this.authService.rejectVendor(user.email);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 91, vars: 33, consts: [["emptyState", ""], ["noApprovedVendors", ""], [1, "admin-shell"], [1, "admin-topbar"], [1, "brand-group"], ["type", "button", "aria-label", "Toggle sidebar", 1, "mobile-sidebar-toggle", 3, "click"], [1, "brand-mark"], [1, "eyebrow"], [1, "topbar-actions"], ["routerLink", "/", 1, "btn", "btn-ghost"], [1, "btn", "btn-secondary", 3, "click"], ["class", "sidebar-backdrop", 3, "click", 4, "ngIf"], [1, "summary-grid"], [1, "summary-card", "blue"], [1, "summary-top"], [1, "summary-icon"], [1, "summary-label"], [1, "summary-card", "violet"], [1, "summary-card", "green"], [1, "admin-filter-bar"], [1, "tabs"], [1, "tab", 3, "click"], [1, "search-box"], ["type", "text", "placeholder", "Search users...", 3, "ngModelChange", "ngModel"], [1, "status-pill"], [1, "admin-grid"], [1, "admin-sidebar"], [1, "panel", "sidebar-panel"], [1, "sidebar-header-row"], ["type", "button", "aria-label", "Close sidebar", 1, "sidebar-close", 3, "click"], [1, "sidebar-nav"], ["type", "button", 1, "nav-btn", 3, "click"], [1, "admin-main"], [1, "panel", "glass-panel", "panel-main"], [4, "ngIf"], ["class", "section-content", 4, "ngIf"], [1, "sidebar-backdrop", 3, "click"], [1, "panel-header"], [1, "eyebrow", "small"], [1, "badge"], ["class", "request-panel panel", 4, "ngIf"], ["class", "user-list", 4, "ngIf", "ngIfElse"], [1, "request-panel", "panel"], [1, "request-header"], [1, "request-count"], [1, "request-list"], ["class", "request-item", 4, "ngFor", "ngForOf"], [1, "request-item"], [1, "request-actions"], ["type", "button", 1, "mini-btn", "approve", 3, "click"], ["type", "button", 1, "mini-btn", "reject", 3, "click"], [1, "user-list"], ["class", "user-card", 4, "ngFor", "ngForOf"], [1, "user-card"], [1, "user-meta"], [1, "user-avatar"], [1, "user-info"], [1, "user-title-row"], [1, "user-title"], [1, "user-email"], [1, "status-line"], [1, "mini-status"], [1, "user-actions"], ["class", "btn btn-sm btn-outline", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "empty-state"], [1, "text-muted"], [1, "section-content"], [1, "role-badge", "vendor"], [1, "stats-grid"], [1, "stat-box"], [1, "mini-chart"], [1, "chart-bar", 2, "height", "45%"], [1, "chart-bar", 2, "height", "68%"], [1, "chart-bar", 2, "height", "80%"], [1, "chart-bar", 2, "height", "62%"], [1, "chart-bar", 2, "height", "92%"], [1, "security-list"], [1, "security-item"], [1, "audit-list"], [1, "audit-item"], [1, "audit-time"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "header", 3)(2, "div", 4)(3, "button", 5);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_3_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275text(4, " \u2630 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 6);
        \u0275\u0275text(6, "KTU");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div")(8, "p", 7);
        \u0275\u0275text(9, "Admin portal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h1");
        \u0275\u0275text(11, "Marketplace control center");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "a", 9);
        \u0275\u0275text(14, "Marketplace");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 10);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_15_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(16, "Logout");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(17, AdminDashboardComponent_div_17_Template, 1, 0, "div", 11);
        \u0275\u0275elementStart(18, "section", 12)(19, "article", 13)(20, "div", 14)(21, "span", 15);
        \u0275\u0275text(22, "\u{1F465}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 16);
        \u0275\u0275text(24, "Total users");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "h2");
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p");
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "article", 17)(30, "div", 14)(31, "span", 15);
        \u0275\u0275text(32, "\u{1F3EA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 16);
        \u0275\u0275text(34, "Vendor pool");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "h2");
        \u0275\u0275text(36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "p");
        \u0275\u0275text(38, "Storefronts and approved sellers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "article", 18)(40, "div", 14)(41, "span", 15);
        \u0275\u0275text(42, "\u{1F6D2}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 16);
        \u0275\u0275text(44, "Customer base");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "h2");
        \u0275\u0275text(46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "p");
        \u0275\u0275text(48, "Active shoppers and campus buyers");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 19)(50, "div", 20)(51, "button", 21);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_51_listener() {
          return ctx.setTab("vendors");
        });
        \u0275\u0275text(52, "Vendors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "button", 21);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_53_listener() {
          return ctx.setTab("customers");
        });
        \u0275\u0275text(54, "Customers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "button", 21);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_55_listener() {
          return ctx.setTab("admins");
        });
        \u0275\u0275text(56, "Admins");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "button", 21);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_57_listener() {
          return ctx.setTab("all");
        });
        \u0275\u0275text(58, "All users");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 22)(60, "span");
        \u0275\u0275text(61, "\u{1F50E}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "input", 23);
        \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_62_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 24);
        \u0275\u0275text(64);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "section", 25)(66, "aside", 26)(67, "div", 27)(68, "div", 28)(69, "h3");
        \u0275\u0275text(70, "Navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "button", 29);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_71_listener() {
          return ctx.closeSidebar();
        });
        \u0275\u0275text(72, "\u2715");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "nav", 30)(74, "button", 31);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_74_listener() {
          return ctx.selectSection("overview");
        });
        \u0275\u0275text(75, "Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "button", 31);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_76_listener() {
          return ctx.selectSection("approved-vendors");
        });
        \u0275\u0275text(77, "Approved vendors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "button", 31);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_78_listener() {
          return ctx.selectSection("analytics");
        });
        \u0275\u0275text(79, "Analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "button", 31);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_80_listener() {
          return ctx.selectSection("security");
        });
        \u0275\u0275text(81, "Security");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "button", 31);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_82_listener() {
          return ctx.selectSection("audit");
        });
        \u0275\u0275text(83, "Audit log");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(84, "main", 32)(85, "div", 33);
        \u0275\u0275template(86, AdminDashboardComponent_div_86_Template, 13, 5, "div", 34)(87, AdminDashboardComponent_div_87_Template, 10, 2, "div", 35)(88, AdminDashboardComponent_div_88_Template, 34, 4, "div", 35)(89, AdminDashboardComponent_div_89_Template, 28, 3, "div", 35)(90, AdminDashboardComponent_div_90_Template, 23, 4, "div", 35);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275property("ngIf", ctx.isSidebarOpen);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.allUsers.length);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.vendorList.length, " vendors \xB7 ", ctx.customerList.length, " customers");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.vendorList.length);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.customerList.length);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.selectedTab === "vendors");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedTab === "customers");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedTab === "admins");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedTab === "all");
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Showing ", ctx.filteredUsers.length, " accounts");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("open", ctx.isSidebarOpen);
        \u0275\u0275advance(8);
        \u0275\u0275classProp("active", ctx.selectedSection === "overview");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedSection === "approved-vendors");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedSection === "analytics");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedSection === "security");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.selectedSection === "audit");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.selectedSection === "overview");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedSection === "approved-vendors");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedSection === "analytics");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedSection === "security");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedSection === "audit");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(59, 130, 246, 0.18),\n      transparent 18%),\n    linear-gradient(\n      180deg,\n      #020617 0%,\n      #111827 100%);\n  color: #e2e8f0;\n}\n.admin-shell[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 3rem 1.5rem 4rem;\n}\n.admin-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  padding: 1.6rem 1.8rem;\n  border-radius: 1.8rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.96) 0%,\n      rgba(17, 24, 39, 0.92) 100%);\n  border: 1px solid rgba(148, 163, 184, 0.12);\n  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.4);\n}\n.brand-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #38bdf8,\n      #2563eb);\n  color: white;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  box-shadow: 0 12px 28px rgba(37, 99, 235, 0.4);\n}\n.eyebrow[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  color: #7dd3fc;\n  font-size: 0.74rem;\n  font-weight: 800;\n  margin: 0 0 0.45rem;\n}\n.eyebrow.small[_ngcontent-%COMP%] {\n  letter-spacing: 0.12em;\n  font-size: 0.68rem;\n}\n.admin-topbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2rem, 3vw, 2.8rem);\n  line-height: 1.1;\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  color: #e2e8f0;\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  padding: 0.9rem 1.5rem;\n  text-decoration: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  color: white;\n  padding: 0.9rem 1.4rem;\n  box-shadow: 0 12px 22px rgba(37, 99, 235, 0.25);\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.8rem;\n  margin: 1.5rem 0;\n}\n.summary-card[_ngcontent-%COMP%] {\n  padding: 1rem 1rem 0.9rem;\n  border-radius: 1.2rem;\n  background: rgba(15, 23, 42, 0.92);\n  border: 1px solid rgba(148, 163, 184, 0.1);\n  box-shadow: 0 14px 28px rgba(2, 6, 23, 0.3);\n  text-align: center;\n  min-height: 140px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.summary-card.blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.22),\n      rgba(30, 64, 175, 0.18));\n}\n.summary-card.violet[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 85, 247, 0.18),\n      rgba(76, 29, 149, 0.16));\n}\n.summary-card.green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.18),\n      rgba(4, 120, 87, 0.13));\n}\n.summary-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-bottom: 0.6rem;\n}\n.summary-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.08);\n  font-size: 1rem;\n}\n.summary-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  font-size: 0.68rem;\n  color: #dbeafe;\n}\n.summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 2.1vw, 2.2rem);\n  margin: 0 0 0.25rem;\n  line-height: 1.1;\n}\n.summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #dbeafe;\n  font-size: 0.82rem;\n  line-height: 1.4;\n}\n.admin-filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.5rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.tab[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  background: rgba(255, 255, 255, 0.04);\n  color: #e2e8f0;\n  padding: 0.9rem 1.2rem;\n  border-radius: 999px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  border-color: transparent;\n  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);\n}\n.status-pill[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 0.8rem 1rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(148, 163, 184, 0.14);\n  color: #dbeafe;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  min-width: 220px;\n  padding: 0.75rem 0.9rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(148, 163, 184, 0.12);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: transparent;\n  border: none;\n  color: #e2e8f0;\n  outline: none;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.admin-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 320px minmax(0, 1fr);\n  gap: 1.25rem;\n}\n.sidebar-backdrop[_ngcontent-%COMP%] {\n  display: none;\n}\n.admin-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.sidebar-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.9rem;\n  align-items: stretch;\n}\n.metric-panel[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n.sidebar-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.sidebar-close[_ngcontent-%COMP%] {\n  display: none;\n}\n.mobile-sidebar-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n.panel[_ngcontent-%COMP%] {\n  border-radius: 1.6rem;\n  border: 1px solid rgba(148, 163, 184, 0.12);\n  background: rgba(15, 23, 42, 0.92);\n  padding: 1.4rem;\n  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.2);\n}\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n.sidebar-panel[_ngcontent-%COMP%] {\n  padding-top: 1.2rem;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.12);\n  background: rgba(255, 255, 255, 0.04);\n  color: #e2e8f0;\n  padding: 0.8rem 0.9rem;\n  text-align: left;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.nav-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.18),\n      rgba(37, 99, 235, 0.14));\n  border-color: rgba(96, 165, 250, 0.5);\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n}\n.quick-action-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  padding: 0.8rem 0.9rem;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.12);\n  background: rgba(255, 255, 255, 0.04);\n  color: #e2e8f0;\n  font-weight: 600;\n  cursor: pointer;\n}\n.quick-action-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(59, 130, 246, 0.12);\n  border-color: rgba(96, 165, 250, 0.4);\n}\n.metric-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.9rem;\n  padding-bottom: 0.9rem;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.08);\n  color: #cbd5e1;\n}\n.metric-row[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.metric-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.admin-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.panel-main[_ngcontent-%COMP%] {\n  min-height: 420px;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.7rem 0.9rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(148, 163, 184, 0.12);\n  color: #e2e8f0;\n  font-size: 0.86rem;\n}\n.user-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.9rem;\n}\n.user-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.1rem;\n  border-radius: 1.2rem;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(148, 163, 184, 0.08);\n}\n.user-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  flex: 1;\n  min-width: 0;\n}\n.user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.user-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.8rem;\n  flex-wrap: wrap;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 15px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #38bdf8,\n      #2563eb);\n  color: white;\n  font-weight: 700;\n}\n.user-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n}\n.user-email[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  color: #94a3b8;\n  font-size: 0.92rem;\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.45rem 0.8rem;\n  border-radius: 999px;\n  text-transform: uppercase;\n  font-size: 0.68rem;\n  letter-spacing: 0.1em;\n  margin-top: 0.7rem;\n}\n.status-line[_ngcontent-%COMP%] {\n  margin-top: 0.6rem;\n}\n.mini-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.35rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  background: rgba(34, 197, 94, 0.12);\n  color: #bbf7d0;\n}\n.mini-status.pending[_ngcontent-%COMP%] {\n  background: rgba(250, 204, 21, 0.12);\n  color: #fde68a;\n}\n.mini-status.banned[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #fecaca;\n}\n.role-badge.vendor[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.18);\n  color: #bfdbfe;\n}\n.role-badge.customer[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.18);\n  color: #bbf7d0;\n}\n.role-badge.admin[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.18);\n  color: #e9d5ff;\n}\n.user-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.7rem 0.9rem;\n  font-size: 0.8rem;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgba(255, 255, 255, 0.05);\n  color: #e2e8f0;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n}\n.section-content[_ngcontent-%COMP%] {\n  display: block;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.stat-box[_ngcontent-%COMP%], \n.security-item[_ngcontent-%COMP%], \n.audit-item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(148, 163, 184, 0.08);\n  border-radius: 1rem;\n  padding: 1rem;\n}\n.stat-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.stat-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.security-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.stat-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.security-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.mini-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 1rem;\n  height: 180px;\n  margin-top: 1.5rem;\n  padding: 1rem;\n  border-radius: 1rem;\n  background: rgba(255, 255, 255, 0.03);\n}\n.chart-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 0.75rem 0.75rem 0 0;\n  background:\n    linear-gradient(\n      180deg,\n      #38bdf8 0%,\n      #2563eb 100%);\n}\n.security-list[_ngcontent-%COMP%], \n.audit-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.9rem;\n  margin-top: 1rem;\n}\n.security-item[_ngcontent-%COMP%], \n.audit-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.audit-item[_ngcontent-%COMP%] {\n  display: block;\n}\n.audit-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.45rem 0 0;\n  color: #cbd5e1;\n}\n.audit-time[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #7dd3fc;\n}\n.request-panel[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n.request-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.9rem;\n}\n.request-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(59, 130, 246, 0.2);\n  color: #bfdbfe;\n  font-size: 0.75rem;\n  font-weight: 800;\n}\n.request-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n.request-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.8rem;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(148, 163, 184, 0.08);\n  border-radius: 12px;\n  padding: 0.75rem 0.8rem;\n}\n.request-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.2rem;\n}\n.request-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #94a3b8;\n  font-size: 0.8rem;\n}\n.request-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.mini-btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 8px;\n  padding: 0.42rem 0.58rem;\n  font-size: 0.7rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.mini-btn.approve[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #bbf7d0;\n}\n.mini-btn.reject[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #fecaca;\n}\n.empty-small[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  margin: 0;\n  font-size: 0.9rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: #cbd5e1;\n  border-radius: 1.5rem;\n  border: 1px dashed rgba(148, 163, 184, 0.18);\n  background: rgba(255, 255, 255, 0.03);\n}\n@media (max-width: 991.98px) {\n  .summary-grid[_ngcontent-%COMP%], \n   .admin-grid[_ngcontent-%COMP%], \n   .sidebar-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  .admin-shell[_ngcontent-%COMP%] {\n    padding-inline: 1rem;\n  }\n  .mobile-sidebar-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n    width: 42px;\n    height: 42px;\n    border: 1px solid rgba(148, 163, 184, 0.18);\n    border-radius: 12px;\n    background: rgba(255, 255, 255, 0.04);\n    color: #e2e8f0;\n    font-size: 1.3rem;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n  }\n  .admin-sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: min(82vw, 300px);\n    transform: translateX(-110%);\n    transition: transform 0.28s ease;\n    z-index: 1200;\n    background: rgba(2, 6, 23, 0.98);\n    border-right: 1px solid rgba(148, 163, 184, 0.12);\n    padding: 1rem 0.8rem;\n    overflow-y: auto;\n  }\n  .admin-sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .sidebar-close[_ngcontent-%COMP%] {\n    display: inline-flex;\n    width: 36px;\n    height: 36px;\n    border: none;\n    border-radius: 10px;\n    background: rgba(255, 255, 255, 0.05);\n    color: #e2e8f0;\n    cursor: pointer;\n  }\n  .sidebar-backdrop[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(2, 6, 23, 0.5);\n    z-index: 1100;\n  }\n  .admin-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .admin-topbar[_ngcontent-%COMP%], \n   .panel[_ngcontent-%COMP%], \n   .summary-card[_ngcontent-%COMP%] {\n    border-radius: 1.2rem;\n  }\n  .user-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .user-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src\\app\\components\\admin-dashboard\\admin-dashboard.component.ts", lineNumber: 1053 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-FQIQFDKN.js.map
