import {
  RouterLink
} from "./chunk-74IGBRBX.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-JHEYSTBZ.js";

// src/app/components/home/home.component.ts
var HomeComponent = class _HomeComponent {
  constructor() {
    this.isMenuOpen = false;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 270, vars: 4, consts: [[1, "topbar"], [1, "container"], [1, "topbar-inner"], ["routerLink", "/", 1, "brand-mark"], [1, "brand-icon"], [1, "topbar-actions"], ["routerLink", "/login", 1, "top-link"], ["routerLink", "/register", 1, "top-cta"], ["type", "button", "aria-label", "Toggle menu", 1, "menu-toggle", 3, "click"], [1, "mobile-backdrop", 3, "click"], [1, "mobile-menu"], [1, "mobile-menu-header"], [1, "drawer-label"], [1, "drawer-subtitle"], ["type", "button", "aria-label", "Close menu", 1, "close-menu", 3, "click"], ["routerLink", "/", 3, "click"], ["routerLink", "/register", 3, "click"], ["routerLink", "/login", 3, "click"], [1, "store-hero", "text-white"], [1, "container", "py-5"], [1, "row", "align-items-center", "g-4"], [1, "col-lg-7"], [1, "hero-badge", "mb-3"], [1, "fw-bold", "mb-3", "hero-title"], [1, "mb-4", "text-white-50", "hero-copy"], [1, "row", "g-2", "mb-4"], [1, "col-md-8"], [1, "search-pill", "d-flex", "align-items-center", "gap-2"], ["type", "text", "placeholder", "Search for books, gadgets, fashion, food...", 1, "form-control", "form-control-lg", "border-0", "shadow-none"], [1, "col-md-4"], ["routerLink", "/register", 1, "btn", "btn-light", "btn-lg", "w-100", "rounded-pill", "fw-bold"], [1, "hero-stats", "d-flex", "flex-wrap", "gap-3"], [1, "stat-pill"], [1, "hero-chip-row", "mt-3"], [1, "hero-chip"], [1, "col-lg-5"], [1, "shop-panel", "shadow-lg", "border-0"], [1, "card-body", "p-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "mb-1", "text-uppercase", "small", "fw-bold", "text-primary"], [1, "fw-bold", "mb-0"], [1, "badge", "rounded-pill", "bg-danger", "px-3"], [1, "deal-track"], [1, "deal-track-inner"], [1, "deal-card"], [1, "deal-visual"], ["src", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80", "alt", "Backpack bundle"], [1, "deal-title"], [1, "deal-price"], [1, "deal-note"], ["src", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80", "alt", "Student tech saver"], ["src", "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80", "alt", "Weekend fashion drop"], [1, "section-heading", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-4"], [1, "mb-1", "text-primary", "fw-bold", "text-uppercase", "small"], ["routerLink", "/register", 1, "text-decoration-none", "fw-semibold"], [1, "row", "g-3"], [1, "col-6", "col-md-3"], [1, "category-card"], [1, "container", "pb-5"], ["routerLink", "/register", 1, "btn", "btn-outline-primary", "rounded-pill", "px-4"], [1, "row", "g-4"], [1, "col-md-6", "col-lg-3"], [1, "product-card", "h-100"], [1, "product-image"], ["src", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", "alt", "AI Study Companion"], [1, "p-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "badge", "bg-light", "text-dark"], [1, "text-warning"], [1, "fw-bold", "mb-2"], [1, "text-muted", "small", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-primary"], ["routerLink", "/login", 1, "btn", "btn-sm", "btn-primary", "rounded-pill"], ["src", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80", "alt", "Urban Backpack Pro"], ["src", "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80", "alt", "Fast Charge Kit"], ["src", "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", "alt", "Campus Essentials Tee"], [1, "row", "g-4", "align-items-stretch"], [1, "col-lg-8"], [1, "promo-banner"], [1, "row", "align-items-center", "g-3"], [1, "mb-2", "text-uppercase", "fw-bold", "small"], [1, "mb-0", "text-white-50"], [1, "col-md-4", "text-md-end"], ["routerLink", "/register", 1, "btn", "btn-light", "rounded-pill", "px-4", "fw-bold"], [1, "col-lg-4"], [1, "trust-panel", "h-100"], [1, "fw-bold", "mb-3"], [1, "mb-0", "ps-3"]], template: function HomeComponent_Template(rf, ctx) {
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
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_13_listener() {
          return ctx.toggleMenu();
        });
        \u0275\u0275text(14, " \u2630 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9);
        \u0275\u0275listener("click", function HomeComponent_Template_div_click_15_listener() {
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
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_23_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(24, "\u2715");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "a", 15);
        \u0275\u0275listener("click", function HomeComponent_Template_a_click_25_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(26, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "a", 16);
        \u0275\u0275listener("click", function HomeComponent_Template_a_click_27_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(28, "Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "a", 17);
        \u0275\u0275listener("click", function HomeComponent_Template_a_click_29_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(30, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "a", 16);
        \u0275\u0275listener("click", function HomeComponent_Template_a_click_31_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(32, "Create account");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "div", 18)(34, "section", 19)(35, "div", 20)(36, "div", 21)(37, "div", 22);
        \u0275\u0275text(38, "Campus Commerce. Trusted. Smart. Fast.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "h1", 23);
        \u0275\u0275text(40, "Shop the student marketplace.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p", 24);
        \u0275\u0275text(42, " Discover daily essentials, fashion, tech accessories, and campus-ready products from verified vendors in one beautiful digital storefront. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 25)(44, "div", 26)(45, "div", 27)(46, "span");
        \u0275\u0275text(47, "\u{1F50E}");
        \u0275\u0275elementEnd();
        \u0275\u0275element(48, "input", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 29)(50, "a", 30);
        \u0275\u0275text(51, "Start Shopping");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "div", 31)(53, "div", 32);
        \u0275\u0275text(54, "\u26A1 Fast checkout experience");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 32);
        \u0275\u0275text(56, "\u{1F6E1}\uFE0F Verified vendors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 32);
        \u0275\u0275text(58, "\u{1F916} AI smart discovery");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 33)(60, "span", 34);
        \u0275\u0275text(61, "Student savings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "span", 34);
        \u0275\u0275text(63, "Campus essentials");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "span", 34);
        \u0275\u0275text(65, "Tech drop");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "div", 35)(67, "div", 36)(68, "div", 37)(69, "div", 38)(70, "div")(71, "p", 39);
        \u0275\u0275text(72, "Hot today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "h3", 40);
        \u0275\u0275text(74, "UniMart Deals");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "span", 41);
        \u0275\u0275text(76, "-35%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 42)(78, "div", 43)(79, "div", 44)(80, "div", 45);
        \u0275\u0275element(81, "img", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "div", 47);
        \u0275\u0275text(83, "Campus Essentials Bundle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 48);
        \u0275\u0275text(85, "GH\u20B5 189");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 49);
        \u0275\u0275text(87, "Backpack + notebook + stationery starter pack");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "div", 44)(89, "div", 45);
        \u0275\u0275element(90, "img", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "div", 47);
        \u0275\u0275text(92, "Student Tech Saver");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "div", 48);
        \u0275\u0275text(94, "GH\u20B5 299");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 49);
        \u0275\u0275text(96, "Wireless earbuds and charging accessories");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "div", 44)(98, "div", 45);
        \u0275\u0275element(99, "img", 51);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 47);
        \u0275\u0275text(101, "Weekend Fashion Drop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "div", 48);
        \u0275\u0275text(103, "GH\u20B5 119");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 49);
        \u0275\u0275text(105, "Trend-ready outfits for campus life");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "div", 44)(107, "div", 45);
        \u0275\u0275element(108, "img", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "div", 47);
        \u0275\u0275text(110, "Campus Essentials Bundle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 48);
        \u0275\u0275text(112, "GH\u20B5 189");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "div", 49);
        \u0275\u0275text(114, "Backpack + notebook + stationery starter pack");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(115, "div", 44)(116, "div", 45);
        \u0275\u0275element(117, "img", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "div", 47);
        \u0275\u0275text(119, "Student Tech Saver");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 48);
        \u0275\u0275text(121, "GH\u20B5 299");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "div", 49);
        \u0275\u0275text(123, "Wireless earbuds and charging accessories");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(124, "div", 44)(125, "div", 45);
        \u0275\u0275element(126, "img", 51);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "div", 47);
        \u0275\u0275text(128, "Weekend Fashion Drop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "div", 48);
        \u0275\u0275text(130, "GH\u20B5 119");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "div", 49);
        \u0275\u0275text(132, "Trend-ready outfits for campus life");
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(133, "section", 19)(134, "div", 52)(135, "div")(136, "p", 53);
        \u0275\u0275text(137, "Browse categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "h2", 40);
        \u0275\u0275text(139, "Popular collections");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "a", 54);
        \u0275\u0275text(141, "View all categories");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "div", 55)(143, "div", 56)(144, "div", 57);
        \u0275\u0275text(145, "\u{1F4DA} Books & Study");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(146, "div", 56)(147, "div", 57);
        \u0275\u0275text(148, "\u{1F3A7} Tech & Gadgets");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(149, "div", 56)(150, "div", 57);
        \u0275\u0275text(151, "\u{1F9E5} Fashion");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(152, "div", 56)(153, "div", 57);
        \u0275\u0275text(154, "\u{1F37D}\uFE0F Food & Snacks");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(155, "section", 58)(156, "div", 52)(157, "div")(158, "p", 53);
        \u0275\u0275text(159, "Featured products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "h2", 40);
        \u0275\u0275text(161, "Best sellers this week");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(162, "a", 59);
        \u0275\u0275text(163, "Explore more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(164, "div", 60)(165, "div", 61)(166, "div", 62)(167, "div", 63);
        \u0275\u0275element(168, "img", 64);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "div", 65)(170, "div", 66)(171, "span", 67);
        \u0275\u0275text(172, "Smart series");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "span", 68);
        \u0275\u0275text(174, "\u2605\u2605\u2605\u2605\u2605");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(175, "h6", 69);
        \u0275\u0275text(176, "AI Study Companion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "p", 70);
        \u0275\u0275text(178, "Perfect for students needing productivity and planning tools.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "div", 71)(180, "strong", 72);
        \u0275\u0275text(181, "GH\u20B5 89");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "a", 73);
        \u0275\u0275text(183, "Buy now");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(184, "div", 61)(185, "div", 62)(186, "div", 63);
        \u0275\u0275element(187, "img", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "div", 65)(189, "div", 66)(190, "span", 67);
        \u0275\u0275text(191, "Campus favorite");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "span", 68);
        \u0275\u0275text(193, "\u2605\u2605\u2605\u2605\u2605");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(194, "h6", 69);
        \u0275\u0275text(195, "Urban Backpack Pro");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(196, "p", 70);
        \u0275\u0275text(197, "Durable, sleek, and designed for everyday campus movement.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "div", 71)(199, "strong", 72);
        \u0275\u0275text(200, "GH\u20B5 145");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "a", 73);
        \u0275\u0275text(202, "Buy now");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(203, "div", 61)(204, "div", 62)(205, "div", 63);
        \u0275\u0275element(206, "img", 75);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "div", 65)(208, "div", 66)(209, "span", 67);
        \u0275\u0275text(210, "Tech drop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "span", 68);
        \u0275\u0275text(212, "\u2605\u2605\u2605\u2605\u2605");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(213, "h6", 69);
        \u0275\u0275text(214, "Fast Charge Kit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "p", 70);
        \u0275\u0275text(216, "Portable charger, cable set, and sleek organizer case.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(217, "div", 71)(218, "strong", 72);
        \u0275\u0275text(219, "GH\u20B5 72");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "a", 73);
        \u0275\u0275text(221, "Buy now");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(222, "div", 61)(223, "div", 62)(224, "div", 63);
        \u0275\u0275element(225, "img", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(226, "div", 65)(227, "div", 66)(228, "span", 67);
        \u0275\u0275text(229, "Street style");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(230, "span", 68);
        \u0275\u0275text(231, "\u2605\u2605\u2605\u2605\u2605");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(232, "h6", 69);
        \u0275\u0275text(233, "Campus Essentials Tee");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "p", 70);
        \u0275\u0275text(235, "Modern comfort wear with everyday style and hoodie appeal.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(236, "div", 71)(237, "strong", 72);
        \u0275\u0275text(238, "GH\u20B5 99");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "a", 73);
        \u0275\u0275text(240, "Buy now");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(241, "section", 58)(242, "div", 77)(243, "div", 78)(244, "div", 79)(245, "div", 80)(246, "div", 26)(247, "p", 81);
        \u0275\u0275text(248, "Exclusive student offer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "h2", 69);
        \u0275\u0275text(250, "Get 20% off your first campus order");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(251, "p", 82);
        \u0275\u0275text(252, "Use UniMart starter offer for your next purchase and discover local vendors faster.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(253, "div", 83)(254, "a", 84);
        \u0275\u0275text(255, "Claim offer");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(256, "div", 85)(257, "div", 86)(258, "div", 37)(259, "h3", 87);
        \u0275\u0275text(260, "Why customers trust UniMart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(261, "ul", 88)(262, "li");
        \u0275\u0275text(263, "Secure and simple login with role-based accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(264, "li");
        \u0275\u0275text(265, "Vendor marketplace with modern storefront management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(266, "li");
        \u0275\u0275text(267, "Smart search and product discovery");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(268, "li");
        \u0275\u0275text(269, "Focused on real campus commerce needs");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275classProp("show", ctx.isMenuOpen);
        \u0275\u0275advance();
        \u0275\u0275classProp("show", ctx.isMenuOpen);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ['\n\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(6, 14, 30, 0.98),\n      rgba(22, 60, 145, 0.94));\n  backdrop-filter: blur(18px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.topbar-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 0;\n  min-height: 72px;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  color: #ffffff;\n  text-decoration: none;\n  font-size: 1.25rem;\n  font-weight: 900;\n  letter-spacing: 0.04em;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  display: inline-grid;\n  place-items: center;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #cfe0ff);\n  color: #0b5ed7;\n  font-weight: 900;\n  font-size: 0.95rem;\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.top-link[_ngcontent-%COMP%], \n.top-cta[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 0.9rem;\n}\n.top-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.88);\n}\n.top-cta[_ngcontent-%COMP%] {\n  padding: 9px 16px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #dbeafe);\n  color: #1d4ed8;\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  border: 0;\n  background: rgba(255, 255, 255, 0.14);\n  color: #fff;\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  font-size: 1.15rem;\n  box-shadow: 0 10px 20px rgba(5, 10, 25, 0.2);\n}\n.mobile-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(3, 7, 18, 0.45);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.25s ease;\n  z-index: 25;\n}\n.mobile-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: min(320px, 85vw);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(7, 16, 31, 0.98),\n      rgba(8, 76, 178, 0.98));\n  box-shadow: -16px 0 40px rgba(0, 0, 0, 0.35);\n  transform: translateX(110%);\n  transition: transform 0.28s ease;\n  z-index: 30;\n  visibility: hidden;\n  backdrop-filter: blur(18px);\n}\n.mobile-menu-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  padding: 6px 4px 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n.drawer-label[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 900;\n  font-size: 1rem;\n}\n.drawer-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 0.78rem;\n}\n.close-menu[_ngcontent-%COMP%] {\n  border: 0;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n}\n.mobile-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.10);\n  font-weight: 700;\n}\n.mobile-menu.show[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  visibility: visible;\n}\n.store-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(255, 255, 255, 0.24),\n      transparent 28%),\n    radial-gradient(\n      circle at left center,\n      rgba(20, 184, 166, 0.20),\n      transparent 32%),\n    linear-gradient(\n      135deg,\n      #071120,\n      #133d8e 45%,\n      #3b4bd6 74%,\n      #7c3aed 100%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n.store-hero[_ngcontent-%COMP%]::before, \n.store-hero[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(8px);\n  opacity: 0.55;\n  animation: _ngcontent-%COMP%_floatGlow 9s ease-in-out infinite;\n}\n.store-hero[_ngcontent-%COMP%]::before {\n  width: 260px;\n  height: 260px;\n  top: -30px;\n  right: -30px;\n  background: rgba(255, 255, 255, 0.16);\n}\n.store-hero[_ngcontent-%COMP%]::after {\n  width: 220px;\n  height: 220px;\n  left: -40px;\n  bottom: -30px;\n  background: rgba(20, 184, 166, 0.28);\n  animation-delay: 1.5s;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 3.8vw, 3.6rem);\n  line-height: 1.05;\n  letter-spacing: -0.04em;\n  text-shadow: 0 16px 30px rgba(0, 0, 0, 0.18);\n}\n.hero-copy[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  max-width: 650px;\n  line-height: 1.7;\n}\n.hero-chip-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.hero-chip[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #f8fbff;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.03em;\n}\n.hero-badge[_ngcontent-%COMP%], \n.stat-pill[_ngcontent-%COMP%], \n.search-pill[_ngcontent-%COMP%], \n.category-card[_ngcontent-%COMP%], \n.product-card[_ngcontent-%COMP%], \n.shop-panel[_ngcontent-%COMP%], \n.promo-banner[_ngcontent-%COMP%], \n.trust-panel[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.30),\n      rgba(255, 255, 255, 0.14));\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  font-size: 0.8rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  box-shadow: 0 14px 32px rgba(6, 16, 31, 0.24);\n}\n.search-pill[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.16);\n  border: 1px solid rgba(255, 255, 255, 0.28);\n  padding: 8px 10px;\n  backdrop-filter: blur(16px);\n  box-shadow: 0 18px 40px rgba(6, 16, 31, 0.24);\n}\n.search-pill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n}\n.search-pill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.72);\n}\n.stat-pill[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  padding: 10px 14px;\n  font-weight: 700;\n}\n.shop-panel[_ngcontent-%COMP%], \n.trust-panel[_ngcontent-%COMP%], \n.product-card[_ngcontent-%COMP%], \n.category-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #f8fbff);\n  color: #0f172a;\n  box-shadow: 0 28px 70px rgba(6, 23, 58, 0.16);\n  border: 1px solid rgba(37, 99, 235, 0.14);\n}\n.deal-track[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.deal-track-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  gap: 12px;\n  width: max-content;\n  animation: _ngcontent-%COMP%_slideDeals 18s linear infinite;\n  will-change: transform;\n}\n.deal-card[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fbff,\n      #eef5ff);\n  border-radius: 18px;\n  padding: 16px;\n  border: 1px solid rgba(13, 110, 253, 0.12);\n  min-height: 240px;\n  min-width: min(100%, 290px);\n  width: min(100%, 290px);\n  opacity: 0.92;\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow: hidden;\n}\n.deal-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: auto -30px -40px auto;\n  width: 120px;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(13, 110, 253, 0.14),\n      transparent 70%);\n}\n.deal-visual[_ngcontent-%COMP%] {\n  height: 120px;\n  overflow: hidden;\n  border-radius: 14px;\n  background: #eaf2ff;\n}\n.deal-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.deal-title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  color: #0b5ed7;\n}\n.deal-price[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  font-weight: 900;\n  color: #0f172a;\n  margin: 4px 0;\n}\n.deal-note[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #4b5563;\n}\n.section-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0b5ed7;\n  font-weight: 800;\n}\n.category-card[_ngcontent-%COMP%] {\n  padding: 18px 16px;\n  font-weight: 800;\n  text-align: center;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #eff6ff);\n}\n.category-card[_ngcontent-%COMP%]:hover, \n.product-card[_ngcontent-%COMP%]:hover, \n.shop-panel[_ngcontent-%COMP%]:hover, \n.trust-panel[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 28px 70px rgba(12, 54, 139, 0.18);\n}\n.product-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 24px;\n  transition: transform 0.28s ease, box-shadow 0.28s ease;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #f9fbff);\n  border: 1px solid rgba(13, 110, 253, 0.08);\n}\n.product-image[_ngcontent-%COMP%] {\n  height: 220px;\n  overflow: hidden;\n  background: #eef4ff;\n}\n.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.45s ease;\n}\n.product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.product-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.product-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.product-card[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], \n.product-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n}\n.promo-banner[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #071120,\n      #0f4ad7 58%,\n      #7c3aed 100%);\n  color: #fff;\n  padding: 28px;\n  min-height: 100%;\n  box-shadow: 0 28px 70px rgba(7, 26, 58, 0.24);\n  animation: _ngcontent-%COMP%_shimmerBanner 6s ease-in-out infinite;\n  border-radius: 24px;\n}\n.promo-banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      120deg,\n      transparent,\n      rgba(255, 255, 255, 0.16),\n      transparent);\n  transform: translateX(-100%);\n  animation: _ngcontent-%COMP%_sweep 4s linear infinite;\n}\n.trust-panel[_ngcontent-%COMP%] {\n  border: 1px solid rgba(15, 23, 42, 0.08);\n}\n@media (min-width: 768px) {\n  .mobile-backdrop[_ngcontent-%COMP%], \n   .mobile-menu[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .topbar-actions[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: inline-grid;\n    place-items: center;\n  }\n  .brand-mark[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 1.9rem;\n  }\n  .hero-copy[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_floatGlow {\n  0%, 100% {\n    transform: translateY(0px) scale(1);\n  }\n  50% {\n    transform: translateY(-14px) scale(1.05);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmerBanner {\n  0%, 100% {\n    filter: saturate(1);\n  }\n  50% {\n    filter: saturate(1.25);\n  }\n}\n@keyframes _ngcontent-%COMP%_sweep {\n  0% {\n    transform: translateX(-120%);\n  }\n  100% {\n    transform: translateX(120%);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDeals {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\components\\home\\home.component.ts", lineNumber: 792 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-ISML3JWD.js.map
