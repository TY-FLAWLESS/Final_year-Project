import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-dashboard',
  template: `
    <div class="container py-5">
      <div class="card shadow-sm">
        <div class="card-body">
          <h2>Vendor Dashboard</h2>
          <p class="text-muted">List products, manage stock, and track incoming orders from customers.</p>
          <ul class="list-group">
            <li class="list-group-item">Add and edit products</li>
            <li class="list-group-item">Manage the order queue</li>
            <li class="list-group-item">Update store location and contact details</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class VendorDashboardComponent {}
