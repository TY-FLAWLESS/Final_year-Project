import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  template: `
    <div class="admin-shell">
      <header class="admin-topbar">
        <div>
          <p class="eyebrow">Admin control center</p>
          <h1>Manage users & marketplace health</h1>
          <p class="lead">Oversee vendor and customer access, approve trusted sellers, and keep the UniMart ecosystem clean.</p>
        </div>

        <div class="topbar-actions">
          <a class="btn btn-ghost" routerLink="/">Marketplace</a>
          <button class="btn btn-secondary" (click)="logout()">Logout</button>
        </div>
      </header>

      <section class="summary-grid">
        <article class="summary-card blue">
          <span class="summary-label">Total users</span>
          <h2>{{ allUsers.length }}</h2>
          <p>{{ vendorList.length }} vendors · {{ customerList.length }} customers</p>
        </article>
        <article class="summary-card violet">
          <span class="summary-label">Vendor pool</span>
          <h2>{{ vendorList.length }}</h2>
          <p>Review active sellers and pending storefronts.</p>
        </article>
        <article class="summary-card green">
          <span class="summary-label">Customer base</span>
          <h2>{{ customerList.length }}</h2>
          <p>Monitor shopper growth and trust signals.</p>
        </article>
      </section>

      <div class="admin-filter-bar">
        <div class="tabs">
          <button class="tab" [class.active]="selectedTab === 'vendors'" (click)="setTab('vendors')">Vendors</button>
          <button class="tab" [class.active]="selectedTab === 'customers'" (click)="setTab('customers')">Customers</button>
          <button class="tab" [class.active]="selectedTab === 'all'" (click)="setTab('all')">All users</button>
        </div>
        <div class="status-pill">Showing {{ selectedTab === 'all' ? allUsers.length : selectedTab === 'vendors' ? vendorList.length : customerList.length }} accounts</div>
      </div>

      <section class="admin-grid">
        <aside class="admin-sidebar">
          <div class="panel glass-panel">
            <h3>Quick actions</h3>
            <ul>
              <li>Remove inactive accounts</li>
              <li>Promote trusted customers</li>
              <li>Keep marketplace safe</li>
            </ul>
          </div>
          <div class="panel glass-panel">
            <h3>Marketplace stats</h3>
            <div class="metric-row"><span>Vendors</span><strong>{{ vendorList.length }}</strong></div>
            <div class="metric-row"><span>Customers</span><strong>{{ customerList.length }}</strong></div>
            <div class="metric-row"><span>Accounts</span><strong>{{ allUsers.length }}</strong></div>
          </div>
        </aside>

        <main class="admin-main">
          <div class="panel glass-panel panel-main">
            <div class="panel-header">
              <div>
                <p class="eyebrow">Account management</p>
                <h2>{{ selectedTab === 'vendors' ? 'Vendor accounts' : selectedTab === 'customers' ? 'Customer accounts' : 'All users' }}</h2>
              </div>
              <span class="badge">{{ selectedTab === 'all' ? allUsers.length : selectedTab === 'vendors' ? vendorList.length : customerList.length }} accounts</span>
            </div>

            <div *ngIf="selectedUsers.length; else emptyState" class="user-list">
              <article *ngFor="let user of selectedUsers" class="user-card">
                <div>
                  <div class="user-title">{{ user.name }}</div>
                  <p class="user-email">{{ user.email }}</p>
                  <span class="role-badge {{ user.role }}">{{ user.role }}</span>
                </div>
                <div class="user-actions">
                  <button class="btn btn-sm btn-outline" *ngIf="user.role === 'customer'" (click)="promoteToVendor(user)">Promote to vendor</button>
                  <button class="btn btn-sm btn-outline" *ngIf="user.role === 'vendor'" (click)="promoteToCustomer(user)">Demote to customer</button>
                  <button class="btn btn-sm btn-danger" (click)="deleteUser(user)">Delete</button>
                </div>
              </article>
            </div>

            <ng-template #emptyState>
              <div class="empty-state">
                <h3>No accounts found</h3>
                <p class="text-muted">Switch tabs or add users through registration to populate the marketplace.</p>
              </div>
            </ng-template>
          </div>
        </main>
      </section>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        background: radial-gradient(circle at top left, rgba(59, 130, 246, 0.18), transparent 18%),
          linear-gradient(180deg, #020617 0%, #111827 100%);
        color: #e2e8f0;
      }
      .admin-shell {
        max-width: 1280px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
      }
      .admin-topbar {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1.5rem;
        padding: 2rem;
        border-radius: 2rem;
        background: rgba(15, 23, 42, 0.9);
        border: 1px solid rgba(148, 163, 184, 0.12);
        box-shadow: 0 30px 90px rgba(15, 23, 42, 0.35);
      }
      .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.22em;
        color: #60a5fa;
        font-weight: 700;
        margin-bottom: 0.75rem;
      }
      .admin-topbar h1 {
        font-size: clamp(2.4rem, 3vw, 3.4rem);
        margin: 0 0 0.85rem;
      }
      .lead {
        color: #94a3b8;
        max-width: 720px;
      }
      .topbar-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
      .btn {
        border-radius: 999px;
        font-weight: 700;
        cursor: pointer;
      }
      .btn-ghost {
        background: rgba(255, 255, 255, 0.06);
        color: #e2e8f0;
        border: 1px solid rgba(148, 163, 184, 0.18);
        padding: 0.95rem 1.75rem;
      }
      .btn-secondary {
        background: #2563eb;
        color: white;
        padding: 0.95rem 1.75rem;
        border: none;
      }
      .summary-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
        margin: 2rem 0;
      }
      .summary-card {
        padding: 1.75rem;
        border-radius: 1.75rem;
        background: rgba(15, 23, 42, 0.92);
        border: 1px solid rgba(148, 163, 184, 0.12);
      }
      .summary-card.blue { background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(30, 64, 175, 0.15)); }
      .summary-card.violet { background: linear-gradient(135deg, rgba(196, 181, 253, 0.2), rgba(109, 40, 217, 0.14)); }
      .summary-card.green { background: linear-gradient(135deg, rgba(52, 211, 153, 0.2), rgba(16, 185, 129, 0.14)); }
      .summary-label {
        text-transform: uppercase;
        letter-spacing: 0.16em;
        font-size: 0.8rem;
        color: #93c5fd;
        margin-bottom: 0.85rem;
        display: inline-block;
      }
      .summary-card h2 {
        font-size: 2.5rem;
        margin: 0 0 0.5rem;
      }
      .admin-filter-bar {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }
      .tabs {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
      }
      .tab {
        border: 1px solid rgba(148, 163, 184, 0.2);
        background: rgba(255, 255, 255, 0.06);
        color: #e2e8f0;
        padding: 0.95rem 1.4rem;
        border-radius: 999px;
      }
      .tab.active {
        background: #2563eb;
        border-color: #2563eb;
      }
      .status-pill {
        align-self: center;
        padding: 0.85rem 1rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.08);
        color: #cbd5e1;
      }
      .admin-grid {
        display: grid;
        grid-template-columns: 320px minmax(0, 1fr);
        gap: 1.5rem;
      }
      .admin-sidebar {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .panel {
        border-radius: 1.8rem;
        border: 1px solid rgba(148, 163, 184, 0.12);
        background: rgba(15, 23, 42, 0.92);
        padding: 1.5rem;
        box-shadow: 0 20px 60px rgba(15, 23, 42, 0.18);
      }
      .panel h3 {
        margin-top: 0;
        margin-bottom: 1rem;
      }
      .panel ul {
        margin: 0;
        padding-left: 1.15rem;
        color: #cbd5e1;
      }
      .panel ul li {
        margin-bottom: 0.75rem;
      }
      .metric-row {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 0.85rem;
        color: #cbd5e1;
      }
      .metric-row strong {
        color: #f8fafc;
      }
      .admin-main {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .panel-main {
        min-height: 420px;
      }
      .panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }
      .badge {
        display: inline-flex;
        padding: 0.75rem 1rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.08);
        color: #e2e8f0;
        font-size: 0.95rem;
      }
      .user-list {
        display: grid;
        gap: 1rem;
      }
      .user-card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding: 1.25rem 1.5rem;
        border-radius: 1.5rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(148, 163, 184, 0.08);
      }
      .user-title {
        font-size: 1.05rem;
        font-weight: 700;
      }
      .user-email {
        margin: 0.35rem 0 0;
        color: #94a3b8;
      }
      .role-badge {
        display: inline-flex;
        align-items: center;
        padding: 0.5rem 0.9rem;
        border-radius: 999px;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.12em;
        margin-top: 0.75rem;
      }
      .role-badge.vendor { background: rgba(59, 130, 246, 0.18); color: #bfdbfe; }
      .role-badge.customer { background: rgba(34, 197, 94, 0.18); color: #bbf7d0; }
      .role-badge.admin { background: rgba(168, 85, 247, 0.18); color: #e9d5ff; }
      .user-actions {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
        justify-content: flex-end;
      }
      .btn-outline {
        border: 1px solid rgba(148, 163, 184, 0.24);
        background: rgba(255, 255, 255, 0.06);
        color: #e2e8f0;
      }
      .btn-danger {
        background: #dc2626;
        color: #fff;
        border: none;
      }
      .empty-state {
        padding: 2rem;
        text-align: center;
        color: #cbd5e1;
        border-radius: 1.5rem;
        border: 1px dashed rgba(148, 163, 184, 0.18);
        background: rgba(255, 255, 255, 0.03);
      }
      @media (max-width: 991.98px) {
        .summary-grid, .admin-grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class AdminDashboardComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  selectedTab: 'vendors' | 'customers' | 'all' = 'vendors';
  allUsers = this.authService.getAllUsers();
  vendorList = this.allUsers.filter((user) => user.role === 'vendor');
  customerList = this.allUsers.filter((user) => user.role === 'customer');

  get selectedUsers() {
    if (this.selectedTab === 'vendors') {
      return this.vendorList;
    }
    if (this.selectedTab === 'customers') {
      return this.customerList;
    }
    return this.allUsers;
  }

  setTab(tab: 'vendors' | 'customers' | 'all'): void {
    this.selectedTab = tab;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  private refreshUsers(): void {
    this.allUsers = this.authService.getAllUsers();
    this.vendorList = this.allUsers.filter((user) => user.role === 'vendor');
    this.customerList = this.allUsers.filter((user) => user.role === 'customer');
  }

  promoteToVendor(user: { email: string }): void {
    this.authService.updateUserRole(user.email, 'vendor');
    this.refreshUsers();
  }

  promoteToCustomer(user: { email: string }): void {
    this.authService.updateUserRole(user.email, 'customer');
    this.refreshUsers();
  }

  deleteUser(user: { email: string }): void {
    this.authService.deleteUser(user.email);
    this.refreshUsers();
  }
}
