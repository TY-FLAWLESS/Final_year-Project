import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  template: `
    <div class="container py-5">
      <div class="card shadow-sm">
        <div class="card-body">
          <h2>Admin Dashboard</h2>
          <p class="text-muted">Manage vendors, approve products, and oversee campus marketplace activity.</p>
          <ul class="list-group">
            <li class="list-group-item">Approve vendor applications</li>
            <li class="list-group-item">Monitor marketplace orders</li>
            <li class="list-group-item">Review platform analytics</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class AdminDashboardComponent {}
