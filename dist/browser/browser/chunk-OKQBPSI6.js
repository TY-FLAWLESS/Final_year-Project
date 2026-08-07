import {
  delay,
  of,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-JHEYSTBZ.js";

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  constructor() {
    this.storageKey = "unimart_users";
    this.delayMs = 250;
  }
  getUsers() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }
  saveUsers(users) {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }
  isAuthenticated() {
    return !!localStorage.getItem("unimart_token");
  }
  getCurrentUser() {
    const userJson = localStorage.getItem("unimart_user");
    return userJson ? JSON.parse(userJson) : null;
  }
  login(payload) {
    const users = this.getUsers();
    const user = users.find((item) => item.email.toLowerCase() === payload.email.toLowerCase());
    if (!user || user.password !== payload.password) {
      return throwError(() => ({ error: { message: "Invalid email or password." } })).pipe(delay(this.delayMs));
    }
    return of({
      token: Math.random().toString(36).slice(2),
      user: {
        name: user.name,
        email: user.email,
        role: user.role
      },
      message: "Login successful"
    }).pipe(delay(this.delayMs));
  }
  register(payload) {
    const users = this.getUsers();
    const emailExists = users.some((item) => item.email.toLowerCase() === payload.email.toLowerCase());
    if (emailExists) {
      return throwError(() => ({ error: { message: "Email is already registered." } })).pipe(delay(this.delayMs));
    }
    const newUser = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      role: payload.role || "customer"
    };
    users.push(newUser);
    this.saveUsers(users);
    return of({
      message: "Registration successful"
    }).pipe(delay(this.delayMs));
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-OKQBPSI6.js.map
