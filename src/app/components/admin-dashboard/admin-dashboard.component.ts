import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  template: `
    <div class="admin-shell">
      <header class="admin-topbar">
        <div class="brand-group">
          <button class="mobile-sidebar-toggle" type="button" aria-label="Toggle sidebar" (click)="toggleSidebar()">
            ☰
          </button>
          <div class="brand-mark">KTU</div>
          <div>
            <p class="eyebrow">Admin portal</p>
            <h1>Marketplace control center</h1>
          </div>
        </div>

        <div class="topbar-actions">
          <a class="btn btn-ghost" routerLink="/">Marketplace</a>
          <button class="btn btn-secondary" (click)="logout()">Logout</button>
        </div>
      </header>

      <div class="sidebar-backdrop" *ngIf="isSidebarOpen" (click)="closeSidebar()"></div>

      <section class="summary-grid">
        <article class="summary-card blue">
          <div class="summary-top">
            <span class="summary-icon">👥</span>
            <span class="summary-label">Total users</span>
          </div>
          <h2>{{ allUsers.length }}</h2>
          <p>{{ vendorList.length }} vendors · {{ customerList.length }} customers</p>
        </article>
        <article class="summary-card violet">
          <div class="summary-top">
            <span class="summary-icon">🏪</span>
            <span class="summary-label">Vendor pool</span>
          </div>
          <h2>{{ vendorList.length }}</h2>
          <p>Storefronts and approved sellers</p>
        </article>
        <article class="summary-card green">
          <div class="summary-top">
            <span class="summary-icon">🛒</span>
            <span class="summary-label">Customer base</span>
          </div>
          <h2>{{ customerList.length }}</h2>
          <p>Active shoppers and campus buyers</p>
        </article>
      </section>

      <div class="admin-filter-bar">
        <div class="tabs">
          <button class="tab" [class.active]="selectedTab === 'vendors'" (click)="setTab('vendors')">Vendors</button>
          <button class="tab" [class.active]="selectedTab === 'customers'" (click)="setTab('customers')">Customers</button>
          <button class="tab" [class.active]="selectedTab === 'admins'" (click)="setTab('admins')">Admins</button>
          <button class="tab" [class.active]="selectedTab === 'all'" (click)="setTab('all')">All users</button>
        </div>
        <div class="search-box">
          <span>🔎</span>
          <input type="text" placeholder="Search users..." [(ngModel)]="searchTerm" />
        </div>
        <div class="status-pill">Showing {{ filteredUsers.length }} accounts</div>
      </div>

      <section class="admin-grid">
        <aside class="admin-sidebar" [class.open]="isSidebarOpen">
          <div class="panel sidebar-panel">
            <div class="sidebar-header-row">
              <h3>Navigation</h3>
              <button class="sidebar-close" type="button" aria-label="Close sidebar" (click)="closeSidebar()">✕</button>
            </div>
            <nav class="sidebar-nav">
              <button class="nav-btn" [class.active]="selectedSection === 'overview'" type="button" (click)="selectSection('overview')">Overview</button>
              <button class="nav-btn" [class.active]="selectedSection === 'approved-vendors'" type="button" (click)="selectSection('approved-vendors')">Approved vendors</button>
              <button class="nav-btn" [class.active]="selectedSection === 'analytics'" type="button" (click)="selectSection('analytics')">Analytics</button>
              <button class="nav-btn" [class.active]="selectedSection === 'security'" type="button" (click)="selectSection('security')">Security</button>
              <button class="nav-btn" [class.active]="selectedSection === 'audit'" type="button" (click)="selectSection('audit')">Audit log</button>
            </nav>
          </div>

        </aside>

        <main class="admin-main">
          <div class="panel glass-panel panel-main">
            <div *ngIf="selectedSection === 'overview'">
              <div class="panel-header">
                <div>
                  <p class="eyebrow small">Account management</p>
                  <h2>{{ selectedTab === 'vendors' ? 'Vendor accounts' : selectedTab === 'customers' ? 'Customer accounts' : selectedTab === 'admins' ? 'Admin accounts' : 'All users' }}</h2>
                </div>
                <span class="badge">{{ filteredUsers.length }} accounts</span>
              </div>

              <div *ngIf="pendingVendors.length" class="request-panel panel">
                <div class="request-header">
                  <div>
                    <p class="eyebrow small">Vendor requests</p>
                    <h3>Pending approvals</h3>
                  </div>
                  <span class="request-count">{{ pendingVendors.length }}</span>
                </div>

                <div class="request-list">
                  <article *ngFor="let vendor of pendingVendors" class="request-item">
                    <div>
                      <strong>{{ vendor.name }}</strong>
                      <p>{{ vendor.email }}</p>
                      <p *ngIf="vendor.businessName">Business: {{ vendor.businessName }}</p>
                      <p *ngIf="vendor.businessCategory">Category: {{ vendor.businessCategory }}</p>
                      <p *ngIf="vendor.businessPhone">Phone: {{ vendor.businessPhone }}</p>
                    </div>
                    <div class="request-actions">
                      <button class="mini-btn approve" type="button" (click)="approveVendor(vendor)">Approve</button>
                      <button class="mini-btn reject" type="button" (click)="rejectVendor(vendor)">Reject</button>
                    </div>
                  </article>
                </div>
              </div>

              <div *ngIf="filteredUsers.length; else emptyState" class="user-list">
                <article *ngFor="let user of filteredUsers" class="user-card">
                  <div class="user-meta">
                    <div class="user-avatar">{{ user.name.charAt(0).toUpperCase() }}</div>
                    <div class="user-info">
                      <div class="user-title-row">
                        <div class="user-title">{{ user.name }}</div>
                        <span class="role-badge {{ user.role }}">{{ user.role }}</span>
                      </div>
                      <p class="user-email">{{ user.email }}</p>
                      <div class="status-line">
                        <span class="mini-status" [class.banned]="user.isBanned" [class.pending]="user.role === 'vendor' && !user.isActive && !user.isBanned" [class.active]="!user.isBanned && user.isActive !== false">
                          {{ user.isBanned ? 'Banned' : user.role === 'vendor' && !user.isActive ? 'Pending approval' : 'Active' }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="user-actions">
                    <button class="btn btn-sm btn-outline" *ngIf="canManageUser(user) && user.role !== 'admin' && user.role !== 'vendor'" (click)="promoteToVendor(user)">Promote to vendor</button>
                    <button class="btn btn-sm btn-outline" *ngIf="canManageUser(user) && user.role === 'vendor'" (click)="promoteToCustomer(user)">Demote to customer</button>
                    <button class="btn btn-sm btn-outline" *ngIf="canManageUser(user) && user.role !== 'admin'" (click)="promoteToAdmin(user)">Promote to admin</button>
                    <button class="btn btn-sm btn-outline" *ngIf="canManageUser(user) && user.role === 'admin'" (click)="demoteToCustomer(user)">Demote to customer</button>
                    <button class="btn btn-sm btn-outline" *ngIf="canManageUser(user) && user.isBanned" (click)="unbanUser(user)">Unban user</button>
                    <button class="btn btn-sm btn-outline" *ngIf="canManageUser(user) && !user.isBanned" (click)="banUser(user)">Ban user</button>
                    <button class="btn btn-sm btn-danger" *ngIf="canManageUser(user)" (click)="deleteUser(user)">Remove user</button>
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

            <div *ngIf="selectedSection === 'approved-vendors'" class="section-content">
              <div class="panel-header">
                <div>
                  <p class="eyebrow small">Trusted sellers</p>
                  <h2>Approved vendors</h2>
                </div>
              </div>

              <div *ngIf="vendorList.length; else noApprovedVendors" class="user-list">
                <article *ngFor="let user of vendorList" class="user-card">
                  <div class="user-meta">
                    <div class="user-avatar">{{ user.name.charAt(0).toUpperCase() }}</div>
                    <div>
                      <div class="user-title">{{ user.name }}</div>
                      <p class="user-email">{{ user.email }}</p>
                      <span class="role-badge vendor">vendor</span>
                    </div>
                  </div>
                  <div class="user-actions">
                    <button class="btn btn-sm btn-outline" (click)="promoteToCustomer(user)">Demote to customer</button>
                    <button class="btn btn-sm btn-danger" (click)="deleteUser(user)">Remove</button>
                  </div>
                </article>
              </div>

              <ng-template #noApprovedVendors>
                <div class="empty-state">
                  <h3>No approved vendors yet</h3>
                  <p class="text-muted">Approve requests from the vendor list to populate this section.</p>
                </div>
              </ng-template>
            </div>

            <div *ngIf="selectedSection === 'analytics'" class="section-content">
              <div class="panel-header">
                <div>
                  <p class="eyebrow small">Performance</p>
                  <h2>Marketplace analytics</h2>
                </div>
              </div>

              <div class="stats-grid">
                <div class="stat-box">
                  <span>Approved vendors</span>
                  <strong>{{ vendorList.length }}</strong>
                </div>
                <div class="stat-box">
                  <span>Customer accounts</span>
                  <strong>{{ customerList.length }}</strong>
                </div>
                <div class="stat-box">
                  <span>Pending review</span>
                  <strong>{{ pendingVendors.length }}</strong>
                </div>
                <div class="stat-box">
                  <span>Security flags</span>
                  <strong>{{ bannedUsers.length }}</strong>
                </div>
              </div>

              <div class="mini-chart">
                <div class="chart-bar" style="height: 45%"></div>
                <div class="chart-bar" style="height: 68%"></div>
                <div class="chart-bar" style="height: 80%"></div>
                <div class="chart-bar" style="height: 62%"></div>
                <div class="chart-bar" style="height: 92%"></div>
              </div>
            </div>

            <div *ngIf="selectedSection === 'security'" class="section-content">
              <div class="panel-header">
                <div>
                  <p class="eyebrow small">Protection</p>
                  <h2>Security overview</h2>
                </div>
              </div>

              <div class="security-list">
                <div class="security-item">
                  <span>Banned users</span>
                  <strong>{{ bannedUsers.length }}</strong>
                </div>
                <div class="security-item">
                  <span>Vendor approvals pending</span>
                  <strong>{{ pendingVendors.length }}</strong>
                </div>
                <div class="security-item">
                  <span>Protected admin accounts</span>
                  <strong>{{ adminList.length }}</strong>
                </div>
                <div class="security-item">
                  <span>Marketplace status</span>
                  <strong>Secure</strong>
                </div>
              </div>
            </div>

            <div *ngIf="selectedSection === 'audit'" class="section-content">
              <div class="panel-header">
                <div>
                  <p class="eyebrow small">Recent activity</p>
                  <h2>Audit log</h2>
                </div>
              </div>

              <div class="audit-list">
                <div class="audit-item">
                  <span class="audit-time">Today</span>
                  <p>System review completed for {{ vendorList.length }} vendors and {{ customerList.length }} customers.</p>
                </div>
                <div class="audit-item">
                  <span class="audit-time">Today</span>
                  <p>{{ pendingVendors.length }} vendor requests are awaiting admin action.</p>
                </div>
                <div class="audit-item">
                  <span class="audit-time">Today</span>
                  <p>{{ bannedUsers.length }} users are currently restricted from access.</p>
                </div>
              </div>
            </div>
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
        padding: 3rem 1.5rem 4rem;
      }

      .admin-topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
        padding: 1.6rem 1.8rem;
        border-radius: 1.8rem;
        background: linear-gradient(135deg, rgba(15, 23, 42, 0.96) 0%, rgba(17, 24, 39, 0.92) 100%);
        border: 1px solid rgba(148, 163, 184, 0.12);
        box-shadow: 0 24px 60px rgba(15, 23, 42, 0.4);
      }

      .brand-group {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .brand-mark {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        border-radius: 18px;
        background: linear-gradient(135deg, #38bdf8, #2563eb);
        color: white;
        font-weight: 800;
        letter-spacing: 0.08em;
        box-shadow: 0 12px 28px rgba(37, 99, 235, 0.4);
      }

      .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.18em;
        color: #7dd3fc;
        font-size: 0.74rem;
        font-weight: 800;
        margin: 0 0 0.45rem;
      }

      .eyebrow.small {
        letter-spacing: 0.12em;
        font-size: 0.68rem;
      }

      .admin-topbar h1 {
        margin: 0;
        font-size: clamp(2rem, 3vw, 2.8rem);
        line-height: 1.1;
      }

      .topbar-actions {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
      }

      .btn {
        border-radius: 999px;
        font-weight: 700;
        cursor: pointer;
        border: none;
      }

      .btn-ghost {
        background: rgba(255, 255, 255, 0.05);
        color: #e2e8f0;
        border: 1px solid rgba(148, 163, 184, 0.18);
        padding: 0.9rem 1.5rem;
        text-decoration: none;
      }

      .btn-secondary {
        background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        color: white;
        padding: 0.9rem 1.4rem;
        box-shadow: 0 12px 22px rgba(37, 99, 235, 0.25);
      }

      .summary-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.8rem;
        margin: 1.5rem 0;
      }

      .summary-card {
        padding: 1rem 1rem 0.9rem;
        border-radius: 1.2rem;
        background: rgba(15, 23, 42, 0.92);
        border: 1px solid rgba(148, 163, 184, 0.1);
        box-shadow: 0 14px 28px rgba(2, 6, 23, 0.3);
        text-align: center;
        min-height: 140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .summary-card.blue { background: linear-gradient(135deg, rgba(59, 130, 246, 0.22), rgba(30, 64, 175, 0.18)); }
      .summary-card.violet { background: linear-gradient(135deg, rgba(168, 85, 247, 0.18), rgba(76, 29, 149, 0.16)); }
      .summary-card.green { background: linear-gradient(135deg, rgba(16, 185, 129, 0.18), rgba(4, 120, 87, 0.13)); }

      .summary-top {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin-bottom: 0.6rem;
      }

      .summary-icon {
        width: 32px;
        height: 32px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.08);
        font-size: 1rem;
      }

      .summary-label {
        text-transform: uppercase;
        letter-spacing: 0.12em;
        font-size: 0.68rem;
        color: #dbeafe;
      }

      .summary-card h2 {
        font-size: clamp(1.6rem, 2.1vw, 2.2rem);
        margin: 0 0 0.25rem;
        line-height: 1.1;
      }

      .summary-card p {
        margin: 0;
        color: #dbeafe;
        font-size: 0.82rem;
        line-height: 1.4;
      }

      .admin-filter-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
      }

      .tabs {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
      }

      .tab {
        border: 1px solid rgba(148, 163, 184, 0.18);
        background: rgba(255, 255, 255, 0.04);
        color: #e2e8f0;
        padding: 0.9rem 1.2rem;
        border-radius: 999px;
        font-weight: 700;
        cursor: pointer;
      }

      .tab.active {
        background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        border-color: transparent;
        box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
      }

      .status-pill {
        align-self: center;
        padding: 0.8rem 1rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(148, 163, 184, 0.14);
        color: #dbeafe;
      }

      .search-box {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        min-width: 220px;
        padding: 0.75rem 0.9rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(148, 163, 184, 0.12);
      }

      .search-box input {
        width: 100%;
        background: transparent;
        border: none;
        color: #e2e8f0;
        outline: none;
      }

      .search-box input::placeholder {
        color: #94a3b8;
      }

      .admin-grid {
        display: grid;
        grid-template-columns: 320px minmax(0, 1fr);
        gap: 1.25rem;
      }

      .sidebar-backdrop {
        display: none;
      }

      .admin-sidebar {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .sidebar-metrics {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.9rem;
        align-items: stretch;
      }

      .metric-panel {
        min-height: 100%;
      }

      .sidebar-header-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }

      .sidebar-close {
        display: none;
      }

      .mobile-sidebar-toggle {
        display: none;
      }

      .panel {
        border-radius: 1.6rem;
        border: 1px solid rgba(148, 163, 184, 0.12);
        background: rgba(15, 23, 42, 0.92);
        padding: 1.4rem;
        box-shadow: 0 20px 48px rgba(15, 23, 42, 0.2);
      }

      .panel h3 {
        margin-top: 0;
        margin-bottom: 1rem;
      }

      .sidebar-panel {
        padding-top: 1.2rem;
      }

      .sidebar-nav {
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
      }

      .nav-btn {
        border: 1px solid rgba(148, 163, 184, 0.12);
        background: rgba(255, 255, 255, 0.04);
        color: #e2e8f0;
        padding: 0.8rem 0.9rem;
        text-align: left;
        border-radius: 12px;
        font-weight: 600;
      }

      .nav-btn.active {
        background: linear-gradient(135deg, rgba(59,130,246,0.18), rgba(37,99,235,0.14));
        border-color: rgba(96, 165, 250, 0.5);
      }

      .quick-actions {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
      }

      .quick-action-btn {
        width: 100%;
        text-align: left;
        padding: 0.8rem 0.9rem;
        border-radius: 12px;
        border: 1px solid rgba(148, 163, 184, 0.12);
        background: rgba(255, 255, 255, 0.04);
        color: #e2e8f0;
        font-weight: 600;
        cursor: pointer;
      }

      .quick-action-btn:hover {
        background: rgba(59, 130, 246, 0.12);
        border-color: rgba(96, 165, 250, 0.4);
      }

      .metric-row {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 0.9rem;
        padding-bottom: 0.9rem;
        border-bottom: 1px solid rgba(148, 163, 184, 0.08);
        color: #cbd5e1;
      }

      .metric-row:last-child {
        padding-bottom: 0;
        border-bottom: none;
        margin-bottom: 0;
      }

      .metric-row strong {
        color: #f8fafc;
      }

      .admin-main {
        display: flex;
        flex-direction: column;
      }

      .panel-main {
        min-height: 420px;
      }

      .panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.25rem;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.7rem 0.9rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(148, 163, 184, 0.12);
        color: #e2e8f0;
        font-size: 0.86rem;
      }

      .user-list {
        display: grid;
        gap: 0.9rem;
      }

      .user-card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding: 1rem 1.1rem;
        border-radius: 1.2rem;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(148, 163, 184, 0.08);
      }

      .user-meta {
        display: flex;
        align-items: center;
        gap: 0.9rem;
        flex: 1;
        min-width: 0;
      }

      .user-info {
        flex: 1;
        min-width: 0;
      }

      .user-title-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.8rem;
        flex-wrap: wrap;
      }

      .user-avatar {
        width: 46px;
        height: 46px;
        border-radius: 15px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #38bdf8, #2563eb);
        color: white;
        font-weight: 700;
      }

      .user-title {
        font-size: 1.05rem;
        font-weight: 700;
      }

      .user-email {
        margin: 0.3rem 0 0;
        color: #94a3b8;
        font-size: 0.92rem;
      }

      .role-badge {
        display: inline-flex;
        align-items: center;
        padding: 0.45rem 0.8rem;
        border-radius: 999px;
        text-transform: uppercase;
        font-size: 0.68rem;
        letter-spacing: 0.1em;
        margin-top: 0.7rem;
      }

      .status-line {
        margin-top: 0.6rem;
      }

      .mini-status {
        display: inline-flex;
        align-items: center;
        padding: 0.35rem 0.6rem;
        border-radius: 999px;
        font-size: 0.72rem;
        background: rgba(34, 197, 94, 0.12);
        color: #bbf7d0;
      }

      .mini-status.pending {
        background: rgba(250, 204, 21, 0.12);
        color: #fde68a;
      }

      .mini-status.banned {
        background: rgba(239, 68, 68, 0.12);
        color: #fecaca;
      }

      .role-badge.vendor { background: rgba(59, 130, 246, 0.18); color: #bfdbfe; }
      .role-badge.customer { background: rgba(34, 197, 94, 0.18); color: #bbf7d0; }
      .role-badge.admin { background: rgba(168, 85, 247, 0.18); color: #e9d5ff; }

      .user-actions {
        display: flex;
        gap: 0.6rem;
        flex-wrap: wrap;
        justify-content: flex-end;
      }

      .btn-sm {
        padding: 0.7rem 0.9rem;
        font-size: 0.8rem;
      }

      .btn-outline {
        border: 1px solid rgba(148, 163, 184, 0.22);
        background: rgba(255, 255, 255, 0.05);
        color: #e2e8f0;
      }

      .btn-danger {
        background: #ef4444;
        color: white;
      }

      .section-content {
        display: block;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
        margin-top: 1rem;
      }

      .stat-box,
      .security-item,
      .audit-item {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(148, 163, 184, 0.08);
        border-radius: 1rem;
        padding: 1rem;
      }

      .stat-box {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }

      .stat-box span,
      .security-item span {
        color: #cbd5e1;
      }

      .stat-box strong,
      .security-item strong {
        font-size: 1.6rem;
      }

      .mini-chart {
        display: flex;
        align-items: flex-end;
        gap: 1rem;
        height: 180px;
        margin-top: 1.5rem;
        padding: 1rem;
        border-radius: 1rem;
        background: rgba(255, 255, 255, 0.03);
      }

      .chart-bar {
        flex: 1;
        border-radius: 0.75rem 0.75rem 0 0;
        background: linear-gradient(180deg, #38bdf8 0%, #2563eb 100%);
      }

      .security-list,
      .audit-list {
        display: grid;
        gap: 0.9rem;
        margin-top: 1rem;
      }

      .security-item,
      .audit-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
      }

      .audit-item {
        display: block;
      }

      .audit-item p {
        margin: 0.45rem 0 0;
        color: #cbd5e1;
      }

      .audit-time {
        display: inline-block;
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #7dd3fc;
      }

      .request-panel {
        padding-bottom: 1rem;
      }

      .request-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.9rem;
      }

      .request-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: rgba(59, 130, 246, 0.2);
        color: #bfdbfe;
        font-size: 0.75rem;
        font-weight: 800;
      }

      .request-list {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }

      .request-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.8rem;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(148, 163, 184, 0.08);
        border-radius: 12px;
        padding: 0.75rem 0.8rem;
      }

      .request-item strong {
        display: block;
        margin-bottom: 0.2rem;
      }

      .request-item p {
        margin: 0;
        color: #94a3b8;
        font-size: 0.8rem;
      }

      .request-actions {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }

      .mini-btn {
        border: none;
        border-radius: 8px;
        padding: 0.42rem 0.58rem;
        font-size: 0.7rem;
        font-weight: 700;
        cursor: pointer;
      }

      .mini-btn.approve {
        background: rgba(34,197,94,0.12);
        color: #bbf7d0;
      }

      .mini-btn.reject {
        background: rgba(239,68,68,0.12);
        color: #fecaca;
      }

      .empty-small {
        color: #94a3b8;
        margin: 0;
        font-size: 0.9rem;
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
        .summary-grid,
        .admin-grid,
        .sidebar-metrics {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 720px) {
        .admin-shell {
          padding-inline: 1rem;
        }

        .mobile-sidebar-toggle {
          display: inline-flex;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          color: #e2e8f0;
          font-size: 1.3rem;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .admin-sidebar {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: min(82vw, 300px);
          transform: translateX(-110%);
          transition: transform 0.28s ease;
          z-index: 1200;
          background: rgba(2, 6, 23, 0.98);
          border-right: 1px solid rgba(148, 163, 184, 0.12);
          padding: 1rem 0.8rem;
          overflow-y: auto;
        }

        .admin-sidebar.open {
          transform: translateX(0);
        }

        .sidebar-close {
          display: inline-flex;
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          color: #e2e8f0;
          cursor: pointer;
        }

        .sidebar-backdrop {
          display: block;
          position: fixed;
          inset: 0;
          background: rgba(2, 6, 23, 0.5);
          z-index: 1100;
        }

        .admin-grid {
          grid-template-columns: 1fr;
        }

        .admin-topbar,
        .panel,
        .summary-card {
          border-radius: 1.2rem;
        }

        .user-card {
          flex-direction: column;
          align-items: flex-start;
        }

        .user-actions {
          width: 100%;
          justify-content: flex-start;
        }
      }
    `
  ],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink]
})
export class AdminDashboardComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  selectedTab: 'vendors' | 'customers' | 'admins' | 'all' = 'vendors';
  selectedSection: 'overview' | 'approved-vendors' | 'analytics' | 'security' | 'audit' = 'overview';
  isSidebarOpen = false;
  searchTerm = '';
  allUsers = this.authService.getAllUsers();
  vendorList = this.allUsers.filter((user) => user.role === 'vendor');
  customerList = this.allUsers.filter((user) => user.role === 'customer');
  adminList = this.allUsers.filter((user) => user.role === 'admin');
  pendingVendors = this.authService.getPendingVendors();
  bannedUsers = this.allUsers.filter((user) => user.isBanned);

  get filteredUsers() {
    const source = this.selectedTab === 'vendors'
      ? this.vendorList
      : this.selectedTab === 'customers'
        ? this.customerList
        : this.selectedTab === 'admins'
          ? this.adminList
          : this.allUsers;

    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return source;
    }

    return source.filter((user) =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.role.toLowerCase().includes(term)
    );
  }

  get selectedUsers() {
    return this.filteredUsers;
  }

  setTab(tab: 'vendors' | 'customers' | 'admins' | 'all'): void {
    this.selectedTab = tab;
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }

  selectSection(section: 'overview' | 'approved-vendors' | 'analytics' | 'security' | 'audit'): void {
    this.selectedSection = section;
    this.closeSidebar();
  }

  setSection(section: 'overview' | 'approved-vendors' | 'analytics' | 'security' | 'audit'): void {
    this.selectSection(section);
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => this.router.navigate(['/login'])
    });
  }

  private refreshUsers(): void {
    this.allUsers = this.authService.getAllUsers();
    this.vendorList = this.allUsers.filter((user) => user.role === 'vendor');
    this.customerList = this.allUsers.filter((user) => user.role === 'customer');
    this.adminList = this.allUsers.filter((user) => user.role === 'admin');
    this.pendingVendors = this.authService.getPendingVendors();
    this.bannedUsers = this.allUsers.filter((user) => user.isBanned);
  }

  canManageUser(user: { email: string; role: string }): boolean {
    const currentUser = this.authService.getCurrentUser();
    return !!currentUser && currentUser.email.toLowerCase() !== user.email.toLowerCase();
  }

  promoteToVendor(user: { email: string }): void {
    this.authService.updateUserRole(user.email, 'vendor');
    this.refreshUsers();
  }

  promoteToCustomer(user: { email: string }): void {
    this.authService.updateUserRole(user.email, 'customer');
    this.refreshUsers();
  }

  promoteToAdmin(user: { email: string }): void {
    this.authService.updateUserRole(user.email, 'admin');
    this.refreshUsers();
  }

  demoteToCustomer(user: { email: string }): void {
    this.authService.updateUserRole(user.email, 'customer');
    this.refreshUsers();
  }

  banUser(user: { email: string }): void {
    this.authService.banUser(user.email);
    this.refreshUsers();
  }

  unbanUser(user: { email: string }): void {
    this.authService.unbanUser(user.email);
    this.refreshUsers();
  }

  approveVendor(user: { email: string }): void {
    this.authService.approveVendor(user.email);
    this.refreshUsers();
  }

  rejectVendor(user: { email: string }): void {
    this.authService.rejectVendor(user.email);
    this.refreshUsers();
  }

  deleteUser(user: { email: string }): void {
    this.authService.deleteUser(user.email);
    this.refreshUsers();
  }
}
