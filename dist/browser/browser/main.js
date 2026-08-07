import {
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter
} from "./chunk-YVNP3TUU.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-MOTHGCHO.js";

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

// src/app/app-routing.module.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-4EE2YMJH.js").then((m) => m.HomeComponent)
  },
  {
    path: "login",
    loadComponent: () => import("./chunk-W5YG3NSS.js").then((m) => m.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-VRNAPBHD.js").then((m) => m.RegisterComponent)
  },
  {
    path: "admin",
    loadComponent: () => import("./chunk-SPQGT434.js").then((m) => m.AdminDashboardComponent)
  },
  {
    path: "vendor",
    loadComponent: () => import("./chunk-P4WPRZ7W.js").then((m) => m.VendorDashboardComponent)
  }
];

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()]
}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
