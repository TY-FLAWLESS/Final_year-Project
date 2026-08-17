import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-VV65OK7X.js";
import {
  CommonModule,
  NgIf,
  RouterLink,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RLCOLIVI.js";

// src/app/components/help/help.component.ts
function HelpComponent_p_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, " Your message has been prepared and a mail app has been opened. We\u2019ll get back to you soon. ");
    \u0275\u0275elementEnd();
  }
}
var HelpComponent = class _HelpComponent {
  constructor() {
    this.isSubmitting = false;
    this.submitSuccess = false;
    this.form = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }
  get mailtoLink() {
    const subject = encodeURIComponent(this.form.subject || "Support request");
    const body = encodeURIComponent(`Name: ${this.form.name}
Email: ${this.form.email}

Message:
${this.form.message}`);
    return `mailto:ktumarketplace@gmail.com?subject=${subject}&body=${body}`;
  }
  submitForm() {
    if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
      return;
    }
    this.isSubmitting = true;
    const saved = JSON.parse(localStorage.getItem("ktu-support-messages") || "[]");
    saved.unshift(__spreadProps(__spreadValues({}, this.form), {
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    }));
    localStorage.setItem("ktu-support-messages", JSON.stringify(saved.slice(0, 20)));
    window.location.href = this.mailtoLink;
    this.submitSuccess = true;
    this.isSubmitting = false;
    this.form = { name: "", email: "", subject: "", message: "" };
  }
  static {
    this.\u0275fac = function HelpComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HelpComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelpComponent, selectors: [["app-help"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 70, vars: 7, consts: [[1, "help-page"], [1, "help-shell"], [1, "help-header"], [1, "eyebrow"], [1, "subtitle"], [1, "help-grid"], [1, "card", "contact-card"], [1, "help-form", 3, "ngSubmit"], [1, "field-row"], ["type", "text", "name", "name", "placeholder", "Your name", "required", "", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "you@example.com", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "subject", "placeholder", "How can we help?", "required", "", 3, "ngModelChange", "ngModel"], ["name", "message", "rows", "5", "placeholder", "Tell us what you need help with...", "required", "", 3, "ngModelChange", "ngModel"], [1, "actions"], ["type", "submit", 1, "primary-btn"], [1, "secondary-btn", 3, "href"], ["class", "success-message", 4, "ngIf"], [1, "card", "info-card"], [1, "info-item"], [1, "icon"], ["href", "mailto:ktumarketplace@gmail.com"], [1, "quick-links"], ["routerLink", "/login"], ["routerLink", "/register"], ["routerLink", "/cart"], [1, "success-message"]], template: function HelpComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        \u0275\u0275text(4, "Need assistance?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Help & Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, " We\u2019re here to help with orders, account issues, vendor questions, and campus marketplace support. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "section", 6)(11, "h2");
        \u0275\u0275text(12, "Send us a message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "form", 7);
        \u0275\u0275listener("ngSubmit", function HelpComponent_Template_form_ngSubmit_13_listener() {
          return ctx.submitForm();
        });
        \u0275\u0275elementStart(14, "div", 8)(15, "label");
        \u0275\u0275text(16, " Full name ");
        \u0275\u0275elementStart(17, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function HelpComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.name, $event) || (ctx.form.name = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 8)(19, "label");
        \u0275\u0275text(20, " Email address ");
        \u0275\u0275elementStart(21, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function HelpComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 8)(23, "label");
        \u0275\u0275text(24, " Subject ");
        \u0275\u0275elementStart(25, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function HelpComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.subject, $event) || (ctx.form.subject = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 8)(27, "label");
        \u0275\u0275text(28, " Message ");
        \u0275\u0275elementStart(29, "textarea", 12);
        \u0275\u0275twoWayListener("ngModelChange", function HelpComponent_Template_textarea_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form.message, $event) || (ctx.form.message = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 13)(31, "button", 14);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "a", 15);
        \u0275\u0275text(34, "Mail us directly");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(35, HelpComponent_p_35_Template, 2, 0, "p", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "aside", 17)(37, "h2");
        \u0275\u0275text(38, "Contact details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 18)(40, "span", 19);
        \u0275\u0275text(41, "\u2709\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div")(43, "strong");
        \u0275\u0275text(44, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "a", 20);
        \u0275\u0275text(46, "ktumarketplace@gmail.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 18)(48, "span", 19);
        \u0275\u0275text(49, "\u{1F552}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div")(51, "strong");
        \u0275\u0275text(52, "Support hours");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p");
        \u0275\u0275text(54, "Mon - Sat, 8:00 AM - 6:00 PM");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 18)(56, "span", 19);
        \u0275\u0275text(57, "\u{1F3EB}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div")(59, "strong");
        \u0275\u0275text(60, "Campus support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p");
        \u0275\u0275text(62, "Student services and vendor assistance");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "div", 21)(64, "a", 22);
        \u0275\u0275text(65, "Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "a", 23);
        \u0275\u0275text(67, "Create account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "a", 24);
        \u0275\u0275text(69, "View cart");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.name);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.subject);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.message);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Sending..." : "Submit request", " ");
        \u0275\u0275advance();
        \u0275\u0275property("href", ctx.mailtoLink, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.submitSuccess);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #071522 0%,\n      #0d1c2f 100%);\n  color: #edf5ff;\n  font-family: "Segoe UI", sans-serif;\n}\n.help-page[_ngcontent-%COMP%] {\n  padding: 48px 20px 72px;\n}\n.help-shell[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.help-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #7cc8ff;\n  text-transform: uppercase;\n  letter-spacing: 1.4px;\n  font-size: 12px;\n  font-weight: 800;\n  margin-bottom: 12px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: clamp(2.2rem, 4vw, 3.3rem);\n  line-height: 1.1;\n  margin: 0 0 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n  color: #c7d8ef;\n  font-size: 1.02rem;\n}\n.help-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.5fr 0.9fr;\n  gap: 24px;\n}\n.card[_ngcontent-%COMP%] {\n  background: rgba(15, 31, 49, 0.82);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 22px;\n  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);\n}\n.contact-card[_ngcontent-%COMP%], \n.info-card[_ngcontent-%COMP%] {\n  padding: 28px;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 1.5rem;\n}\n.help-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.field-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  color: #dfeafc;\n  font-weight: 600;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 15px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.04);\n  color: #edf5ff;\n  font-size: 0.98rem;\n  resize: vertical;\n}\ninput[_ngcontent-%COMP%]::placeholder, \ntextarea[_ngcontent-%COMP%]::placeholder {\n  color: #8ea9c7;\n}\ninput[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(124, 200, 255, 0.9);\n  box-shadow: 0 0 0 3px rgba(124, 200, 255, 0.18);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n.primary-btn[_ngcontent-%COMP%], \n.secondary-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 48px;\n  border-radius: 12px;\n  text-decoration: none;\n  border: none;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 12px 18px;\n  transition: transform 0.2s ease;\n}\n.primary-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00d4ff 0%,\n      #0066ff 100%);\n  color: white;\n}\n.secondary-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: #edf5ff;\n}\n.primary-btn[_ngcontent-%COMP%]:hover, \n.secondary-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.success-message[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #9ce7b1;\n  font-weight: 600;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 18px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.info-item[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  background: rgba(0, 212, 255, 0.12);\n  font-size: 20px;\n}\n.info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.info-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 0 4px;\n}\n.info-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8ecfff;\n  text-decoration: none;\n}\n.info-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #c7d8ef;\n}\n.quick-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 22px;\n}\n.quick-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #edf5ff;\n  text-decoration: none;\n  font-size: 0.92rem;\n}\n@media (max-width: 768px) {\n  .help-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .contact-card[_ngcontent-%COMP%], \n   .info-card[_ngcontent-%COMP%] {\n    padding: 20px 18px;\n  }\n}\n/*# sourceMappingURL=help.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelpComponent, { className: "HelpComponent", filePath: "src\\app\\components\\help\\help.component.ts", lineNumber: 324 });
})();
export {
  HelpComponent
};
//# sourceMappingURL=chunk-JY5V26IU.js.map
