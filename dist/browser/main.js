import {
  AuthService,
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵinject
} from "./chunk-ZKHNJUVZ.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 10 });
})();

// src/app/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (!this.authService.isAuthenticated()) {
      return this.router.parseUrl("/login");
    }
    const requiredRoles = route.data?.["roles"];
    if (requiredRoles && requiredRoles.length > 0) {
      const currentUser = this.authService.getCurrentUser();
      if (!currentUser || !requiredRoles.includes(currentUser.role)) {
        return this.router.parseUrl("/");
      }
    }
    return true;
  }
  static {
    this.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
  }
};

// src/app/app-routing.module.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-ZOYLQONB.js").then((m) => m.HomeComponent)
  },
  {
    path: "login",
    loadComponent: () => import("./chunk-7KSRLBBR.js").then((m) => m.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-EEACPY4N.js").then((m) => m.RegisterComponent)
  },
  {
    path: "admin",
    loadComponent: () => import("./chunk-VXAFW4SE.js").then((m) => m.AdminDashboardComponent),
    canActivate: [AuthGuard],
    data: { roles: ["admin"] }
  },
  {
    path: "vendor",
    loadComponent: () => import("./chunk-XSZQUR3V.js").then((m) => m.VendorDashboardComponent),
    canActivate: [AuthGuard],
    data: { roles: ["vendor"] }
  },
  {
    path: "cart",
    loadComponent: () => import("./chunk-FPSCWQTR.js").then((m) => m.CartComponent)
  }
];

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
